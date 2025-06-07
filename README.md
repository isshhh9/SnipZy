#SnipZy
A modern full-stack video-sharing platform built with Next.js and ImageKit, allowing users to upload and browse video content seamlessly. Designed with a focus on performance, responsive UI, and cloud-based media delivery.

🔧 Anyone can upload a video. All videos are publicly viewable across the platform.

## Features
🔐 User Authentication with NextAuth.js (using JWT)

📹 Video Upload & Management powered by ImageKit CDN

🧑‍💻 Role-free Access – Open uploads and viewing for all users

🎨 Modern UI built with Tailwind CSS & DaisyUI

📱 Fully Responsive design across devices

🔒 Secure API Routes with protected endpoints

🗄️ MongoDB Integration via Mongoose

✅ Form Validation using React Hook Form

## TechStack
| Category         | Technologies                     |
| ---------------- | -------------------------------- |
| **Frontend**     | Next.js 15, React 19, TypeScript |
| **Styling**      | Tailwind CSS, DaisyUI            |
| **Auth**         | NextAuth.js, JWT                 |
| **Database**     | MongoDB (via Mongoose)           |
| **Media Upload** | ImageKit                         |
| **Forms**        | React Hook Form                  |

## Project Structure
```
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── components/      # Reusable components
│   ├── login/          # Login page
│   ├── register/       # Registration page
│   └── upload/         # Video upload page
├── lib/                # Utility functions
├── models/             # MongoDB models
├── public/            # Static assets
└── types.d.ts         # TypeScript declarations
```

## About the Project
This project was developed as part of my final-year engineering coursework to demonstrate full-stack proficiency, cloud integration, and modern web development practices.
