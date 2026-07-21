# 👨‍💼 Employee Management System

A full-stack **Employee Management System** built using **React, Node.js, Express.js, and MongoDB**. The application provides an intuitive interface to manage employee records with complete CRUD functionality, duplicate email validation, and search capabilities.

## 🌐 Live Demo

🔗 **Application:** https://employee-managementy-system-frontendd.onrender.com

---

## 🚀 Features

- ➕ Add new employees
- 📋 View all employees
- ✏️ Update employee details
- 🗑️ Delete employees
- 🔍 Search employees by name or email
- 🚫 Prevent duplicate email entries
- 📱 Responsive UI
- ⚡ RESTful API architecture

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## 📂 Project Structure

```text
Employee-Management-System/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/employees` | Get all employees |
| POST | `/employees/add` | Add a new employee |
| PUT | `/employees/update/:id` | Update employee details |
| DELETE | `/employees/delete/:id` | Delete an employee |

---

## 📊 Employee Schema

```javascript
{
  name: String,
  email: String,
  age: Number,
  department: String,
  position: String
}
```

---

## 🔮 Future Enhancements

- Authentication & Authorization
- Role-Based Access Control
- Employee Profile Images
- Pagination
- Sorting & Filtering
- Dashboard Analytics
- Export to Excel/PDF

---

## 👨‍💻 Author

**Rajveer Rai**

Feel free to contribute or raise issues if you have suggestions for improvements!

---

## ⭐ Show Your Support

If you found this project useful, consider giving it a ⭐ Star on GitHub!
