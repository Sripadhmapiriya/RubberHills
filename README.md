# Rubber Hills Kindergarten — React Application

A clean, responsive, and component-based React conversion of the official **Rubber Hills Kindergarten** website built with **Vite** and **React**.

---

## 📁 Project Structure

```text
rubber-hills-react/
├── public/
│   ├── assets/
│   │   ├── logo.jpg               # School crest logo (used in header & footer)
│   │   ├── hero-bg.jpg            # Desktop hero background
│   │   ├── hero-bg-mobile.jpg     # Mobile responsive hero background
│   │   ├── hero-building.jpg      # Hero school building feature photo
│   │   ├── campus-walkway.jpg     # Campus walkway photo
│   │   ├── campus-court.jpg       # Play court photo
│   │   ├── campus-entrance.jpg    # Main entrance photo
│   │   └── campus-ramp.jpg        # Campus ramp photo
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Navigation and logo
│   │   ├── Hero.jsx               # Hero title, description, and school photo
│   │   ├── HillsDivider.jsx       # SVG hills transition divider
│   │   ├── About.jsx              # About us narrative and founder profiles
│   │   ├── Campus.jsx             # Photo gallery with captions
│   │   ├── Staff.jsx              # Teaching & leadership team
│   │   ├── Students.jsx           # Age groups (Creche, Nursery, LKG, UKG)
│   │   ├── Learning.jsx           # 9 learning pillars (Linguistic, Numeracy, etc.)
│   │   ├── Creche.jsx             # Creche details and key facts
│   │   ├── Classes.jsx            # Class age groups
│   │   ├── DayAtSchool.jsx        # Monday–Friday timetable and "No Book Day" note
│   │   ├── QuickFacts.jsx         # Teacher ratio, age groups, timings, experience
│   │   ├── VisitUs.jsx            # Interactive "Request a call" form with validation
│   │   ├── Contact.jsx            # Address and email contact cards
│   │   ├── TreesDivider.jsx       # Decorative rubber trees SVG pattern
│   │   └── Footer.jsx             # School group info and operating hours
│   ├── styles/
│   │   ├── variables.css          # Color palette, light/dark mode variables
│   │   ├── animations.css         # Subtle transitions, gentle hover & scroll reveals
│   │   └── main.css               # Core styling, typography, and responsive layout
│   ├── App.jsx                    # Root application component with scroll observer
│   └── main.jsx                   # React DOM entry point
├── index.html                     # HTML shell with Google Fonts (Fredoka & Nunito)
├── package.json                   # Dependencies and scripts
└── vite.config.js                 # Vite React plugin configuration
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### 1. Install Dependencies
Navigate into the project directory and install the packages:

```bash
cd rubber-hills-react
npm install
```

### 2. Run the Development Server
Start the local Vite development server:

```bash
npm run dev
```

Open your browser and visit the local server address (usually `http://localhost:5173`).

### 3. Build for Production
To create an optimized production build:

```bash
npm run build
```

The output will be created in the `dist/` directory.

### 4. Preview the Production Build
To preview the production build locally:

```bash
npm run preview
```

---

## ✨ Features & Verification

- **100% Content Preserved**: All text, headings, numbers, names, descriptions, and contact info from the original website are preserved verbatim without additions or omissions.
- **Original Visual Design**: Colors (`--bg`, `--sky`, `--sun`, `--leaf`, `--berry`, `--bark`), fonts (`Fredoka` & `Nunito`), card borders, hero gradients, and responsive layouts are faithfully reproduced.
- **Subtle, Professional Animations**: Smooth scrolling, gentle card and button hover transitions, and an `IntersectionObserver` scroll-reveal animation that respects `prefers-reduced-motion`.
- **Working Interactivity**: The "Request a call" form features state-driven validation and feedback matching original behavior.

