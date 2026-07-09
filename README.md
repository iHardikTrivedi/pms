# 🏥 Patient Management System (PMS)

A modern and responsive **Patient Management System** built with
**Next.js, React, and TypeScript**.

The application provides a simple and secure platform for Doctors to
manage Patients, Medical Records, Documents, and Doctor access from one
centralized system.

🌐 **Live Demo:**\
https://pms-git-test-ihardiktrivedi.vercel.app

---

## ✨ Features

### 🔐 Authentication

- OTP-based Doctor login
- Registered Mobile Number verification flow
- Secure OTP verification screen
- Role-based application navigation
- Master Doctor and Doctor roles
- Protected application flow

### 📊 Dashboard

- Total Doctors statistics
- Active Doctors statistics
- Disabled Doctors statistics
- Total Patients statistics
- Recent Doctors overview
- Responsive dashboard layout

### 👨‍⚕️ Doctor Management

- View Doctors
- Add new Doctor
- View Doctor profile
- Edit Doctor information
- Enable or disable Doctor access
- Doctor Patient count
- Master Doctor and Doctor role support

### 🧑‍🤝‍🧑 Patient Management

- View Patient list
- Add new Patient
- View Patient details
- Edit Patient information
- Patient Medical Notes
- Patient contact information
- Responsive Patient table

### 📄 Document Management

- View Patient Medical Documents
- Upload Patient Documents
- Download Documents
- Patient-specific Document Management
- Document information and upload history

### 📱 Responsive Design

- Desktop Dashboard layout
- Collapsible Sidebar
- Mobile navigation
- Responsive tables
- Mobile-friendly Authentication screens
- Dynamic viewport support

---

## 🧪 Testing Instructions

The application currently uses a **Demo Authentication Flow** for
testing purposes.

### 🔐 Login

Open the application:

https://pms-git-test-ihardiktrivedi.vercel.app

You can enter **any valid 10-digit Mobile Number**.

Example:

```text
9427810306
```

Click **Send OTP**.

### 🔢 OTP Verification

Use the following static Demo OTP:

```text
123456
```

Click **Verify & Login**.

After successful OTP verification, you will be redirected to the
Dashboard.

> The static OTP is available only for Demo and Testing purposes.

---

## 📄 Testing Patient Documents

To test the Patient Document Management flow:

1.  Login using any 10-digit Mobile Number.
2.  Enter Demo OTP `123456`.
3.  Open **Patients** from the Sidebar.
4.  Open the **first Patient** from the Patient list.
5.  Navigate to the Patient Documents section.

The first Patient already has sample Medical Documents uploaded for
testing.

You can use this Patient to test:

- Document listing
- Document information
- Document download
- Document Management UI

---

## 🛠️ Tech Stack

### ⚛️ Frontend

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind
CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

### 🎨 UI & Icons

![Lucide](https://img.shields.io/badge/Lucide-Icons-F56565) ![Responsive
Design](https://img.shields.io/badge/Responsive-Design-2563EB)

### 🏗️ Architecture

![Feature
Based](https://img.shields.io/badge/Architecture-Feature_Based-7C3AED)
![Next App
Router](https://img.shields.io/badge/Next.js-App_Router-black) ![Type
Safe](https://img.shields.io/badge/Type-Safe-3178C6)

### 🚀 Deployment

![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

---

## 🏗️ Project Architecture

The application follows a **Feature-Based Architecture** to improve
scalability, maintainability, and separation of concerns.

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── verify-otp/
│   │
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   ├── doctors/
│   │   ├── patients/
│   │   ├── profile/
│   │   └── layout.tsx
│   │
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── AuthLayout.tsx
│   │   ├── DashboardLayout.tsx
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   │
│   └── ui/
│
├── constants/
│
├── features/
│   ├── auth/
│   ├── dashboard/
│   ├── doctors/
│   ├── documents/
│   └── patients/
│
└── utils/
```

---

## 📦 Feature Structure

Each application feature manages its own Components, Data, and Types.

Example:

```text
features/
└── doctors/
    ├── components/
    │   ├── DoctorDetails.tsx
    │   ├── DoctorForm.tsx
    │   ├── DoctorProfile.tsx
    │   ├── DoctorProfileForm.tsx
    │   ├── DoctorStatusBadge.tsx
    │   └── DoctorTable.tsx
    │
    ├── data/
    │   └── doctors.data.ts
    │
    └── types/
        └── doctor.types.ts
```

This structure helps keep feature-specific code isolated and easier to
maintain.

---

## 🎯 Key Development Practices

- Feature-Based Architecture
- Reusable UI Components
- Reusable Layout Components
- Type-Safe TypeScript Models
- Centralized Route Constants
- Centralized Role Management
- Component Composition
- Responsive Web Design
- Mobile-First UI
- Server and Client Component separation
- Next.js App Router
- Clean and Maintainable Code Structure

---

## ⚠️ Demo Information

This project currently uses Sample Data and Demo Authentication for
application testing.

The following OTP is statically configured:

```text
123456
```

The Demo OTP and Sample Data should be replaced with real API-based
Authentication and Backend services before using the application in a
Production Medical environment.

---

## 👨‍💻 Developer

**Hardik Trivedi**

Senior Mobile & Frontend Engineer

🌐 Website: https://iHardikTrivedi.com\
💼 LinkedIn: https://www.linkedin.com/in/ihardiktrivedi/

---

## 🙏 Thank You

Thank you for taking the time to review the **Patient Management
System**.

I appreciate your time and interest in exploring the project.

If you have any feedback, suggestions, or questions regarding the
implementation or architecture, I would be happy to discuss them.

**Happy Coding! 🚀**

---

⭐ If you found this project useful or interesting, please consider
giving the repository a star.
