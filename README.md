# Patient Management System (PMS)

A medical clinic / patient management web application built with Next.js and TypeScript. It provides authentication, doctor & patient management, document upload/download, and a simple dashboard.

Live demo: https://REPLACE_WITH_YOUR_LIVE_URL

## Key Features

- Authentication (OTP-based flows)
- Doctor and patient CRUD operations
- Document upload, download and secure access
- Dashboard with recent patients/doctors and stats

## Tech Stack

- Frontend & Server: Next.js (App Router) + React + TypeScript
- Styling: CSS (PostCSS)
- Database: MongoDB (Mongoose)
- File storage: Cloud R2-compatible storage (R2)
- SMS/OTP: Msg91 integration
- Deployment: Vercel (recommended)

## Quick Start

1. Install dependencies

```bash
npm install
```

2. Create an `.env` file from your environment variables (examples below) and set secrets:

```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=some_random_secret
R2_ACCOUNT_ID=...
R2_ACCESS_KEY_ID=...
R2_SECRET_ACCESS_KEY=...
R2_BUCKET=...
MSG91_API_KEY=...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

3. Run development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
npm start
```

## Project Structure (high level)

- `app/` - Next.js App Router pages and API routes
- `components/` - Reusable UI components
- `features/` - Feature folders (auth, doctors, patients, documents)
- `lib/` - Helper libraries (mongodb, r2, auth, session)
- `models/` - Mongoose models
- `utils/` - Utility helpers

## Notes

- Replace the `Live demo` URL above with your actual deployment URL.
- If you deploy to Vercel, set the same environment variables in the Vercel dashboard.

If you want, I can add a Redis session store, CI workflow, or generate a `deploy` script for Vercel — tell me which you'd like next.
