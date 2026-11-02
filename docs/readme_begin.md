# Haley House Holdings

Official web application for **Haley House Holdings** (`haleyhouseholdings.com`), a family-run investment collective focused on shared-pool opportunities, venture growth, and long-term joint investments.

---

## 🌟 Brand & Design Vision

- **Tone & Voice:** Professional, trustworthy, yet lighthearted and approachable (family-oriented without being overly clinical).
- **Aesthetic:** Modern, clean, spacious, with clear typography, warm accent colors, and sleek micro-interactions.
- **Domain:** [haleyhouseholdings.com](https://haleyhouseholdings.com)

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router, React 19, TypeScript)
- **Styling:** Tailwind CSS + Lucide Icons
- **Authentication:** NextAuth.js (Auth.js) with Google OAuth Provider
- **Deployment & Hosting:** Vercel (connected via GitHub CI/CD)
- **Version Control:** GitHub

---

## 📄 Site Structure & Pages

1. **Home (`/`)** — Main landing page featuring modern hero section, core investment focus, family philosophy, portfolio highlights, and call-to-action. *(Base version included)*
2. **About Us (`/about`)** — Story of the family pool, values, and leadership/family members. *(Placeholder)*
3. **Portfolio & Focus Areas (`/portfolio`)** — Key investment verticals and active holdings. *(Placeholder)*
4. **Member Portal (`/dashboard`)** — Protected route for family co-investors to view shared pool metrics via Google Auth. *(Placeholder)*
5. **Contact (`/contact`)** — Inquiries and deal submission form. *(Placeholder)*

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or 20.x installed
- npm, pnpm, or yarn
- Google Cloud Console project set up for OAuth

### 1. Environment Setup

Create a `.env.local` file in the root directory:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here # Generate via: openssl rand -base64 32

# Google OAuth Provider
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret