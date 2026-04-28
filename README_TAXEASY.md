# TaxEasy - Kostenlose Steuererklärung leicht gemacht

Eine moderne, benutzerfreundliche Web-Anwendung zur Erleichterung der deutschen Steuererklärung. TaxEasy bietet ein intuitives Dashboard, Formularerfassung und Dokumenten-Upload-Funktionalität.

## 🎯 Features

- **Modernes Dashboard**: Übersichtliche Darstellung des Steuererklärungsprozesses mit Fortschrittsanzeigen
- **Kategorisierte Erfassung**: Getrennte Bereiche für:
  - Einkünfte (Gehalt, freiberufliche Tätigkeit, Mieteinnahmen, Kapitalerträge)
  - Werbungskosten (Fahrtkosten, Büromaterial, Software, Fortbildung, Telefon/Internet)
  - Homeoffice-Kosten
  - Sonderausgaben
- **Dokumenten-Upload**: Drag-and-Drop Funktionalität zum Hochladen von Belegen (PDF, JPG, PNG)
- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- **Sichere Speicherung**: Alle Daten werden lokal im Browser gespeichert (keine Cloud-Übertragung)
- **Deutsche Benutzeroberfläche**: Vollständig auf Deutsch
- **Professionelles Design**: Modernes Finanz-Dashboard mit Vertrauensästhetik

## 🛠️ Technologie-Stack

- **Frontend**: React 19 + TypeScript
- **Build-Tool**: Vite
- **Styling**: TailwindCSS 4 + shadcn/ui
- **Routing**: Wouter
- **UI-Komponenten**: shadcn/ui (Button, Card, Input, Select, Tabs, etc.)
- **Icons**: Lucide React
- **Notifications**: Sonner (Toast-Benachrichtigungen)

## 📦 Installation

### Voraussetzungen
- Node.js 22.x oder höher
- pnpm 10.x oder höher

### Setup

```bash
# Repository klonen
git clone https://github.com/Rintu-chowdory/devops-portfolio-ci-cd.git
cd devops-portfolio-ci-cd

# Zum tax-easy-app Branch wechseln
git checkout tax-easy-app

# Abhängigkeiten installieren
pnpm install

# Entwicklungsserver starten
pnpm run dev

# Build für Produktion
pnpm run build

# Preview des Builds
pnpm run preview
```

Der Entwicklungsserver läuft unter `http://localhost:3000`

## 📁 Projektstruktur

```
src/
├── pages/
│   ├── Home.tsx              # Hauptseite mit Dashboard
│   ├── TaxCategory.tsx       # Detailseite für einzelne Kategorien
│   └── NotFound.tsx          # 404-Seite
├── components/
│   ├── IncomeForm.tsx        # Formular für Einkommenserfassung
│   ├── ExpensesForm.tsx      # Formular für Werbungskosten
│   ├── DocumentUpload.tsx    # Dokumenten-Upload-Komponente
│   ├── ui/                   # shadcn/ui Komponenten
│   └── ErrorBoundary.tsx     # Error Handling
├── contexts/
│   └── ThemeContext.tsx      # Theme-Management
├── lib/
│   └── utils.ts              # Utility-Funktionen
├── styles/
│   └── animations.css        # Custom Animationen
├── App.tsx                   # Haupt-App-Komponente
├── main.tsx                  # Entry Point
└── index.css                 # Global Styles
```

## 🎨 Design-Philosophie

Das Design folgt einem modernen Finanz-Dashboard-Ansatz mit **Vertrauensästhetik**:

- **Primärfarbe**: Tiefes Blau (`#1e40af`) - Vertrauen, Sicherheit, Professionalität
- **Erfolgsfarbe**: Warmes Grün (`#059669`) - Positive Bestätigungen, Validierung
- **Akzentfarbe**: Bernstein/Gold (`#d97706`) - Wichtige Aktionen, Aufmerksamkeit
- **Typografie**: Poppins (Display) + Inter (Body) für professionelle Ausstrahlung
- **Layout**: Asymmetrisches Dashboard mit großzügigen Abständen

## 🚀 Deployment

### GitHub Pages

Die App wird automatisch zu GitHub Pages deployt, wenn Code in den `tax-easy-app` Branch gepusht wird.

```bash
# Änderungen committen und pushen
git add .
git commit -m "Neue Features hinzugefügt"
git push origin tax-easy-app
```

Die GitHub Actions Workflow baut die App automatisch und deployt sie zu GitHub Pages.

### Lokales Deployment

```bash
# Build erstellen
pnpm run build

# Statische Dateien aus dem dist/ Verzeichnis servieren
# Mit einem beliebigen HTTP-Server, z.B.:
npx http-server dist/
```

## 📋 Verwendung

### Steuererklärung erstellen

1. **Dashboard öffnen**: Starten Sie auf der Startseite
2. **Kategorie auswählen**: Klicken Sie auf eine der vier Kategorien
3. **Daten erfassen**: Füllen Sie die Formulare mit Ihren Informationen aus
4. **Dokumente hochladen**: Laden Sie die erforderlichen Belege hoch
5. **Fortschritt verfolgen**: Sehen Sie den Gesamtfortschritt auf dem Dashboard
6. **Exportieren**: Speichern Sie Ihre Daten lokal

### Tipps für die Nutzung

- **Fahrtkosten**: 0,30€ pro km oder tatsächliche Kosten
- **Homeoffice**: 5€ pro Tag oder 1.260€ pro Jahr
- **Belege aufbewahren**: Mindestens 6 Jahre
- **Fortbildungen**: Vollständig absetzbar
- **Alle Dokumente**: Scans sollten gut lesbar und vollständig sein

## 🔒 Datenschutz

TaxEasy speichert alle Daten **lokal im Browser**. Es erfolgt **keine Übertragung** zu externen Servern. Ihre Steuerdaten bleiben privat und sicher auf Ihrem Gerät.

## 🤝 Beitragen

Beiträge sind willkommen! Bitte erstellen Sie einen Pull Request mit Ihren Verbesserungen.

## 📄 Lizenz

MIT License - Siehe LICENSE Datei für Details

## ⚠️ Disclaimer

TaxEasy ist ein Hilfstool zur Vereinfachung der Steuererklärung. Es ersetzt keine professionelle Steuerberatung. Für komplexe Steuerfragen konsultieren Sie bitte einen Steuerberater.

## 📧 Support

Haben Sie Fragen oder Probleme? Erstellen Sie ein Issue im GitHub Repository.

---

**Entwickelt mit ❤️ für eine einfachere Steuererklärung**
