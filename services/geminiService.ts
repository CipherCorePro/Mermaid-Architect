import { GoogleGenAI } from "@google/genai";
import { FileContents, DiagramType, Language, DiagrammingLanguage, Manual, ModelConfig } from "../types";

declare const plantumlEncoder: any;

// --- Helper Functions ---

/**
 * Cleans the AI's text response, removing markdown fences if they exist.
 */
const cleanAiResponse = (text: string): string => {
    let cleanedText = text.trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = cleanedText.match(fenceRegex);
    if (match && match[2]) {
        cleanedText = match[2].trim();
    }
    return cleanedText;
};

/**
 * Makes a call to an OpenAI-compatible API like LM Studio.
 * @param prompt The full prompt to send to the model.
 * @param modelConfig The configuration for the AI provider.
 * @param expectJson Whether to instruct the API to return a JSON object.
 * @param temperature The creativity of the response.
 * @returns The text content from the AI response.
 */
async function lmStudioChatCompletion(
    prompt: string, 
    modelConfig: ModelConfig, 
    expectJson: boolean,
    temperature: number = 0.3
): Promise<string> {
    const body: any = {
        model: modelConfig.lmStudioModel,
        messages: [{ role: 'user', content: prompt }],
        temperature,
    };
    
    // The user reported an error with LM Studio: `{"error":"'response_format.type' must be 'json_schema' or 'text'"}`
    // This indicates the connected LM Studio version doesn't support `{ type: 'json_object' }`.
    // To resolve this, we will not set the `response_format` parameter for LM Studio calls.
    // The prompts are already engineered to explicitly request a JSON response, so the model
    // should still provide the correct output format, making the application more robust.
    if (expectJson) {
        // body.response_format = { type: 'json_object' }; // This causes an error with some LM Studio setups.
    }

    const response = await fetch(`${modelConfig.lmStudioBaseUrl}/chat/completions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`LM Studio API Error: ${response.status} ${errorText}`);
    }
    const data = await response.json();
    if (!data.choices || data.choices.length === 0 || !data.choices[0].message?.content) {
        throw new Error('LM Studio returned an invalid or empty response.');
    }
    return data.choices[0].message.content;
}


const getDiagramInstructions = (diagramType: DiagramType, diagrammingLanguage: DiagrammingLanguage): string => {
    if (diagrammingLanguage === 'plantuml') {
        switch (diagramType) {
            case 'flowchart TD':
                return "Generate a PlantUML 'activity diagram' that illustrates the primary control flow, function calls, and logic paths. Use '@startuml' and '@enduml'.";
            case 'sequenceDiagram':
                return "Generate a PlantUML 'sequence diagram' that shows the sequence of interactions between different components. Use '@startuml' and '@enduml'.";
            case 'stateDiagram-v2':
                return "Generate a PlantUML 'state diagram' if the application has distinct states. Show the states and transitions. Use '@startuml' and '@enduml'.";
            case 'classDiagram':
            default:
                return "Generate a PlantUML 'class diagram' that represents the main components, classes, and their relationships. Use '@startuml' and '@enduml'.";
        }
    } else { // mermaid
        switch (diagramType) {
            case 'flowchart TD':
                return "Generate a Mermaid 'flowchart TD' that illustrates the primary control flow, function calls, and logic paths within the code. Focus on showing how data or control moves through the system.";
            case 'sequenceDiagram':
                return "Generate a Mermaid 'sequenceDiagram' that shows the sequence of interactions between different components or modules. Identify key function calls or events and represent them in chronological order.";
            case 'stateDiagram-v2':
                return "Generate a Mermaid 'stateDiagram-v2' if the application has distinct states (e.g., loading, idle, error). Show the states and the transitions between them based on events or conditions in the code.";
            case 'classDiagram':
            default:
                return "Generate a Mermaid 'classDiagram' that represents the main components, classes, modules, and their relationships (e.g., inheritance, composition). Focus on the static structure of the codebase.";
        }
    }
};

const getFileContentString = (files: FileContents): string => {
  return Object.entries(files)
    .filter(([path, content]) => {
        // Filter out binary-like files and large files to keep prompt concise
        const extension = path.split('.').pop()?.toLowerCase();
        const nonTextExtensions = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'ico', 'eot', 'ttf', 'woff', 'woff2', 'svg'];
        return content.length > 0 && content.length < 15000 && !nonTextExtensions.includes(extension || '');
    })
    .map(([path, content]) => `--- FILE: ${path} ---\n\`\`\`\n${content}\n\`\`\``)
    .join('\n\n');
}

const generatePromptForAnalysis = (files: FileContents, diagramType: DiagramType, language: Language, diagrammingLanguage: DiagrammingLanguage): string => {
  const fileContentString = getFileContentString(files);
  const langInstruction = language === 'de' ? 'German' : 'English';

  const plantUMLRule = diagrammingLanguage === 'plantuml'
    ? `6. PLANTUML-SPECIFIC RULE: Any participant (component, actor, etc.) with a name containing spaces or special characters MUST be enclosed in double quotes. Example: \`component "User Interface"\`. The name of a participant in a relationship must be an identifier that has been previously defined or is a quoted string. Do not use unquoted special characters like '*' as a participant.`
    : '';

  return `
You are an expert software architect called "Mermaid Architect AI".
Your task is to analyze the provided source code of a project and generate a ${diagrammingLanguage} diagram to visualize its architecture.
You must also provide a brief, one-paragraph explanation of the project's structure and the logic depicted in the diagram.

**CRITICAL LANGUAGE REQUIREMENT: The 'explanation' text MUST be written in ${langInstruction}.**

Analyze the following files:
${fileContentString}

RULES:
1. ${getDiagramInstructions(diagramType, diagrammingLanguage)}
2. Keep the diagram clear and concise. Focus on the most important architectural elements. Avoid excessive detail.
3. The ${diagrammingLanguage} code in the 'diagram' field MUST be syntactically correct and renderable. This is a critical requirement.
4. Your response MUST be a valid JSON object with the following structure: { "diagram": "...", "explanation": "..." }
5. Do not include the JSON in a markdown block or any other text. The response must be the raw JSON object.
${plantUMLRule}
`;
};

export const analyzeProject = async (
    files: FileContents, 
    diagramType: DiagramType, 
    language: Language, 
    diagrammingLanguage: DiagrammingLanguage,
    modelConfig: ModelConfig
): Promise<{ diagram: string; explanation:string; }> => {
  const prompt = generatePromptForAnalysis(files, diagramType, language, diagrammingLanguage);

  try {
    let resultText: string;
    if (modelConfig.provider === 'gemini') {
        const ai = new GoogleGenAI({ apiKey: modelConfig.apiKey });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: { responseMimeType: "application/json", temperature: 0.2 },
        });
        resultText = response.text;
    } else {
        resultText = await lmStudioChatCompletion(prompt, modelConfig, true, 0.2);
    }
    
    const parsed = JSON.parse(cleanAiResponse(resultText));
    if (typeof parsed.diagram === 'string' && typeof parsed.explanation === 'string') {
        return parsed;
    } else {
        throw new Error("AI response is missing 'diagram' or 'explanation' fields.");
    }

  } catch (error) {
    console.error("Error analyzing project:", error);
    throw new Error(`Failed to analyze project with AI. ${error instanceof Error ? error.message : String(error)}`);
  }
};

export const correctDiagramCode = async (faultyCode: string, errorMessage: string, diagrammingLanguage: DiagrammingLanguage, modelConfig: ModelConfig): Promise<string> => {
    const prompt = `
You are a world-class ${diagrammingLanguage} syntax correction expert.
The following ${diagrammingLanguage} code is syntactically incorrect and failed to render.
Your only task is to fix the syntax error and return a perfectly valid ${diagrammingLanguage} code block.

CRITICAL INSTRUCTIONS:
- Your output must ONLY be the raw, corrected ${diagrammingLanguage} code.
- Do NOT include any explanations, apologies, or markdown fences (like \`\`\`mermaid\`\`\`).
- Double-check your response to ensure it is 100% valid and will render correctly.

Error Message (this might be empty or unavailable for PlantUML, rely on the code):
${errorMessage}

Faulty ${diagrammingLanguage} Code:
${faultyCode}
`;

    try {
        let correctedCode: string;
        if (modelConfig.provider === 'gemini') {
            const ai = new GoogleGenAI({ apiKey: modelConfig.apiKey });
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: { temperature: 0 },
            });
            correctedCode = response.text;
        } else {
            correctedCode = await lmStudioChatCompletion(prompt, modelConfig, false, 0);
        }
        return cleanAiResponse(correctedCode);

    } catch (error) {
        console.error(`Error correcting ${diagrammingLanguage} code:`, error);
        throw new Error(`Failed to correct code with AI. ${error instanceof Error ? error.message : String(error)}`);
    }
};

const getDiagramEmbeddingInstructions = (diagrammingLanguage: DiagrammingLanguage, diagramCode: string): string => {
    if (diagrammingLanguage === 'plantuml') {
        const encoded = plantumlEncoder.encode(diagramCode);
        const imageUrl = `https://www.plantuml.com/plantuml/svg/${encoded}`;
        return `To display the PlantUML diagram, embed it as an image using the following URL. The image should be displayed on a white background for better visibility.
Example:
<div class="flex justify-center my-4 p-4 bg-white rounded-lg shadow">
  <img src="${imageUrl}" alt="PlantUML Diagram" style="max-width: 100%; height: auto;">
</div>`;
    } else { // mermaid
        return `To display the Mermaid diagram, ensure the Mermaid.js script is included in the HTML, then place the diagram code inside a <pre class="mermaid"> tag.
Example:
<div class="flex justify-center my-4 p-4 bg-gray-800 rounded-lg">
  <pre class="mermaid">${diagramCode}</pre>
</div>
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: true, theme: 'dark' });
</script>`;
    }
}

const generateDocument = async (
    prompt: string,
    modelConfig: ModelConfig
): Promise<string> => {
     try {
        let htmlContent: string;
        if (modelConfig.provider === 'gemini') {
            const ai = new GoogleGenAI({ apiKey: modelConfig.apiKey });
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: { temperature: 0.4 },
            });
            htmlContent = response.text;
        } else {
            htmlContent = await lmStudioChatCompletion(prompt, modelConfig, false, 0.4);
        }
        return cleanAiResponse(htmlContent);
    } catch (error) {
        console.error("Error generating document:", error);
        throw new Error(`Failed to generate document with AI. ${error instanceof Error ? error.message : String(error)}`);
    }
}

export const generateProjectDocumentation = async (files: FileContents, diagramCode: string, explanation: string, language: Language, diagrammingLanguage: DiagrammingLanguage, modelConfig: ModelConfig): Promise<string> => {
    const fileContentString = getFileContentString(files);
    const langInstruction = language === 'de' 
        ? 'Die gesamte Antwort, einschließlich aller Texte und Abschnittsüberschriften, MUSS auf Deutsch sein.' 
        : 'The entire response, including all text and section headers, MUST be in English.';

    const prompt = `
You are a senior software architect creating comprehensive project documentation.
Based on the provided project files, the architecture diagram code, and a summary, create a professional HTML documentation page.

**CRITICAL LANGUAGE INSTRUCTION: ${langInstruction}**

The output MUST be a single, complete HTML file.
The HTML should be modern, clean, and styled with Tailwind CSS classes (using a CDN link).
${diagrammingLanguage === 'mermaid' ? 'It must include a <script> tag for Mermaid.js to render the diagram.' : ''}
The final HTML must be well-formed and ready to be saved as a .html file and viewed in a browser.

The documentation should be structured with the following sections (section titles must be localized into the target language):

1.  **Project Overview**: A detailed summary of the project's purpose and functionality. Use the provided analysis explanation as a starting point and expand on it.
2.  **Architecture Diagram**: Display the provided diagram. ${getDiagramEmbeddingInstructions(diagrammingLanguage, diagramCode)}
3.  **Component Breakdown**: A detailed description of the key files and components.
4.  **Key Dependencies**: List the main libraries and frameworks used.
5.  **Setup and Usage**: Provide clear instructions on how to use the application.

Here is the context:

**Project Analysis:**
${explanation}

**Project Files:**
${fileContentString}
`;
    return generateDocument(prompt, modelConfig);
};

export const generateWhitepaper = async (files: FileContents, diagramCode: string, explanation: string, language: Language, diagrammingLanguage: DiagrammingLanguage, modelConfig: ModelConfig): Promise<string> => {
     const fileContentString = getFileContentString(files);
     const langInstruction = language === 'de' 
        ? 'Das gesamte Whitepaper, einschließlich aller Texte, Abschnittsüberschriften und Fachbegriffe, MUSS auf Deutsch sein.' 
        : 'The entire whitepaper, including all text, section headers, and technical terms, MUST be in English.';

    const prompt = `
You are a distinguished research scientist and technical writer authoring a scientific whitepaper.
Analyze the provided software project, its architecture diagram, and its summary to produce a formal whitepaper in HTML format.

**CRITICAL LANGUAGE INSTRUCTION: ${langInstruction}**

The output MUST be a single, complete HTML file.
The HTML should have a professional, academic style. Use embedded CSS for styling (within a <style> tag in the <head>).
${diagrammingLanguage === 'mermaid' ? 'It must include a <script> tag for Mermaid.js to render the diagram.' : ''}
The final HTML must be well-formed and ready to be saved as a .html file and viewed in a browser.

The whitepaper must contain the following sections (section titles must be localized into the target language):

1.  **Abstract**: A concise summary.
2.  **1. Introduction**: Elaborate on the problem domain.
3.  **2. System Architecture**: Present the software's architecture. ${getDiagramEmbeddingInstructions(diagrammingLanguage, diagramCode)}
4.  **3. Core Technologies & Implementation**: Discuss the key technologies.
5.  **4. Results & Discussion**: Discuss the benefits.
6.  **5. Conclusion & Future Work**: Summarize and suggest future enhancements.

Here is the context:

**Project Analysis:**
${explanation}

**Project Files:**
${fileContentString}
`;
    return generateDocument(prompt, modelConfig);
};

const getDiagramEmbeddingPromptInstructions = (diagrammingLanguage: DiagrammingLanguage): string => {
    if (diagrammingLanguage === 'plantuml') {
        return `When creating the 'documentation' and 'whitepaper' HTML, you MUST embed the generated PlantUML diagram as an image. Use a placeholder for the image source: \`src="PLANTUML_DIAGRAM_URL_PLACEHOLDER"\`. The client application will replace this placeholder with the correct URL. The image should have a white background and be responsive. Example: \`<div class="flex justify-center my-4 p-4 bg-white rounded-lg shadow"><img src="PLANTUML_DIAGRAM_URL_PLACEHOLDER" alt="PlantUML Diagram" style="max-width: 100%; height: auto;"></div>\``;
    } else { // mermaid
        return `When creating the 'documentation' and 'whitepaper' HTML, you MUST embed the generated Mermaid diagram code inside a \`<pre class="mermaid">\` tag and include the Mermaid.js script in the HTML to render it. Example: \`<div class="flex justify-center my-4 p-4 bg-gray-800 rounded-lg"><pre class="mermaid">...\`</pre></div><script type="module">import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'; mermaid.initialize({ startOnLoad: true, theme: 'dark' });\`</script>\``;
    }
}

export const generateArchitectureFromIdea = async (
    ideaPrompt: string, 
    diagramType: DiagramType, 
    language: Language,
    diagrammingLanguage: DiagrammingLanguage,
    modelConfig: ModelConfig
): Promise<{ diagram: string; documentation: string; whitepaper: string; superprompt: string; }> => {
    const langInstruction = language === 'de' ? 'German' : 'English';
    const diagramEmbeddingInstructions = getDiagramEmbeddingPromptInstructions(diagrammingLanguage);
    const plantUMLDiagramRule = diagrammingLanguage === 'plantuml'
    ? `The diagram must follow strict PlantUML syntax. Any participant (component, actor, etc.) with a name containing spaces or special characters MUST be enclosed in double quotes (e.g., \`component "User Interface"\`). The name of a participant in a relationship must be an identifier that has been previously defined or is a quoted string. Do not use unquoted special characters like '*' as a participant.`
    : '';

    const prompt = `
You are a Principal Solutions Architect. Your task is to generate a comprehensive architectural plan for a software application based on a user's idea.

**CRITICAL: RESPONSE FORMAT**
Your entire response MUST be a single, valid JSON object. It must start with \`{\` and end with \`}\`. Do NOT include any other text, explanations, or markdown fences before or after the JSON object.

The JSON object must have the following structure and keys:
{
  "diagram": "string",
  "documentation": "string",
  "whitepaper": "string",
  "superprompt": "string"
}

**CRITICAL: JSON STRING VALIDATION**
This is the most important instruction. An invalid JSON response is a complete failure.
The string values for "documentation", "whitepaper", and "superprompt" will contain complex content like multi-line HTML and Markdown. You MUST ensure these strings are correctly escaped to produce a syntactically valid JSON object.
1.  Escape Double Quotes: All double quotes (") inside a string value must be escaped with a backslash (\\").
2.  Escape Backslashes: All backslashes (\\) inside a string value must be escaped with another backslash (\\\\).
3.  Replace Newlines: All newline characters inside a string value MUST be replaced with the two characters \`\\n\`.

**TASK DETAILS**
- The user's idea is: "${ideaPrompt}"
- All text content you generate (explanations, titles, etc.) MUST be in ${langInstruction}.
- Based on the user's idea, generate the content for the four required JSON keys:

1.  **diagram**: A ${diagrammingLanguage} diagram script for a '${diagramType}'. This diagram should visualize the high-level architecture, components, and user flow of the proposed application. The code must be syntactically perfect and renderable. ${plantUMLDiagramRule}
2.  **documentation**: A complete, single HTML file string intended for a technical audience (developers). This document should be styled with modern, clean Tailwind CSS classes using the official CDN script. The HTML MUST be well-formed and ready to be saved and opened in a browser. ${diagramEmbeddingInstructions}
3.  **whitepaper**: A complete, single HTML file string formatted as a professional whitepaper. This document should be styled with professional, academic-looking embedded CSS (in a <style> tag in the <head>). The HTML must be well-formed. ${diagramEmbeddingInstructions}
4.  **superprompt**: A comprehensive and detailed prompt in Markdown format, intended for a sophisticated coding AI. This prompt should synthesize all the information from the idea, the diagram, and the documentation. It must be a complete set of instructions to build the application. The prompt must include:
    *   A high-level project goal.
    *   A detailed list of user stories or features.
    *   The architectural plan derived from the diagram (include the ${diagrammingLanguage} diagram code in a code block).
    *   A breakdown of components, their responsibilities, and a complete file structure.
    *   **The recommended technical stack. CRITICAL:** If the user's idea specifies a programming language, framework, or technology you MUST use that stack. If not specified, choose a modern and appropriate stack for the project's requirements.
    *   Step-by-step instructions for the AI on how to generate the code, file by file. The instructions for each file must be explicit and contain or describe the literal code to be written.
    *   The output must be a well-structured Markdown document.
`;
    try {
        let resultText: string;
        if (modelConfig.provider === 'gemini') {
            const ai = new GoogleGenAI({ apiKey: modelConfig.apiKey });
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: { responseMimeType: "application/json", temperature: 0.5 },
            });
            resultText = response.text;
        } else {
            resultText = await lmStudioChatCompletion(prompt, modelConfig, true, 0.5);
        }
    
        const parsed = JSON.parse(cleanAiResponse(resultText));
        if (typeof parsed.diagram === 'string' && typeof parsed.documentation === 'string' && typeof parsed.whitepaper === 'string' && typeof parsed.superprompt === 'string') {
          return parsed;
        } else {
          throw new Error("AI response is missing required fields.");
        }

    } catch (error: any) {
        console.error("Error generating architecture from idea:", error.message);
        throw new Error(`Failed to generate architecture with AI. ${error.message}`);
    }
};

export const generateMockupFromSuperprompt = async (superprompt: string, language: Language, modelConfig: ModelConfig): Promise<string> => {
    const langInstruction = language === 'de' ? 'German' : 'English';
    const prompt = `
You are a world-class UI/UX designer and frontend developer.
Your task is to create a single-page HTML mockup for a web application based on the provided "superprompt".

**CRITICAL INSTRUCTIONS:**
1.  **Output Format:** Your response MUST be a single, complete, and valid HTML file string. Do NOT include any explanations, apologies, or markdown fences. Just the raw HTML.
2.  **Styling:** Use Tailwind CSS for all styling. You MUST include the Tailwind CDN script in the <head> of the HTML: \`<script src="https://cdn.tailwindcss.com"></script>\`.
3.  **Content Language:** All visible text in the mockup (headings, buttons, labels, placeholder text, etc.) MUST be in ${langInstruction}.
4.  **Visual Design:** Create a modern, clean, and aesthetically pleasing layout. Use a consistent color scheme (e.g., a dark theme). The design should be responsive and user-friendly. Use placeholder icons where appropriate by referencing an icon library like Heroicons, which can be used via SVG copy-paste.
5.  **Functionality:** The mockup is for visual purposes only. No JavaScript functionality is required, but interactive elements should be present and styled correctly.
6.  **Interpretation:** Analyze the superprompt to understand the application's core features, UI components, and workflow. Translate these requirements into a visual design.

**Superprompt to Implement:**
---
${superprompt}
---
`;

    return generateDocument(prompt, modelConfig);
};

export const generateScaffoldingFromSuperprompt = async (superprompt: string, language: Language, modelConfig: ModelConfig): Promise<FileContents> => {
    const langInstruction = language === 'de' ? 'German' : 'English';
    const prompt = `
You are an expert full-stack software engineer. Your task is to generate the complete, production-ready source code for an entire application based on the provided "superprompt".

**CRITICAL INSTRUCTIONS:**
1.  **Full Implementation:** You MUST write the complete, functional, and production-quality code for EVERY file described in the superprompt. Do NOT use placeholders, "TODO" comments, or incomplete snippets.
2.  **Output Format:** Your response MUST be a single, valid JSON object mapping file paths (string) to their full string content. Do NOT wrap it in markdown fences.
3.  **Adherence to Superprompt:** Strictly follow the architecture, file structure, component breakdown, and technical stack specified in the superprompt.
4.  **JSON String Escaping:** Ensure all string values in the JSON are properly escaped (e.g., newlines as \\n, quotes as \\").
5.  **Content Language:** Any user-facing text or comments in the generated code should be in ${langInstruction}.

**Superprompt to implement:**
---
${superprompt}
---
`;

    try {
        let resultText: string;
         if (modelConfig.provider === 'gemini') {
            const ai = new GoogleGenAI({ apiKey: modelConfig.apiKey });
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: { responseMimeType: "application/json", temperature: 0.3 },
            });
            resultText = response.text;
        } else {
            resultText = await lmStudioChatCompletion(prompt, modelConfig, true, 0.3);
        }

        const parsedData = JSON.parse(cleanAiResponse(resultText)) as FileContents;
        if (typeof parsedData !== 'object' || parsedData === null || Array.isArray(parsedData)) {
            throw new Error("AI response was not a valid file contents object.");
        }
        return parsedData;

    } catch (e: any) {
        console.error("Failed to parse or validate scaffolding from AI response:", e.message);
        throw new Error("The AI returned an invalid or malformed scaffolding structure.");
    }
};


// --- MANUAL GENERATION ---

const getManualPrompt = (language: Language, contextType: 'code' | 'spec', context: string): string => {
  const langName = language === 'de' ? 'German' : 'English';
  const schema = `{
  "title": "string",
  "introduction": "string",
  "sections": [
    {
      "title": "string",
      "content": "string"
    }
  ]
}`;
  const instructions = {
    de: {
      main: "Sie sind ein erfahrener technischer Redakteur. Ihre Aufgabe ist es, ein umfassendes Benutzerhandbuch für eine Softwareanwendung zu erstellen.",
      input: contextType === 'code' 
        ? "Der Quellcode des Projekts wird als JSON-Objekt bereitgestellt, bei dem die Schlüssel die Dateipfade und die Werte der entsprechende Dateiinhalt sind."
        : "Die Spezifikation des Projekts wird als detaillierter 'Superprompt' bereitgestellt.",
      goal: "Analysieren Sie die bereitgestellten Informationen, um den Zweck der Anwendung, ihre grafische Benutzeroberfläche (GUI), ihre Funktionen und die Interaktion eines nicht-technischen Benutzers damit zu verstehen.",
      output: `Erstellen Sie ein Benutzerhandbuch auf Deutsch. Die Antwort MUSS ein gültiges JSON-Objekt sein. Umschließen Sie das JSON NICHT mit Markdown-Zäunen wie \`\`\`json.`,
      schema_desc: "Das JSON-Objekt muss sich strikt an das folgende Schema halten:",
      structure_guide: `
- "title": Ein prägnanter und beschreibender Titel für das Benutzerhandbuch.
- "introduction": Eine kurze Übersicht über den Zweck und die Hauptfunktionalität der Anwendung. Erklären Sie in einfachen Worten, was die Software tut.
- "sections": Ein Array von Objekten, wobei jedes Objekt einen Abschnitt des Handbuchs darstellt.
  - "title": Der Titel des Abschnitts (z.B. "Installation", "Hauptfenster", "Wichtige Funktionen", "Fehlerbehebung").
  - "content": Eine detaillierte Beschreibung des Themas für diesen Abschnitt, geschrieben für einen Endbenutzer. Erklären Sie GUI-Elemente und deren Funktionen klar und verständlich.`
    },
    en: {
      main: "You are an expert technical writer. Your task is to generate a comprehensive user manual for a software application.",
      input: contextType === 'code'
        ? "The project's source code is provided as a JSON object where keys are the file paths and values are the corresponding file content."
        : "The project's specification is provided as a detailed 'Superprompt'.",
      goal: "Analyze the provided information to understand the application's purpose, its Graphical User Interface (GUI), features, and how a non-technical user would interact with it.",
      output: `Generate a user manual in English. The response MUST be a valid JSON object. Do NOT wrap the JSON in markdown fences like \`\`\`json.`,
      schema_desc: `The JSON object must strictly adhere to the following schema:`,
      structure_guide: `
- "title": A concise and descriptive title for the user manual.
- "introduction": A brief overview of the application's purpose and main functionality. Explain what the software does in simple terms.
- "sections": An array of objects, where each object represents a section of the manual.
  - "title": The title of the section (e.g., "Installation", "Main Window", "Key Features", "Troubleshooting").
  - "content": A detailed description of the topic for that section, written for an end-user. Explain GUI elements and their functions clearly.`
    }
  };
  const selectedInstructions = instructions[language];
  return `
${selectedInstructions.main}
${selectedInstructions.input}
${selectedInstructions.goal}
${selectedInstructions.output}
${selectedInstructions.schema_desc}
\`\`\`json
${schema}
\`\`\`
${selectedInstructions.structure_guide}
---
HERE IS THE PROJECT CONTEXT:
---
${context}
`;
};

async function generateManual(prompt: string, modelConfig: ModelConfig): Promise<Manual> {
    try {
        let resultText: string;
         if (modelConfig.provider === 'gemini') {
            const ai = new GoogleGenAI({ apiKey: modelConfig.apiKey });
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: { responseMimeType: "application/json", temperature: 0.3 },
            });
            resultText = response.text;
        } else {
            resultText = await lmStudioChatCompletion(prompt, modelConfig, true, 0.3);
        }
        
        const parsedData = JSON.parse(cleanAiResponse(resultText)) as Manual;
        if (!parsedData.title || !parsedData.introduction || !Array.isArray(parsedData.sections)) {
            throw new Error("AI response is missing required fields (title, introduction, sections).");
        }
        return parsedData;
    } catch (e: any) {
        console.error("Failed to parse or validate manual from AI response:", e.message);
        throw new Error("The AI returned an invalid or malformed manual structure. Please try again.");
    }
}

export const generateProjectManual = async (files: FileContents, language: Language, modelConfig: ModelConfig): Promise<Manual> => {
    const projectContext = JSON.stringify(files, null, 2);
    const prompt = getManualPrompt(language, 'code', projectContext);
    return generateManual(prompt, modelConfig);
};

export const generateIdeaManual = async (superprompt: string, language: Language, modelConfig: ModelConfig): Promise<Manual> => {
    const prompt = getManualPrompt(language, 'spec', superprompt);
    return generateManual(prompt, modelConfig);
};
