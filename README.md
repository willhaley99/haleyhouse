# Haley House Holdings

Official web application for Haley House Holdings, a family-run investment collective focused on shared-pool opportunities, venture growth, and long-term joint investments.

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

The member sign-in page asks for an email first, checks this allowlist, and
starts Google sign-in only for an approved address. Google sign-in still
verifies the actual account, and the dashboard remains protected if the
allowlist is changed. Because the email check reports whether an address is
approved, share the member sign-in URL only with intended users.

The published privacy page at `/privacy` describes the member sign-in data
flow and is linked from the home and sign-in pages. Keep it accurate as the
site's data practices change.

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
- `app/profile/page.tsx` — signed-in member profile and account navigation
- `app/signin/` — email-first member sign-in
- `app/privacy/page.tsx` — privacy policy for the website and member portal
- `app/contact/page.tsx` — contact form page
- `auth.ts` — NextAuth configuration
- `.env.example` — environment variable template

## Deployment notes

- This project is ready to deploy on Vercel
- Add the same environment variables in the Vercel dashboard before deployment
- Set `AUTHORIZED_EMAILS` to the exact list of approved member email addresses
- Set `NEXTAUTH_URL` to `https://haleyhouseholdings.com` in Vercel's Production
  environment and redeploy after changing it.
- The canonical production URL is `https://haleyhouseholdings.com`. Both it
  and `https://www.haleyhouseholdings.com` are configured in Vercel and serve
  the site.
- In Google Auth Platform, authorize
  `https://haleyhouseholdings.com` as a JavaScript origin and
  `https://haleyhouseholdings.com/api/auth/callback/google` as a redirect URI.
  The legacy Vercel origin and callback are retained for fallback.
- The Google OAuth app is published in production. The application still
  independently checks `AUTHORIZED_EMAILS` before allowing a member to sign in.
- Google Auth Platform branding uses
  `https://haleyhouseholdings.com` and
  `https://haleyhouseholdings.com/privacy`.
- The contact form opens a prefilled email in the visitor's email app; the
  visitor must send it. The site does not receive or store contact inquiries.

## Notes

The existing starter template was replaced with the Haley House branded landing experience and the core route structure needed for the project launch.
