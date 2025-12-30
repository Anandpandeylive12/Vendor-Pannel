# Vendor Product Approval System (MERN Stack)

A full-stack **MERN application** that implements **Vendor Authentication** and a **Product Approval Workflow** with role-based access control.

This project was built as an **interview assignment** with focus on:
- Clean architecture
- Secure authentication
- REST API design
- Professional UI
- Real-world approval flow

---

## 🚀 Features

### 🔐 Authentication
- Vendor Signup (Email & Password)
- Vendor Login with JWT
- Password hashing using bcrypt
- Protected routes
- Role-based access (Vendor / Admin)
- Google OAuth support (optional)

### 🧑‍💼 Vendor Module
- Vendor Dashboard
- Add new products
- View submitted products
- Track product status:
  - Pending
  - Approved
  - Rejected

### 🛡️ Admin Module
- View all pending products
- Approve or reject products
- Admin-only protected APIs
- Optional Admin UI for testing & demo

### 🎨 UI/UX
- Clean, professional UI using **Tailwind CSS**
- Responsive layout
- Status badges
- Card-based forms & tables

---

## 🧱 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Passport.js (Google OAuth)
- bcryptjs

---

## 📁 Project Structure

# Vendor Product Approval System (MERN Stack)

A full-stack **MERN application** that implements **Vendor Authentication** and a **Product Approval Workflow** with role-based access control.

This project was built as an **interview assignment** with focus on:
- Clean architecture
- Secure authentication
- REST API design
- Professional UI
- Real-world approval flow

---

## 🚀 Features

### 🔐 Authentication
- Vendor Signup (Email & Password)
- Vendor Login with JWT
- Password hashing using bcrypt
- Protected routes
- Role-based access (Vendor / Admin)
- Google OAuth support (optional)

### 🧑‍💼 Vendor Module
- Vendor Dashboard
- Add new products
- View submitted products
- Track product status:
  - Pending
  - Approved
  - Rejected

### 🛡️ Admin Module
- View all pending products
- Approve or reject products
- Admin-only protected APIs
- Optional Admin UI for testing & demo

### 🎨 UI/UX
- Clean, professional UI using **Tailwind CSS**
- Responsive layout
- Status badges
- Card-based forms & tables

---

## 🧱 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Passport.js (Google OAuth)
- bcryptjs

---

## 📁 Project Structure

vendor-approval-system/
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── utils/
│ │ ├── app.js
│ │ └── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json

---

## ⚙️ Environment Variables

### Backend `.env`
```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/vendor/google/callback

Frontend .env
VITE_API_URL=http://localhost:5000/api

▶️ Running the Project Locally
1️⃣ Backend Setup
cd backend
npm install
npm run dev


Backend runs on:

http://localhost:5000

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🔌 API Endpoints
Auth
Method	Endpoint	Description
POST	/api/vendor/signup	Vendor Signup
POST	/api/vendor/login	Vendor Login
GET	/api/vendor/google	Google OAuth
Product
Method	Endpoint	Description
POST	/api/product/add	Add product
GET	/api/product/vendor/:id	Vendor products
GET	/api/product/pending	Admin: pending products
PUT	/api/product/approve/:id	Admin: approve/reject
🔄 Product Approval Flow

Vendor logs in

Vendor submits product

Product status = Pending

Admin reviews product

Admin approves/rejects

Vendor dashboard updates automatically

🔐 Security Considerations

Passwords hashed with bcrypt

JWT-based authentication

Protected API routes

Role-based authorization

Environment variables for secrets

🧪 Admin Testing

To test admin features:

Change a user role to "admin" in MongoDB

Login as admin

Visit /admin

Approve or reject products

🌱 Future Improvements

Email notifications on approval

Pagination & search

Image upload with cloud storage

Refresh tokens

Admin analytics dashboard

📌 Conclusion

This project demonstrates:

Full-stack MERN development

Secure authentication

Clean architecture

Real-world product workflows

Professional frontend design


---

# ✅ WHAT YOU HAVE NOW

✔ Complete MERN app  
✔ Professional UI  
✔ Admin + Vendor flow  
✔ Clean code  
✔ Strong README  
✔ Interview-ready project  

---

## 🏁 FINAL STEP OPTIONS

Reply with **ONE WORD ONLY** 👇

- **`DEPLOY`** → Deploy frontend & backend  
- **`SECURITY`** → Extra security hardening  
- **`POLISH`** → Small UX & performance improvements  
- **`SUBMISSION`** → What to say in interview + GitHub tips  

You’ve reached **final-round interview quality** 👏
