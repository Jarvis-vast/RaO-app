# RaO — Remarkable Adventure Odyssey

> **"Your trip doesn't have to start with a destination."**  
> RaO is a premium AI-powered travel planning platform that starts with how you *want to feel*, not where you want to go.

![RaO Logo](public/images/Logo.jpeg)

---

## ✨ What is RaO?

RaO is a full-stack travel planning platform built for boutique travel agencies. Instead of browsing package catalogues, customers describe their mood, budget, and dates — and RaO's AI research engine generates a personalised itinerary and proposal.

**Customer Journey:**
```
Mood → Intent → Destination → Experience → Itinerary → Proposal → Booking
```

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui + Radix UI |
| Animation | Framer Motion |
| Database | PostgreSQL via Supabase |
| ORM | Prisma |
| AI | Google Gemini API |
| Auth | Supabase Auth (planned) |
| Payments | Razorpay (planned) |

---

## 📁 Project Structure

```
rao-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (public)/           # Public-facing pages
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── plan/           # Planner flow
│   │   │   └── how-it-works/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── destinations/
│   │   ├── experiences/
│   │   ├── terms/
│   │   ├── privacy/
│   │   ├── cancellation/
│   │   └── admin/              # Operations dashboard
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, ThemeProvider
│   │   ├── home/               # Homepage sections
│   │   ├── plan/               # Planner wizard components
│   │   └── ui/                 # Reusable UI primitives
│   └── lib/                    # Utilities
├── public/
│   ├── images/                 # Static images & logo
│   └── videos/                 # Hero background videos
└── prisma/
    └── schema.prisma           # Database schema
```

---

## 🛠️ Local Development

### Prerequisites
- Node.js 20+
- npm or yarn
- A Supabase project (for database features)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/rao-app.git
cd rao-app

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in your values in .env.local

# 4. Push database schema (optional)
npx prisma db push

# 5. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

See [`.env.example`](.env.example) for all required variables.

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string from Supabase |
| `DIRECT_URL` | Direct connection URL (for Prisma migrations) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `GEMINI_API_KEY` | Google Gemini API key for AI features |
| `RAZORPAY_KEY_ID` | Razorpay payment gateway key |

---

## 🎨 Brand System

| Token | Value |
|---|---|
| Deep Mahogany | `#1C0A0B` |
| Copper | `#C88D6A` |
| Rose Gold | `#E2B28B` |
| Champagne | `#E8D5C8` |
| Warm Off-White | `#FAF7F4` |
| Neutral | `#756B66` |

Typography: **Montserrat**

---

## 📄 License

Private & Confidential — RaO Travel Agency  
All rights reserved.
