# Haley House Holdings

Official web application for Haley House Holdings (`haleyhouseholdings.com`), a family-run investment collective focused on shared-pool opportunities, venture growth, and long-term joint investments.

## Brand & design direction

- Professional, warm, and trustworthy tone
- Clean editorial layout with a modern luxury feel
- Family-first investment messaging without becoming clinical
- Light neutral palette with warm accent tones for callouts and CTAs

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- NextAuth.js with Google OAuth
- Vercel-ready deployment

## Local setup

### Prerequisites

- Node.js 18 or 20
- npm, pnpm, or yarn
- A Google Cloud project with OAuth credentials

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Copy the sample environment file and update it with your own values:

```bash
cp .env.example .env.local
```

Then fill in:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secure_random_secret
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret
AUTHORIZED_EMAILS=approved1@example.com,approved2@example.com
```

Generate a random secret:

```bash
openssl rand -base64 32
```

`AUTHORIZED_EMAILS` is a comma-separated allowlist of approved Google account
emails. Sign-in requires a verified Google email that matches this list;
matching is case-insensitive. An empty or unset list denies access. Add or
remove addresses in this variable to provision or revoke members. In Vercel,
update it under the `haleyhouse` project's Production environment variables and
redeploy for the change to take effect. Google Auth Platform's test-user list
may also restrict sign-in while the OAuth app remains in Testing mode.

### 3) Run the app

```bash
npm run dev
```

Open http://localhost:3000 to view the site.

## Project structure

- `app/` — app router pages and route handlers
- `app/page.tsx` — home landing page
- `app/about/page.tsx` — about page
- `app/portfolio/page.tsx` — portfolio strategy page
- `app/dashboard/page.tsx` — protected member dashboard
- `app/contact/page.tsx` — contact form page
- `auth.ts` — NextAuth configuration
- `.env.example` — environment variable template

## Deployment notes

- This project is ready to deploy on Vercel
- Add the same environment variables in the Vercel dashboard before deployment
- Set `AUTHORIZED_EMAILS` to the exact list of approved member email addresses
- Set the Google OAuth redirect URI to your production domain under the Auth settings

## Notes

The existing starter template was replaced with the Haley House branded landing experience and the core route structure needed for the project launch.
