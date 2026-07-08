# Patient Management System (PMS)

A medical clinic / patient management web application built with Next.js and TypeScript. It provides authentication, doctor & patient management, document upload/download, and a simple dashboard.

Live demo: https://pms-git-test-ihardiktrivedi.vercel.app

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

## Testing / Demo Instructions

- Demo credentials:
  - Mobile: use any 10-digit number (for example, `9999999999`).
  - OTP: enter `12345` when prompted.

- How to test flows:
  - Open the app login page and enter any 10-digit mobile number, then submit the OTP `12345` to sign in.
  - Visit the Dashboard → Patients table to find patient entries and their IDs.
  - Click a patient (or open the patient details view) to check the Documents section; use the patient ID to verify document upload/download flows.

- Note: The `12345` OTP is only a demo/testing shortcut — ensure the demo backend or local environment accepts this test OTP. If you need, I can add a dev-only bypass that accepts this OTP automatically.
  - Example patient to check documents:
    - In the Patients table click the patient ID PT-00046 (Anjali Desai) to open the patient details and view the Documents section.
