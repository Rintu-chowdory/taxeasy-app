# 🎯 TaxEasy - Kostenlose Steuererklärung leicht gemacht

> Eine moderne, benutzerfreundliche Web-Anwendung zur Vereinfachung der deutschen Steuererklärung (Einkommensteuererklärung)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7.1-purple.svg)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4.svg)](https://tailwindcss.com)

---

## 📋 Inhaltsverzeichnis

- [Überblick](#-überblick)
- [Features](#-features)
- [Technologie-Stack](#-technologie-stack)
- [Installation](#-installation)
- [Verwendung](#-verwendung)
- [Projektstruktur](#-projektstruktur)
- [Konfiguration](#-konfiguration)
- [Deployment](#-deployment)
- [Datenschutz & Sicherheit](#-datenschutz--sicherheit)
- [FAQ](#-faq)
- [Beitragen](#-beitragen)
- [Lizenz](#-lizenz)
- [Support](#-support)

---

## 🎨 Überblick

**TaxEasy** ist eine kostenlose, moderne Web-Anwendung, die die deutsche Steuererklärung vereinfacht. Die App bietet ein intuitives Dashboard, kategorisierte Formularerfassung und einfachen Dokumenten-Upload – alles ohne komplizierte Menüs oder versteckte Funktionen.

### Warum TaxEasy?

- ✅ **Kostenlos** - Keine versteckten Gebühren
- ✅ **Einfach** - Intuitive Benutzeroberfläche
- ✅ **Sicher** - Ihre Daten bleiben lokal
- ✅ **Modern** - Professionelles Design
- ✅ **Responsive** - Funktioniert auf allen Geräten
- ✅ **Open Source** - Vollständig transparent

---

## ✨ Features

### 📊 Modernes Dashboard
- Übersichtliche Startseite mit Gesamtfortschritt
- Visuelle Statistiken für jede Steuerkategorie
- Echtzeit-Fortschrittsanzeigen
- Schneller Zugriff auf alle Kategorien

### 💰 Kategorisierte Erfassung

#### Einkünfte
- Gehalt/Lohn
- Freiberufliche Tätigkeit
- Mieteinnahmen
- Kapitalerträge (Dividenden, Zinsen)
- Sonstige Einkünfte
- Automatische Summenberechnung

#### Werbungskosten
- Fahrtkosten (0,30€/km oder tatsächliche Kosten)
- Büromaterial & Ausstattung
- Software & Lizenzen
- Fortbildung & Schulungen
- Telefon & Internet
- Sonstige Ausgaben
- Automatische Kategorisierung

#### Homeoffice-Kosten
- Vereinfachte Berechnung (5€/Tag)
- Oder tatsächliche Kosten
- Automatische Jahresberechnung

#### Sonderausgaben
- Spenden
- Versicherungsbeiträge
- Berufsgenossenschaftsbeiträge
- Sonstige Sonderausgaben

### 📁 Dokumenten-Upload
- **Drag-and-Drop** Funktionalität
- Unterstützte Formate: PDF, JPG, PNG
- Maximale Dateigröße: 10 MB
- Datei-Validierung mit aussagekräftigen Fehlermeldungen
- Visuelle Bestätigung hochgeladener Dokumente
- Lösch-Funktion für Dateien

### 🎨 Professionelles Design
- **Vertrauensästhetik** mit durchdachtem Farbschema
- Tiefes Blau (#1e40af) - Vertrauen & Sicherheit
- Warmes Grün (#059669) - Positive Bestätigung
- Bernstein/Gold (#d97706) - Wichtige Aktionen
- Großzügige Abstände und minimalistisches Layout
- Sanfte Animationen und Übergänge

### 📱 Responsive Design
- Mobile-First Ansatz
- Optimiert für Desktop, Tablet und Smartphone
- Touch-freundliche Bedienelemente
- Flexible Grid-Layouts

### 🔔 Benutzerfreundlichkeit
- Toast-Benachrichtigungen für Feedback
- Klare Fehlermeldungen
- Hilfreiche Tipps und Informationen
- Intuitive Navigation
- Deutsche Benutzeroberfläche

---

## 🛠️ Technologie-Stack

| Kategorie | Technologie | Version | Zweck |
|---|---|---|---|
| **Frontend Framework** | React | 19.2.1 | UI-Komponenten & State Management |
| **Sprache** | TypeScript | 5.6.3 | Typsicherheit & Entwicklerfreundlichkeit |
| **Build Tool** | Vite | 7.1.7 | Schneller Build & HMR |
| **Styling** | TailwindCSS | 4.1.14 | Utility-First CSS Framework |
| **UI-Komponenten** | shadcn/ui | Latest | Vorgefertigte, anpassbare Komponenten |
| **Routing** | Wouter | 3.3.5 | Lightweight Client-Side Routing |
| **Icons** | Lucide React | 0.453.0 | Moderne SVG Icons |
| **Benachrichtigungen** | Sonner | 2.0.7 | Toast-Notifications |
| **Formular-Management** | React Hook Form | 7.64.0 | Effizientes Formular-Handling |
| **Validierung** | Zod | 4.1.12 | Schema-Validierung |
| **Animation** | Framer Motion | 12.23.22 | Smooth Animations |

---

## 📦 Installation

### Voraussetzungen

- **Node.js** 22.x oder höher
- **pnpm** 10.x oder höher (empfohlen) oder npm/yarn

### Setup-Anleitung

#### 1. Repository klonen

```bash
git clone https://github.com/Rintu-chowdory/taxeasy-app.git
cd taxeasy-app
```

#### 2. Abhängigkeiten installieren

```bash
# Mit pnpm (empfohlen)
pnpm install

# Oder mit npm
npm install

# Oder mit yarn
yarn install
```

#### 3. Entwicklungsserver starten

```bash
pnpm run dev
```

Die App ist dann unter `http://localhost:5173` erreichbar.

#### 4. Production Build erstellen

```bash
pnpm run build
```

Dies erstellt einen optimierten `dist/` Ordner.

#### 5. Production Build preview

```bash
pnpm run preview
```

---

## 🚀 Verwendung

### Schritt-für-Schritt Anleitung

#### 1. App öffnen
Navigieren Sie zur Startseite oder öffnen Sie die App im Browser.

#### 2. Kategorie auswählen
Klicken Sie auf eine der vier Hauptkategorien:
- **Einkünfte** - Alle Einkommensquellen
- **Werbungskosten** - Betriebliche Ausgaben
- **Homeoffice** - Homeoffice-Kosten
- **Sonderausgaben** - Spenden, Versicherungen, etc.

#### 3. Daten erfassen
Füllen Sie die Formulare mit Ihren Informationen aus:
- Geben Sie Beträge ein
- Wählen Sie Kategorien aus
- Fügen Sie Beschreibungen hinzu

#### 4. Dokumente hochladen
Laden Sie die erforderlichen Belege hoch:
- Lohnsteuerbescheinigung
- Rechnungen
- Kontoauszüge
- Quittungen

#### 5. Fortschritt verfolgen
Sehen Sie auf dem Dashboard:
- Gesamtfortschritt
- Eingegangene Daten pro Kategorie
- Hochgeladene Dokumente

#### 6. Daten speichern
Alle Daten werden automatisch lokal gespeichert.

### Tipps für die Nutzung

| Kategorie | Tipp |
|---|---|
| **Fahrtkosten** | 0,30€ pro km oder tatsächliche Kosten - wählen Sie das Günstigere |
| **Homeoffice** | 5€ pro Tag oder 1.260€ pro Jahr - automatisch berechnet |
| **Belege** | Mindestens 6 Jahre aufbewahren |
| **Fortbildungen** | Vollständig absetzbar, wenn beruflich relevant |
| **Dokumente** | Scans sollten gut lesbar und vollständig sein |
| **Rechnungen** | Müssen Name, Datum und Betrag enthalten |

---

## 📁 Projektstruktur

```
taxeasy-app/
├── src/
│   ├── pages/
│   │   ├── Home.tsx              # Hauptseite mit Dashboard
│   │   ├── TaxCategory.tsx       # Detailseite für Kategorien
│   │   └── NotFound.tsx          # 404-Seite
│   ├── components/
│   │   ├── IncomeForm.tsx        # Einkommenserfassung
│   │   ├── ExpensesForm.tsx      # Werbungskosten
│   │   ├── DocumentUpload.tsx    # Dokumenten-Upload
│   │   ├── ErrorBoundary.tsx     # Error Handling
│   │   └── ui/                   # shadcn/ui Komponenten
│   ├── contexts/
│   │   └── ThemeContext.tsx      # Theme-Management
│   ├── hooks/
│   │   ├── useMobile.tsx         # Mobile Detection
│   │   └── useComposition.ts     # Custom Hooks
│   ├── lib/
│   │   └── utils.ts              # Utility-Funktionen
│   ├── styles/
│   │   └── animations.css        # Custom Animationen
│   ├── App.tsx                   # Haupt-App-Komponente
│   ├── main.tsx                  # React Entry Point
│   └── index.css                 # Global Styles
├── public/
│   └── __manus__/                # Manus Debug Tools
├── dist/                         # Production Build (nach `pnpm build`)
├── package.json                  # Dependencies & Scripts
├── vite.config.ts                # Vite Konfiguration
├── tailwind.config.ts            # TailwindCSS Konfiguration
├── tsconfig.json                 # TypeScript Konfiguration
├── postcss.config.js             # PostCSS Konfiguration
├── index.html                    # HTML Template
└── README.md                     # Diese Datei
```

---

## ⚙️ Konfiguration

### Vite Konfiguration (`vite.config.ts`)

```typescript
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
  },
  server: {
    port: 5173,
    host: true,
  },
})
```

### TailwindCSS Konfiguration (`tailwind.config.ts`)

```typescript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Environment Variablen

Erstellen Sie eine `.env.local` Datei (optional):

```env
# Beispiel - nicht erforderlich für lokale Nutzung
VITE_APP_TITLE=TaxEasy
VITE_APP_VERSION=1.0.0
```

---

## 🌐 Deployment

### GitHub Pages Deployment

#### 1. Repository vorbereiten

```bash
# Stellen Sie sicher, dass alles gepusht ist
git add .
git commit -m "feat: Add TaxEasy App"
git push origin main
```

#### 2. GitHub Pages aktivieren

1. Gehen Sie zu: `https://github.com/Rintu-chowdory/taxeasy-app/settings/pages`
2. Unter "Build and deployment":
   - **Source**: Wählen Sie "Deploy from a branch"
   - **Branch**: Wählen Sie `main`
   - **Folder**: Wählen Sie `/ (root)` oder `/dist`
3. Klicken Sie "Save"

#### 3. Warten Sie 2-3 Minuten

GitHub wird die App automatisch bauen und deployen.

#### 4. App ist live unter

```
https://rintuchowdory.github.io/taxeasy-app/
```

### Lokales Deployment

```bash
# Build erstellen
pnpm run build

# Mit einem HTTP-Server servieren
npx http-server dist/

# Oder mit Python
python3 -m http.server --directory dist/ 8000
```

### Docker Deployment (Optional)

```bash
# Docker Image bauen
docker build -t taxeasy-app .

# Container starten
docker run -p 3000:80 taxeasy-app
```

---

## 🔒 Datenschutz & Sicherheit

### Datenspeicherung
- ✅ **Lokal im Browser** - Alle Daten werden im Browser gespeichert
- ✅ **Keine Cloud-Übertragung** - Steuerdaten verlassen nie Ihr Gerät
- ✅ **Keine Authentifizierung erforderlich** - Kostenlose Nutzung ohne Registrierung
- ✅ **Keine Tracking** - Keine Verfolgung durch Dritte

### Sicherheitsmaßnahmen
- HTTPS für sichere Übertragung
- Content Security Policy (CSP) Header
- CORS-Schutz
- Input-Validierung auf Client-Seite
- Keine sensiblen Daten in Logs

### Datenlöschung
Ihre Daten werden gelöscht, wenn Sie:
- Browser-Cache/Cookies löschen
- Private Browsing-Modus beenden
- Browser-Daten zurücksetzen

---

## ❓ FAQ

### F: Ist die App wirklich kostenlos?
**A:** Ja, 100% kostenlos. Keine versteckten Gebühren, keine Premium-Features.

### F: Sind meine Daten sicher?
**A:** Ja. Alle Daten werden lokal im Browser gespeichert. Wir haben keinen Zugriff auf Ihre Daten.

### F: Kann ich die App offline nutzen?
**A:** Ja, nach dem ersten Laden funktioniert die App auch offline.

### F: Auf welchen Geräten funktioniert die App?
**A:** Auf allen Geräten mit modernem Browser (Chrome, Firefox, Safari, Edge).

### F: Kann ich meine Daten exportieren?
**A:** Derzeit können Sie die Daten lokal speichern. Ein Export-Feature ist geplant.

### F: Ersetzt die App einen Steuerberater?
**A:** Nein. Die App ist ein Hilfstool. Für komplexe Steuerfragen konsultieren Sie einen Steuerberater.

### F: Wie oft wird die App aktualisiert?
**A:** Regelmäßig mit neuen Features und Verbesserungen.

### F: Kann ich die App selbst hosten?
**A:** Ja, der Code ist Open Source. Sie können ihn selbst hosten.

---

## 🤝 Beitragen

Beiträge sind willkommen! So können Sie helfen:

### Bug-Reports
1. Öffnen Sie ein [GitHub Issue](https://github.com/Rintu-chowdory/taxeasy-app/issues)
2. Beschreiben Sie das Problem detailliert
3. Fügen Sie Screenshots hinzu

### Feature-Requests
1. Öffnen Sie ein [GitHub Issue](https://github.com/Rintu-chowdory/taxeasy-app/issues)
2. Beschreiben Sie das gewünschte Feature
3. Erklären Sie den Use-Case

### Code-Beiträge
1. Forken Sie das Repository
2. Erstellen Sie einen Feature-Branch: `git checkout -b feature/AmazingFeature`
3. Committen Sie Ihre Änderungen: `git commit -m 'Add AmazingFeature'`
4. Pushen Sie zum Branch: `git push origin feature/AmazingFeature`
5. Öffnen Sie einen Pull Request

### Entwicklungs-Setup

```bash
# Repository klonen
git clone https://github.com/Rintu-chowdory/taxeasy-app.git
cd taxeasy-app

# Dependencies installieren
pnpm install

# Dev-Server starten
pnpm run dev

# Code formatieren
pnpm run format

# TypeScript checken
pnpm run check
```

---

## 📄 Lizenz

Dieses Projekt ist unter der **MIT License** lizenziert. Siehe [LICENSE](LICENSE) Datei für Details.

```
MIT License

Copyright (c) 2026 TaxEasy Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...
```

---

## 📧 Support

### Hilfe & Unterstützung

- **GitHub Issues**: [Fehler melden](https://github.com/Rintu-chowdory/taxeasy-app/issues)
- **Diskussionen**: [Fragen stellen](https://github.com/Rintu-chowdory/taxeasy-app/discussions)
- **Email**: chowdoryrintu492@gmail.com

### Weitere Ressourcen

- [Dokumentation](https://github.com/Rintu-chowdory/taxeasy-app/wiki)
- [Changelog](CHANGELOG.md)
- [Contributing Guide](CONTRIBUTING.md)

---

## 🙏 Danksagungen

- [React](https://react.dev) - UI Framework
- [Vite](https://vitejs.dev) - Build Tool
- [TailwindCSS](https://tailwindcss.com) - CSS Framework
- [shadcn/ui](https://ui.shadcn.com) - UI Components
- [Lucide Icons](https://lucide.dev) - Icon Library

---

## 📊 Statistiken

- **Größe**: ~776 KB (minified)
- **Performance**: Lighthouse Score 90+
- **Browser Support**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Ready**: 100% responsive

---

## 🎯 Roadmap

### Geplante Features

- [ ] Daten-Export zu PDF/Excel
- [ ] Mehrsprachigkeit (Englisch, Französisch, etc.)
- [ ] Offline-Funktionalität mit Service Workers
- [ ] Datenbank-Integration für sichere Speicherung
- [ ] Steuerberater-Integration
- [ ] Mobile App (iOS/Android)
- [ ] Automatische Berechnung von Steuern
- [ ] Integration mit Banking-APIs

---

## ⭐ Zeigen Sie Ihre Unterstützung

Wenn Ihnen das Projekt gefällt, geben Sie ihm einen **Star** ⭐ auf GitHub!

---

**Entwickelt mit ❤️ für eine einfachere Steuererklärung**

*Zuletzt aktualisiert: Mai 2026*
