# Rubber Hills Kindergarten — React Application

A clean, responsive, multi-page React website for **Rubber Hills Kindergarten** built with **Vite**, **React Router**, and **React 18**, converted directly from official high-fidelity visual templates.

---

## 📁 Project Architecture

```text
rubber-hills-react/
├── public/
│   ├── assets/                 # Photography, logos, illustrations & icons
│   ├── favicon.ico             # Official school crest favicon
│   └── favicon.png             # Official school crest PNG favicon
│
├── src/
│   ├── assets/                 # Project assets and illustrations
│   ├── components/
│   │   ├── Navbar/             # Responsive top navbar with active route indicators
│   │   ├── Footer/             # Full footer with social media links & contact details
│   │   └── Shared/             # Reusable badges, headings, cards, and scroll utils
│   ├── pages/
│   │   ├── Home/               # Hero, highlights, curriculum teaser, and CTA
│   │   ├── About/              # School legacy, mission, teaching leadership, and values
│   │   ├── Campus/             # 3D interactive coverflow carousel & campus tour
│   │   ├── Learning/           # 9 developmental learning pillars and curriculum cards
│   │   ├── Classes/            # Class age groups (Creche, Nursery, LKG, UKG)
│   │   ├── TimeTable/          # Weekly schedule, daily timings, and activities
│   │   └── Contact/            # Working admission enquiry form & location details
│   ├── App.jsx                 # React Router routing table (7 core pages)
│   ├── main.jsx                # React root entry point
│   └── index.css               # Global typography, color tokens, and utility styles
│
├── api/
│   └── send-email.js           # Nodemailer SMTP serverless endpoint with branded HTML template
│
├── .env.example                # Environment variable configuration template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite config with API dev server middleware
└── jsconfig.json               # Path resolution configuration
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

Each navigation link opens its own dedicated route:

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Welcome hero, badge highlights, programs overview, philosophy |
| `/about` | **About** | School legacy, mission, teaching leadership, and values |
| `/campus` | **Campus** | 3D interactive coverflow carousel auto-advancing every 3s & facility cards |
| `/learning` | **Learning** | 9 developmental learning pillars and interactive curriculum cards |
| `/classes` | **Classes** | Creche (2.5–3 yrs), Nursery (3–4 yrs), Lower KG (4–5 yrs), Upper KG (5–6 yrs) |
| `/time-table` | **Time Table** | Morning arrival, circle time, snacks, learning blocks, and departure |
| `/contact` | **Contact** | Official address, map, contact info, and working admission enquiry form |

---

## ✉️ Admission Enquiry Email Integration
- **Server-Side Validation**: Sanitizes and validates Parent Name, Contact Number (10+ digits), and Child's Name.
- **SMTP Transport**: Sends real emails via Gmail SMTP using Nodemailer.
- **Branded Email Template**: Features the official circular school logo, structured table formatting, submission timestamp (IST), and a one-click phone action button.

---

## 🌐 Social Media
- **Instagram**: [https://www.instagram.com/rubberhillsgroup/](https://www.instagram.com/rubberhillsgroup/)
- **Facebook**: Ready to connect official profile.
