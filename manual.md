# Benutzerhandbuch: Mermaid Architect AI

_Willkommen beim Benutzerhandbuch für Mermaid Architect AI. Diese Anwendung wurde entwickelt, um Softwareentwicklungsteams und Architekten dabei zu unterstützen, die Struktur und Abhängigkeiten ihrer Projekte schnell zu verstehen und zu dokumentieren. Durch das Hochladen von Projektcode oder die Eingabe einer Software-Idee kann die Anwendung automatisch Architekturdiagramme und verschiedene Dokumentationsarten generieren, unterstützt durch künstliche Intelligenz. Dieses Handbuch erklärt Ihnen, wie Sie die Anwendung effektiv nutzen können._

## Was ist Mermaid Architect AI?

Mermaid Architect AI ist ein Werkzeug, das den Prozess der Software-Architekturanalyse und -Dokumentation automatisiert. Es kann entweder:

1.  **Ein bestehendes Projekt analysieren:** Sie laden den Quellcode Ihres Projekts als ZIP-Datei hoch. Die KI analysiert die Dateien und generiert automatisch ein Architekturdiagramm (z. B. Klassendiagramm, Flussdiagramm) und eine kurze Erklärung der Struktur.
2.  **Architektur aus einer Idee generieren:** Sie beschreiben Ihre Software-Idee in Textform. Die KI entwirft dann eine Architektur und generiert ein Diagramm, technische Dokumentation, ein Whitepaper, einen detaillierten 'Superprompt' für eine Programmier-KI sowie optional ein UI-Mockup und ein Benutzerhandbuch.

Das Ziel ist es, wertvolle Zeit bei der manuellen Dokumentation zu sparen und einen dynamischen Überblick über komplexe Codebasen oder neue Konzepte zu bieten.

## Die Benutzeroberfläche

Die Anwendung verfügt über eine klare und intuitive Benutzeroberfläche:

*   **Header (Kopfzeile):** Enthält den Namen der Anwendung ('Mermaid Architect AI'), einen Schalter zum Wechseln zwischen den Modi 'Projekt analysieren' und 'Architekt aus Idee' sowie Schaltflächen zum 'ZIP hochladen', 'Projekt analysieren' (im Analyse-Modus) und 'Einstellungen'.
*   **Hauptbereich:** Dieser Bereich ändert sich je nach ausgewähltem Modus ('Projekt analysieren' oder 'Architekt aus Idee').
    *   **Modus 'Projekt analysieren':** Geteilt in drei Spalten: 'Projekt-Explorer' (links), 'Diagramm-Code' (Mitte) und 'Diagramm-Anzeige' (rechts).
    *   **Modus 'Architekt aus Idee':** Geteilt in zwei Spalten: Eingabefeld für die Idee (links) und ein Bereich mit Registerkarten für die generierten Ausgaben (rechts).
*   **Einstellungen (Modal):** Ein Fenster, das sich über die Anwendung legt, um Sprache, Diagrammtyp, Diagrammiersprache und Design anzupassen.

## Modus: Projekt analysieren

Dieser Modus dient zur Analyse des Quellcodes eines bestehenden Projekts.

1.  **ZIP hochladen:** Klicken Sie im Header auf die Schaltfläche 'ZIP hochladen'. Wählen Sie die ZIP-Datei Ihres Projekts aus. Die Anwendung lädt die Datei und zeigt die Dateistruktur im 'Projekt-Explorer' an.
2.  **Projekt analysieren:** Sobald ein Projekt geladen ist (im 'Projekt-Explorer' sichtbar), klicken Sie auf die Schaltfläche 'Projekt analysieren' im Header. Die KI analysiert die Dateien und generiert ein Architekturdiagramm und eine Erklärung.
3.  **Diagramm-Code:** Im mittleren Bereich wird der generierte Code für das Diagramm angezeigt (entweder Mermaid oder PlantUML). Sie können diesen Code manuell bearbeiten.
4.  **Diagramm-Anzeige:** Im rechten Bereich wird das gerenderte Diagramm angezeigt. Wenn der Code Fehler enthält, wird eine Fehlermeldung angezeigt. Sie können auf 'Diagramm rendern' klicken, um manuelle Änderungen am Code anzuzeigen, oder auf 'Mit KI beheben', um die KI zu bitten, Syntaxfehler zu korrigieren.
5.  **KI-Architekturanalyse:** Unter dem Diagramm wird eine kurze Erklärung der KI zur Projektstruktur und zum Diagramm angezeigt.
6.  **Exportieren:** Im Header des 'Diagramm-Anzeige'-Bereichs finden Sie Schaltflächen zum Exportieren des Diagramms als PNG oder SVG, zum Herunterladen des Diagramm-Quellcodes sowie zum Generieren und Herunterladen von technischer Dokumentation, einem Whitepaper und einem Benutzerhandbuch (jeweils als HTML- oder Markdown-Datei).

## Modus: Architekt aus Idee

Dieser Modus hilft Ihnen, eine Software-Architektur basierend auf einer textuellen Beschreibung Ihrer Idee zu entwerfen.

1.  **Idee beschreiben:** Geben Sie im linken Bereich eine detaillierte Beschreibung Ihrer Software-Idee in das Textfeld ein.
2.  **Architektur generieren:** Klicken Sie auf die Schaltfläche 'Architektur generieren'. Die KI analysiert Ihre Beschreibung und generiert verschiedene Ausgaben.
3.  **Ausgaben anzeigen:** Der rechte Bereich wechselt zu einer Registerkartenansicht, die die generierten Ausgaben enthält:
    *   **Diagramm:** Das generierte Architekturdiagramm, ähnlich der Ansicht im Analyse-Modus. Sie können den Code bearbeiten und rendern.
    *   **Technische Dokumentation:** Eine HTML-Datei mit einer detaillierten Beschreibung der Architektur und Komponenten.
    *   **Whitepaper:** Eine formale HTML-Datei, die das Projekt aus wissenschaftlicher/technischer Sicht darstellt.
    *   **Superprompt:** Ein detaillierter Markdown-Prompt, der für eine fortgeschrittene Programmier-KI verwendet werden kann, um den tatsächlichen Code zu generieren.
    *   **Mockup:** Generieren Sie ein einfaches HTML-Mockup der Benutzeroberfläche basierend auf dem Superprompt.
    *   **Benutzerhandbuch:** Generieren Sie ein Benutzerhandbuch basierend auf der Idee/Spezifikation.
4.  **Exportieren:** Jede Registerkarte, die generierte Inhalte anzeigt, verfügt über Schaltflächen zum Herunterladen dieser Inhalte in verschiedenen Formaten (HTML, Markdown, etc.).

## Einstellungen

Klicken Sie im Header auf die Schaltfläche 'Einstellungen' (Zahnrad-Symbol), um das Einstellungsfenster zu öffnen. Hier können Sie die Anwendung an Ihre Bedürfnisse anpassen:

*   **Sprache:** Wählen Sie die Sprache der Benutzeroberfläche (Deutsch oder Englisch).
*   **Diagrammtyp:** Wählen Sie den Typ des Architekturdiagramms, das generiert werden soll (Klassendiagramm, Flussdiagramm, Sequenzdiagramm, Zustandsdiagramm).
*   **Diagrammiersprache:** Wählen Sie, ob die Diagramme mit Mermaid oder PlantUML generiert werden sollen.
*   **Design-Einstellungen:** Passen Sie die Farben und die Schriftgröße des Diagramms an. Diese Einstellungen beeinflussen, wie das Diagramm in der 'Diagramm-Anzeige' gerendert wird.

## Fehlerbehebung

Sollte ein Diagramm nicht korrekt gerendert werden, wird im 'Diagramm-Anzeige'-Bereich eine Fehlermeldung angezeigt.

*   **Diagrammfehler:** Wenn ein Syntaxfehler im Diagrammcode vorliegt, wird dies hier gemeldet.
*   **Mit KI beheben:** Im Analyse-Modus können Sie auf diese Schaltfläche klicken, um die KI zu bitten, den Diagrammcode automatisch zu korrigieren. Die Anwendung versucht dies bis zu einer maximalen Anzahl von Versuchen.
*   **Manuelle Bearbeitung:** Sie können den Diagrammcode auch direkt im 'Diagramm-Code'-Bereich bearbeiten und dann auf 'Diagramm rendern' klicken, um Ihre Änderungen anzuzeigen.
*   **Generierungsfehler:** Wenn die KI die Analyse oder Generierung nicht abschließen kann, wird eine Fehlermeldung angezeigt. Versuchen Sie in diesem Fall, den Prozess erneut zu starten oder passen Sie Ihre Eingabe (ZIP-Datei oder Idee-Beschreibung) an.

