# 🏥 Health Chronicle

A full-stack patient health monitoring web app that lets family members and caregivers log, track, and visualize health readings for patients who need regular monitoring — helping ensure doctors have complete, accurate health history instead of relying on memory or scattered notes.

## 🎯 Why This Project

Incorrect or incomplete health data leads to poor treatment decisions. Health Chronicle solves this by giving families a simple way to log vitals consistently over time, visualize trends, and get instant alerts when a reading falls outside a safe range — all exportable as a clean PDF report for doctor visits.

## ✨ Features

- 🔐 **Secure Authentication** — JWT-based login/register with bcrypt password hashing
- 👨‍👩‍👧 **Patient Profiles** — Each user's patient data is private and isolated
- 📊 **Health Record Logging** — Blood pressure, blood sugar, heart rate, oxygen level, temperature, weight, and cholesterol
- 📈 **Trend Visualization** — 7 interactive Chart.js graphs tracking every metric over time
- 🚨 **Abnormal Reading Alerts** — Automatic flagging of out-of-range vitals with medically-referenced thresholds
- 📄 **PDF Export** — One-click professional health report generation using jsPDF
- 📁 **Medical Document Upload** — Attach and store scanned reports, prescriptions, and X-rays with dates and descriptions
- 🎨 **Modern Dashboard UI** — Dark, futuristic interface with live ECG-style animation

## 🛠️ Tech Stack

**Frontend:** HTML5, CSS3, Vanilla JavaScript, Chart.js, jsPDF
**Backend:** Node.js, Express.js
**Database:** MongoDB Atlas (Mongoose ODM)
**Auth:** JSON Web Tokens (JWT), bcryptjs
**File Uploads:** Multer

## 📂 Project Structure
 HealthChronicle/
├── Backend/
│   ├── server.js
│   ├── database.js
│   ├── models/
│   ├── routes/
│   └── uploads/
└── Frontend/
├── landing.html
├── login.html
├── index.html
└── patient1.html
## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account (free tier works)

### Installation

1. Clone the repository
```bash
git clone https://github.com/gysana/Health-chronicle.git
cd Health-chronicle/Backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the Backend folder
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000
4. Start the backend server
```bash
node server.js
```

5. Open `Frontend/landing.html` with Live Server (or any static server)

## 🔮 Future Improvements

- Doctor/caregiver role-based access
- Email/SMS alerts for critical readings
- Multi-patient support per family account
- Data export in CSV format

## 👩‍💻 Author

**Gysana** — 3rd Year CSE Student

## 📄 License

This project is for educational purposes.












































