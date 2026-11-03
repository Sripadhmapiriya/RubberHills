# Rubber Hills Kindergarten — React Application

A clean, responsive, and component-based React conversion of the official **Rubber Hills Kindergarten** website built with **Vite** and **React**.

---

## 📁 Project Structure

```text
rubber-hills-react/
├── public/
│   ├── assets/
│   │   ├── logo.jpg               # Official school crest logo (Header, Footer & Email)
│   │   ├── hero-bg.jpg            # Desktop hero background
│   │   ├── hero-bg-mobile.jpg     # Mobile responsive hero background
│   │   ├── hero-building.jpg      # Hero school building feature photo
│   │   ├── campus-walkway.jpg     # Campus walkway photo
│   │   ├── campus-court.jpg       # Play court photo
│   │   ├── campus-entrance.jpg    # Main entrance photo
│   │   └── campus-ramp.jpg        # Campus ramp photo
│   ├── favicon.ico                # Official school logo favicon
│   └── favicon.png                # PNG favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Navigation and official logo
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
│   │   ├── VisitUs.jsx            # Enquiry form with validation (Parent, Contact, Child)
│   │   ├── Contact.jsx            # Address, email cards & social links
│   │   ├── SocialLinks.jsx        # Official Instagram and Facebook icons
│   │   ├── TreesDivider.jsx       # Decorative rubber trees SVG pattern
│   │   └── Footer.jsx             # School logo, social links & operating hours
│   ├── config/
│   │   └── social.js              # Social media URLs (Instagram & Facebook)
│   ├── styles/
│   │   ├── variables.css          # Color palette, light/dark mode CSS variables
│   │   ├── animations.css         # Subtle transitions, hover & scroll reveals
│   │   └── main.css               # Core styling, typography, and responsive layout
│   ├── App.jsx                    # Root application component with scroll observer
│   └── main.jsx                   # React DOM entry point
├── api/
│   └── send-email.js              # Nodemailer serverless email handler with HTML template
├── .env.example                   # Environment variable template
├── index.html                     # HTML shell with Google Fonts & official favicons
├── package.json                   # Dependencies and scripts
└── vite.config.js                 # Vite configuration with local API server middleware
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### 1. Configure Environment Variables
Create a `.env` file in `rubber-hills-react/` (or copy `.env.example`):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=rubberhillskindergarten@gmail.com
SMTP_PASS=your-16-digit-app-password
CONTACT_RECEIVER_EMAIL=rubberhillskindergarten@gmail.com
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`. When testing the enquiry form locally, real emails will be sent directly via your configured Gmail SMTP!

### 4. Build for Production
```bash
npm run build
npm run preview
```

---

## 📱 Social Media Links
Configured in `src/config/social.js`:
- **Instagram**: [https://www.instagram.com/rubberhillsgroup/](https://www.instagram.com/rubberhillsgroup/)
- **Facebook**: Ready to connect your official Facebook URL.

---

## 📩 Enquiry Form & Email Template
- **Form Fields**:
  1. `Parent / Visitor Name` (Required)
  2. `Contact Number` (Required, validated for 10+ digits)
  3. `Child’s Name` (Required)
- **Email Delivery**: Uses `nodemailer` via Gmail SMTP with complete server-side validation.
- **Branded Email Template**: Features the official circular Rubber Hills logo (CID embedded), clear `New Admission Enquiry` heading, formatted submission date & time (IST), clean table layout, and a direct `Call Parent Now` action button.
