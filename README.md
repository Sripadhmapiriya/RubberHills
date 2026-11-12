# Rubber Hills Kindergarten — React Application

A clean, responsive, multi-page React website for **Rubber Hills Kindergarten** built with **Vite**, **React Router**, and **React 18**, converted directly from official high-fidelity visual templates.

---

## 📁 Repository Architecture

The project is structured with clean separation between the newly implemented 7-page website and the preserved legacy version:

```text
rubber-hills-react/
├── rubber-hills-website/       # 🌟 NEW 7-Page Multi-Page Application
│   ├── public/                 # Static assets & favicons
│   └── src/
│       ├── assets/             # Photography, logo, illustrations & badges
│       ├── components/
│       │   ├── Navbar/         # Top navigation bar with active route indicators
│       │   ├── Footer/         # Complete footer with social links & legacy archive link
│       │   └── Shared/         # Reusable badges, headings, cards, and dividers
│       ├── pages/
│       │   ├── Home/           # Hero, statistics, programs, and CTA
│       │   ├── About/          # Mission, leadership, values & story
│       │   ├── Campus/         # 3D interactive coverflow carousel & campus tour
│       │   ├── Learning/       # 9 learning pillars & pedagogical approach
│       │   ├── Classes/        # Class age groups (Creche, Nursery, LKG, UKG)
│       │   ├── TimeTable/      # Weekly schedule, timings, and daily activities
│       │   ├── Contact/        # Working admission enquiry form & location details
│       │   └── PreviousWebsite/# Direct link & redirect to preserved legacy design
│       ├── App.jsx             # React Router routing table
│       ├── main.jsx            # React root
│       └── index.css           # Global typography, color tokens, and utility styles
│
├── existing-website/           # 📦 Preserved Legacy Single-Page React Website
│   ├── src/                    # Original single-page components and styles
│   ├── public/                 # Original assets
│   └── vite.config.js          # Independent Vite config for legacy site
│
├── public/
│   ├── previous-website.html   # Standalone preserved HTML archive with return banner
│   ├── assets/                 # Shared images, official logos, and campus photos
│   ├── favicon.ico             # Official school crest favicon
│   └── favicon.png             # Official school crest PNG favicon
│
├── api/
│   └── send-email.js           # Nodemailer SMTP serverless endpoint with branded HTML template
│
├── .env.example                # Environment variable configuration template
├── package.json                # Dependencies, routing, and build scripts
└── vite.config.js              # Vite config with API dev server middleware
```

---

## 🚀 Running the Project

### Prerequisites
Make sure [Node.js](https://nodejs.org/) (v18+) and `npm` are installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` to configure admission email notifications:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=rubberhillskindergarten@gmail.com
SMTP_PASS=your-16-digit-app-password
CONTACT_RECEIVER_EMAIL=rubberhillskindergarten@gmail.com
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
npm run preview
```

---

## 🧭 Pages & Routes

Each navigation link opens its own dedicated route (not a stacked single-page anchor):

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Welcome hero, badge highlights, programs overview, philosophy |
| `/about` | **About** | School legacy, mission, teaching leadership, and values |
| `/campus` | **Campus** | 3D interactive coverflow carousel auto-advancing every 3s & facility cards |
| `/learning` | **Learning** | 9 developmental learning pillars and interactive curriculum cards |
| `/classes` | **Classes** | Creche (2.5–3 yrs), Nursery (3–4 yrs), Lower KG (4–5 yrs), Upper KG (5–6 yrs) |
| `/time-table` | **Time Table** | Morning arrival, circle time, snacks, learning blocks, and departure |
| `/contact` | **Contact** | Official address, map, contact info, and working admission enquiry form |
| `/previous-website.html` | **Archive** | Full preserved legacy single-page design with floating "← Back to New Website" button |

---

## ✉️ Admission Enquiry Email Integration
- **Server-Side Validation**: Sanitizes and validates Parent Name, Contact Number (10+ digits), and Child's Name.
- **SMTP Transport**: Sends real emails via Gmail SMTP using Nodemailer.
- **Branded Email Template**: Features the official circular school logo, structured table formatting, submission timestamp (IST), and a one-click phone action button.

---

## 🌐 Social Media
- **Instagram**: [https://www.instagram.com/rubberhillsgroup/](https://www.instagram.com/rubberhillsgroup/)
- **Facebook**: Ready to connect official profile.
