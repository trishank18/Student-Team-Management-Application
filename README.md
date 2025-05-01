# Student-Team-Management-Application

A full-stack web application to manage student team members, built with:

- **Frontend** → React.js  
- **Backend** → Node.js, Express.js  
- **Database** → MongoDB  
- **File Uploads** → Multer

---

## 🚀 Features

✅ Add new student team members with profile photo  
✅ View all members in a responsive, animated card layout  
✅ View individual member details  
✅ Store member data securely in MongoDB  
✅ Upload and display member photos  
✅ Animated and responsive design with modern UI

---

## 💻 Tech Stack

| Layer      | Technology                                  |
|------------|-------------------------------------------|
| Frontend  | React.js, Axios, React Router DOM, CSS    |
| Backend   | Node.js, Express.js, Mongoose, Multer     |
| Database  | MongoDB (local instance)                 |

---

## 📂 Folder Structure

student-team-app/
├── backend/
│   ├── uploads/
│   ├── models/
│   │   └── Member.js
│   ├── routes/
│   │   └── members.js
│   ├── .gitignore
│   ├── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── AddMember.js
│   │   │   ├── ViewMembers.js
│   │   │   └── MemberDetails.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── .env
├── README.md

---

## ⚙️ Prerequisites

- Node.js and npm installed → [Download](https://nodejs.org/)
- MongoDB installed and running → [Download](https://www.mongodb.com/try/download/community)

---

## 📥 Setup Instructions

### 1️⃣ Backend Setup

```bash
cd backend
npm install

Start MongoDB in a separate terminal:
```bash
mongod

Start backend server:

```bash
node server.js

The backend will run on http://localhost:5000

Frontend Setup
```bash
cd frontend
npm install
npm start

The frontend will run on http://localhost:3000
