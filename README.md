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

## 📸 Screenshots

<img width="1890" height="857" alt="Screenshot 1" src="https://github.com/user-attachments/assets/e0f5b91e-6ba1-4c32-b142-09ce9a2d47f8" />
<img width="1865" height="807" alt="Screenshot 2" src="https://github.com/user-attachments/assets/f572c67c-f030-46d2-949f-dc2f5f942ffe" />
<img width="835" height="773" alt="Screenshot 3" src="https://github.com/user-attachments/assets/69025bce-ce05-4f73-913a-bce2f8f432f2" />
<img width="1097" height="855" alt="Screenshot 4" src="https://github.com/user-attachments/assets/09c58cc3-7b96-4583-bc9f-595dbbf5c86a" />
<img width="1505" height="761" alt="Screenshot 5" src="https://github.com/user-attachments/assets/148c9499-7c4f-448a-968c-2f2d56c38b18" />
<img width="1672" height="702" alt="Screenshot 6" src="https://github.com/user-attachments/assets/54ec218d-00ea-4152-9bc4-549f4defb3d3" />
<img width="1500" height="780" alt="Screenshot 7" src="https://github.com/user-attachments/assets/0a1f1c00-ced9-47e0-aa18-d00ac40cf590" />
<img width="916" height="222" alt="Screenshot 8" src="https://github.com/user-attachments/assets/7d77ba04-d9f8-41b0-92ec-3a0fb53de41d" />

## 🛠️ Tech Stack

**Frontend:** HTML5, CSS3, Vanilla JavaScript, Chart.js, jsPDF
**Backend:** Node.js, Express.js
**Database:** MongoDB Atlas (Mongoose ODM)
**Auth:** JSON Web Tokens (JWT), bcryptjs
**File Uploads:** Multer

## 📂 Project Structure

```
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
```

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
```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

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
