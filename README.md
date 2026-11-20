# 🏫 Rubber Hills Kindergarten – Official Website

A production-ready website for **Rubber Hills Kindergarten**, Manjaloomodu. Built with React 18, React Router v7, Lucide Icons, and Vite, featuring dedicated routes, authentic campus photography, and secure admission enquiry processing.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` for local testing:
```bash
cp .env.example .env
```
Populate `.env` with your secure credentials:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=rubberhillskindergarten@gmail.com
SMTP_PASS=your-newly-generated-gmail-app-password
CONTACT_RECEIVER_EMAIL=rubberhillskindergarten@gmail.com
```

### 3. Run Development Server
```bash
npm run dev
```

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
| `/classes` | **Classes** | Creche (2–3 yrs), Nursery (3–4 yrs), Lower KG (4–5 yrs), Upper KG (5–6 yrs) |
| `/time-table` | **Time Table** | Morning arrival, circle time, snacks, learning blocks, and departure |
| `/contact` | **Contact** | Official address, contact info, and secure admission enquiry form |
| `/privacy` | **Privacy Policy** | Child data protection and transparent enquiry privacy handling |

---

## ✉️ Admission Enquiry Email Integration & Security

- **Credential Isolation**: No hardcoded SMTP credentials or secrets in source code. Credentials must be supplied via environment variables (`SMTP_USER`, `SMTP_PASS`).
- **Server-Side Validation**: Sanitizes and validates Parent Name (2–100 chars), Child's Name (2–100 chars), Contact Number (10–15 digits), and whitelist-validated programme selection.
- **Privacy Consent**: Mandatory consent checkbox linked to the official Privacy Policy before form submission.
- **HTML & Header Injection Prevention**: All user inputs are strictly HTML-escaped; subject and header lines are sanitized to strip CRLF control characters.
- **Spam & Abuse Protection**: Features a hidden honeypot field, fast-submission heuristic detection, and a 10KB serverless request size ceiling.
- **Persistent Rate Limiting Support**: Ready for Upstash Redis / Vercel KV via environment variables (`UPSTASH_REDIS_REST_URL` & `UPSTASH_REDIS_REST_TOKEN`).
- **Branded Email Template**: Features the official circular school logo, structured table formatting, submission timestamp (IST), and a one-click phone action button.

---

## 🌐 Social Media & Contacts
- **Instagram**: [https://www.instagram.com/rubberhillsgroup/](https://www.instagram.com/rubberhillsgroup/)
- **Facebook**: [https://www.facebook.com/share/1J9CG4KVtR/](https://www.facebook.com/share/1J9CG4KVtR/)
- **Email**: rubberhillskindergarten@gmail.com
