# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run build`
# Mermaid Architect AI: Die Brücke zwischen Code und Vision

Von: Ralf Krümmel

<img width="1408" height="768" alt="converted_image" src="https://github.com/user-attachments/assets/fc3c14d5-fc5d-44ec-81e1-770ce40bbec4" />


---

Mermaid Architect AI: Die Brücke zwischen Code und Vision – Eine Reportage von Ralf Krümmel

In der dynamischen Welt der Softwareentwicklung ist die Dokumentation oft der ungeliebte Schritt, der in der Hektik des Alltags untergeht. Projektstrukturen werden komplex, Abhängigkeiten verschwimmen, und das Verständnis des eigenen Codes wird zur Mammutaufgabe. Alte, statische Diagramme verstauben in Ordnern, während der Code sich ständig weiterentwickelt. Doch was, wenn Künstliche Intelligenz diese Lücke schließen könnte? Was, wenn ein digitales Werkzeug nicht nur den Code liest, sondern ihn versteht, visualisiert und sogar neue Architekturen aus einer bloßen Idee schmiedet? Genau hier setzt "Mermaid Architect AI" an – eine innovative Desktop-Anwendung, die verspricht, die Art und Weise, wie wir Softwarearchitekturen begreifen und dokumentieren, grundlegend zu verändern.

## 1. Die Vision hinter dem Code: Ein Ende der Dokumentationsmühen

Die Idee hinter "Mermaid Architect AI" ist so kühn wie naheliegend: Die manuelle Erstellung und Pflege von Architekturdokumentationen ist ineffizient und fehleranfällig. Teams verbringen wertvolle Zeit damit, Diagramme von Hand zu zeichnen oder zu aktualisieren, nur um festzustellen, dass diese bereits veraltet sind, sobald der nächste Commit erfolgt. "Mermaid Architect AI" tritt an, diesen Prozess zu revolutionieren, indem es die Last der Dokumentation auf die Schultern einer intelligenten KI verlagert. Die Anwendung bietet zwei Kernfunktionen, die den gesamten Software-Lebenszyklus abdecken:

*   **Analyse bestehender Projekte:** Laden Sie eine ZIP-Datei Ihres Projektcodes hoch, und die KI analysiert ihn, um automatisch Architekturdiagramme in Mermaid oder PlantUML zu generieren. Dies spart unzählige Stunden manueller Arbeit.
*   **Architektur aus einer Idee generieren:** Beschreiben Sie Ihre Software-Vision in natürlicher Sprache, und die KI entwirft eine vollständige Architektur – inklusive Diagrammen, technischer Dokumentation, einem Whitepaper, UI-Mockups und sogar einem detaillierten "Superprompt" für die Code-Generierung. Ein umfassendes Benutzerhandbuch wird ebenfalls erstellt.

Der Clou: Die integrierte KI ist nicht nur ein Generator, sondern auch ein Korrektor. Sollte ein generiertes Diagramm Syntaxfehler aufweisen – ein bekanntes Problem bei der KI-Generierung von Code – versucht die Anwendung, diese intelligent zu beheben, um stets valide und renderbare Ergebnisse zu liefern. Dies ist ein entscheidender Vorteil, da die Modelle zwar beeindruckende Fähigkeiten haben, aber bei der strikten Einhaltung komplexer Syntax, wie sie Diagrammiersprachen erfordern, manchmal noch Schwächen zeigen. Wie die Entwickler selbst anmerken: "KI sind bei Diagrammen keine Weltmeister, so kommt es auch hier vor, dass das LLM den Code nicht richtig generiert. In diesem Fall ist notwendig, eine neue Analyse zu machen." Die Fehlerkorrektur der Anwendung ist ein direkter Lösungsansatz für diese Herausforderung.

## 2. Im digitalen Gehirn: Architektur und Technologie

Ein Blick unter die Haube von "Mermaid Architect AI" offenbart eine durchdachte und moderne Architektur. Die Anwendung ist als Desktop-Lösung konzipiert, die auf dem bewährten Electron-Framework basiert. Dies ermöglicht eine nahtlose plattformübergreifende Verfügbarkeit auf Windows, macOS und Linux und kombiniert die Leistungsfähigkeit nativer Anwendungen mit der Flexibilität einer Web-Frontend-Architektur.

Das Herzstück der Benutzeroberfläche bildet ein React-Frontend, das mit TypeScript entwickelt wurde. Dies gewährleistet eine robuste, wartbare und skalierbare Codebasis. Für das schnelle und konsistente Styling kommt Tailwind CSS zum Einsatz, das eine effiziente Gestaltung ohne umfangreiche, benutzerdefinierte CSS-Regeln ermöglicht. Die Verarbeitung von ZIP-Archiven erfolgt clientseitig mittels der JSZip-Bibliothek, was den Datenschutz erhöht, da Projektdateien nicht auf externe Server hochgeladen werden müssen.

Die Visualisierung der Architekturen wird durch zwei führende Diagrammiersprachen ermöglicht: Mermaid.js für das clientseitige Rendern und PlantUML, das über einen externen Server gerendert wird. Diese Dualität bietet Flexibilität und stellt sicher, dass auch komplexere oder spezifische Diagrammtypen abgedeckt werden können. Die Integration von `html2canvas` ermöglicht den Export der gerenderten Diagramme als PNG-Bilder, während SVG-Exporte direkt aus den generierten SVGs erfolgen können.

Die Intelligenz der Anwendung entspringt der tiefen Integration mit Künstlicher Intelligenz. "Mermaid Architect AI" kann entweder die Google Gemini API für leistungsstarke Cloud-basierte LLMs nutzen oder sich mit lokalen LLM-Servern, wie sie von LM Studio bereitgestellt werden, verbinden. Diese Flexibilität erlaubt es Benutzern, ihre bevorzugte KI-Umgebung zu wählen und bietet Optionen für Datenschutz und Latenz. Die Kommunikation mit diesen Modellen erfolgt direkt vom Client, ohne einen dedizierten Backend-Server der Anwendung.

Das folgende PlantUML-Diagramm (Abbildung 1) veranschaulicht die Kernkomponenten und ihre Interaktionen innerhalb des Systems:

```plantuml
skinparam ClassAttributeIconStyle private
skinparam ClassMethodIconStyle private

package "Electron Desktop Wrapper" {
    class "Electron Main Process (main.js)" {
        + createWindow()
        + loadFile(index.html)
    }
    class "index.html" {
        + loads JS/CSS
        + loads external libraries
    }
    "Electron Main Process (main.js)" --> "index.html" : loads
    "index.html" --> "ReactAppEntry (index.tsx)" : loads module
}

package "Application Core" {
    class "ReactAppEntry (index.tsx)" {
        + ReactDOM.createRoot()
        + root.render(<App />)
    }
    class App {
        + manageAppState()
        + orchestrateComponents()
        + handleProjectLogic()
        + interactWithAI()
    }
    "ReactAppEntry (index.tsx)" --> App : renders
}

package "UI Components" {
    class Header {
        + onZipUpload()
        + onAnalyze()
        + onSettingsToggle()
        + onAppModeChange()
    }
    class FileExplorer {
        + fileTree: FileNode
        + onFileClick()
    }
    class FileNodeView {
        + node: FileNode
        + onFileClick()
    }
    class MermaidEditor {
        + code: string
        + onCodeChange()
        + onRender()
    }
    class DiagramViewer {
        + diagramCode: string
        + diagrammingLanguage: DiagrammingLanguage
        + renderMermaid()
        + renderPlantUml()
        + handleDownload()
        + onFixError()
    }
    class SettingsModal {
        + themeSettings: ThemeSettings
        + diagramType: DiagramType
        + diagrammingLanguage: DiagrammingLanguage
        + modelConfig: ModelConfig
    }
    class Icon {
        + type: string
    }

    App --> Header
    App --> FileExplorer
    App --> MermaidEditor
    App --> DiagramViewer
    App --> SettingsModal

    FileExplorer --> FileNodeView
    FileNodeView --> Icon
    Header --> Icon
    MermaidEditor --> Icon
    DiagramViewer --> Icon
}

package "Utilities & Data" {
    class Types {
        + FileNode
        + FileContents
        + Language
        + Translations
        + ThemeSettings
        + DiagramType
        + DiagrammingLanguage
        + ModelConfig
        + ManualSection
        + Manual
        + AiProvider
    }
    class "useTranslation (Hook)" {
        + language: Language
        + setLanguage(lang)
        + t(key, replacements)
    }
    class "Translation Files (locales/*.json)"

    FileExplorer ..> Types : uses FileNode
    FileNodeView ..> Types : uses FileNode
    DiagramViewer ..> Types : uses DiagrammingLanguage
    SettingsModal ..> Types : uses ThemeSettings, DiagramType, DiagrammingLanguage, ModelConfig

    Header ..> "useTranslation (Hook)"
    FileExplorer ..> "useTranslation (Hook)"
    MermaidEditor ..> "useTranslation (Hook)"
    DiagramViewer ..> "useTranslation (Hook)"
    SettingsModal ..> "useTranslation (Hook)"

    "useTranslation (Hook)" --> "Translation Files (locales/*.json)"
    "useTranslation (Hook)" ..> Types : uses Language, Translations
}

package "External Integrations" {
    class "Mermaid.js Library" as MermaidJS
    class "PlantUML_Encoder.js Library" as PlantUMLEncoderJS
    class "html2canvas.js Library" as HTML2CanvasJS
    class "JSZip.js Library" as JSZipJS
    class "AI Model (e.g., Gemini, LM Studio)" as AIModel

    DiagramViewer --> MermaidJS : renders
    DiagramViewer --> PlantUMLEncoderJS : encodes & renders
    DiagramViewer --> HTML2CanvasJS : exports PNG

    App ..> JSZipJS : (implied) handles ZIP
    App ..> AIModel : sends requests
    SettingsModal ..> AIModel : configures
}

@enduml
```
<img width="3339" height="1318" alt="diagram" src="https://github.com/user-attachments/assets/e6726502-bfda-4c35-9281-b8f33a638567" />


_Abbildung 1: Übersicht der Systemarchitektur von Mermaid Architect AI._

Dieses Diagramm zeigt die modulare Struktur der Anwendung, von der Electron-Hülle über den React-Kern bis hin zu den UI-Komponenten, Utility-Modulen und externen Integrationen. Es visualisiert klar die Verantwortlichkeiten der Hauptprozesse und die Datenflüsse, die "Mermaid Architect AI" zu einem leistungsstarken Werkzeug machen.

## 3. Jenseits von Diagrammen: Die vielseitigen Fähigkeiten der KI

"Mermaid Architect AI" ist weit mehr als nur ein Diagramm-Tool. Seine wahren Stärken liegen in der Fähigkeit, umfassende Dokumentationsartefakte zu generieren, die den gesamten Softwareentwicklungsprozess unterstützen:

*   **Technische Dokumentation:** Basierend auf der Codeanalyse oder einer Ideenbeschreibung kann die KI detaillierte technische HTML-Dokumentationen erstellen, die für Entwicklerteams unerlässlich sind.
*   **Whitepaper:** Für Stakeholder oder Investoren generiert die Anwendung professionelle HTML-Whitepaper, die die Vision, Architektur und Vorteile des Projekts auf hohem Niveau darlegen.
*   **UI-Mockups:** Aus einer Idee heraus kann die KI ein visuelles HTML-Mockup der Benutzeroberfläche entwerfen, was eine schnelle Validierung von Designkonzepten ermöglicht.
*   **Benutzerhandbücher:** Für Endbenutzer werden benutzerfreundliche Handbücher in HTML oder Markdown generiert, die die Bedienung der Anwendung klar und verständlich erklären.
*   **Der "Superprompt":** Ein besonders innovatives Feature ist die Generierung eines "Superprompts". Dies ist ein hochdetaillierter Markdown-Prompt, der alle Informationen – von User Stories über Architekturpläne (inklusive Diagrammcode) bis hin zum empfohlenen Technologie-Stack und einer vollständigen Dateistruktur – für eine fortgeschrittene Programmier-KI enthält. Ziel ist es, diesen Superprompt an Modelle wie GPT-4 oder Claude 3 weiterzugeben, um den vollständigen Quellcode der Anwendung zu generieren. Dies ist ein entscheidender Schritt in Richtung vollständig KI-gesteuerter Softwareentwicklung.
*   **Quellcode-Gerüst:** Aufbauend auf dem "Superprompt" kann die Anwendung sogar das vollständige Quellcode-Gerüst und die Dateistruktur für ein Projekt erstellen, die dann als ZIP-Datei heruntergeladen werden können. Dies beschleunigt den Projektstart immens.

Diese Generierungsfähigkeiten positionieren "Mermaid Architect AI" als ein "All-in-One"-Werkzeug, das den gesamten Lebenszyklus eines Softwareprojekts, von der Idee bis zur Implementierung und Dokumentation, intelligent unterstützt.

## 4. Die Mensch-KI-Schnittstelle: Benutzererfahrung und Anpassung

Die Benutzeroberfläche von "Mermaid Architect AI" ist intuitiv gestaltet und spiegelt die Dualität der Anwendung wider. Eine klare Kopfzeile ermöglicht den schnellen Wechsel zwischen dem "Projekt analysieren"- und dem "Architekt aus Idee"-Modus. Im Analyse-Modus bietet ein Projekt-Explorer eine Baumansicht der hochgeladenen Dateien, während ein Diagramm-Code-Editor und ein Diagramm-Viewer die Bearbeitung und Visualisierung der Architekturen ermöglichen. Im Ideen-Modus dominiert ein großer Texteingabebereich für die Projektbeschreibung, flankiert von Tabs, die die generierten Artefakte übersichtlich präsentieren.

Die Anwendung bietet umfangreiche Anpassungsmöglichkeiten über ein übersichtliches Einstellungsmodal:

*   **Sprache:** Die Benutzeroberfläche kann zwischen Englisch und Deutsch umgeschaltet werden, um eine breite Nutzerbasis anzusprechen.
*   **Diagrammtyp und -sprache:** Benutzer können den bevorzugten Diagrammtyp (Klasse, Fluss, Sequenz, Zustand) und die Diagrammiersprache (Mermaid oder PlantUML) auswählen, was die Flexibilität bei der Darstellung erhöht.
*   **KI-Anbieter:** Die Wahl zwischen Google Gemini und LM Studio als KI-Anbieter ist ein starkes Merkmal. Dies ermöglicht es Unternehmen und Entwicklern, je nach ihren Anforderungen an Datenschutz, Kosten und Leistung, zwischen Cloud-basierten Diensten und lokalen, selbst gehosteten Modellen zu wählen. Die Konfiguration der API-Schlüssel oder lokalen Endpunkte erfolgt direkt in den Einstellungen.
*   **Design-Einstellungen:** Sogar die visuellen Aspekte der Diagramme – von Hintergrund- und Linienfarben bis hin zur Schriftgröße – können angepasst werden, um sie an die individuellen Vorlieben oder Corporate-Design-Richtlinien anzupassen.

Diese Flexibilität in der Konfiguration unterstreicht den Anspruch, ein Werkzeug zu sein, das sich nahtlos in bestehende Workflows integriert und an die Bedürfnisse der Anwender anpasst.

## 5. Herausforderungen und Zukunftsaussichten

Obwohl "Mermaid Architect AI" beeindruckende Fähigkeiten zeigt, sind mit jeder KI-gestützten Anwendung auch Herausforderungen verbunden. Die Qualität der generierten Ergebnisse hängt stark von der Präzision der Eingabedaten ab – sei es der hochgeladene Code oder die textuelle Beschreibung einer Idee. Auch die Leistungsfähigkeit des zugrunde liegenden LLM spielt eine entscheidende Rolle. Wie im Fall von Diagrammen, bei denen die KI nicht immer auf Anhieb perfekte Syntax liefert, kann es vorkommen, dass eine erneute Analyse oder manuelle Nachbesserung erforderlich ist. Dies ist jedoch ein allgemeines Merkmal der aktuellen LLM-Technologie und kein spezifisches Versagen der Anwendung, die mit ihrer Korrekturfunktion bereits proaktiv darauf reagiert.

Die Abhängigkeit von externen Diensten (wie den Google Gemini APIs oder dem PlantUML-Server) bedeutet, dass eine stabile Internetverbindung für die volle Funktionalität unerlässlich ist. Latenz und potenzielle Datenschutzbedenken bei Cloud-Diensten werden durch die Integration von LM Studio gemildert, die eine lokale Ausführung der KI-Modelle ermöglicht.

Für die Zukunft sind zahlreiche Erweiterungen denkbar. Eine tiefere Integration mit Versionskontrollsystemen (VCS) wie Git könnte eine kontinuierliche Architekturanalyse und -dokumentation bei jedem Commit ermöglichen. Die Unterstützung weiterer spezialisierter Diagrammtypen oder die Implementierung fortgeschrittener statischer Code-Analyse-Tools zur Erkennung von Design-Patterns und Metriken könnten den Nutzen der Anwendung weiter steigern. Auch interaktive Dokumentationsfunktionen, bei denen Diagrammelemente direkt zu relevanten Codeabschnitten verlinken, wären ein logischer nächster Schritt.

## Fazit

"Mermaid Architect AI" ist ein bemerkenswertes Beispiel dafür, wie Künstliche Intelligenz die Softwareentwicklung transformieren kann. Es überbrückt die oft mühsame Kluft zwischen Code und Dokumentation, indem es den Prozess automatisiert, beschleunigt und dynamisiert. Für Softwareentwicklungsteams und Architekten bietet es ein unverzichtbares Werkzeug, um komplexe Systeme besser zu verstehen, effektiver zu kommunizieren und neue Projekte mit beispielloser Geschwindigkeit von der Idee zur Implementierung zu bringen. Die Zukunft der Softwarearchitektur wird zunehmend von intelligenten Assistenten wie "Mermaid Architect AI" geprägt sein, die uns helfen, die digitale Welt effizienter und verständlicher zu gestalten.

---

Quellen:
*   Projektinterne Dokumentation (`README.md`)
*   Projektmetadaten (`metadata.json`)
*   Benutzerhandbuch für Mermaid Architect AI (generiert aus Projektdateien)
*   [https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)
*   [https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js](https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js)
*   [https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js](https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js)
*   [https://cdn.jsdelivr.net/npm/plantuml-encoder@1.4.0/dist/plantuml-encoder.min.js](https://cdn.jsdelivr.net/npm/plantuml-encoder@1.4.0/dist/plantuml-encoder.min.js)
*   [https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js](https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js)
*   [https://esm.sh/react@^19.1.0](https://esm.sh/react@^19.1.0)
*   [https://esm.sh/react-dom@^19.1.0/](https://esm.sh/react-dom@^19.1.0/)
*   [https://esm.sh/@google/genai@^1.8.0](https://esm.sh/@google/genai@^1.8.0)
*   [http://localhost:1234/v1](http://localhost:1234/v1)
*   [https://www.plantuml.com/plantuml/svg/](https://www.plantuml.com/plantuml/svg/)


---

*Dieser Artikel wurde von Ralf Krümmel verfasst und mit Hilfe von künstlicher Intelligenz erstellt.*
