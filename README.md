# 🔗 ChhotiLink — A Simple and Secure URL Shortener

**ChhotiLink** is a lightweight and efficient full-stack web application that lets users shorten long URLs and redirect to them instantly — all while keeping things safe and simple. Designed with both user experience and backend integrity in mind.

---

## 🚀 Features

- 🔐 User Authentication with JWT (stored in HTTP-only cookies)
- 🔒 Passwords hashed securely using `bcrypt`
- ✂️ Generate and store short URLs
- ↪️ Redirect from short URLs to original long links
- 📁 Structured codebase for scalability
- 🎨 Minimal UI using EJS + TailwindCSS

---

## 🛠️ Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Frontend    | EJS, TailwindCSS         |
| Backend     | Node.js, Express.js      |
| Database    | MongoDB (via Mongoose)   |
| Auth        | JWT + Cookies, bcrypt    |

---

## 📂 Project Structure

ChhotiLink/
├── controllers/ # Route handlers
├── middlewares/ # Middleware (e.g., auth checks)
├── models/ # Mongoose schemas
├── node_modules/ # Dependencies
├── routes/ # API routes
│ ├── url.js
│ └── users.js
├── services/ # Auth service
│ └── auth.js
├── views/ # EJS templates
│ ├── homePage.ejs
│ ├── loginPage.ejs
│ ├── signupPage.ejs
│ └── urls.ejs
├── .env # Environment config
├── app.js # Main app logic
├── connect.js # MongoDB connection
├── package.json
├── package-lock.json
└── README.md

---

## 🔧 Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/chhotiLink.git
cd chhotiLink
```
###2. Install dependencies
```
 npm install
```

### 3. Configure Environment Variables
Create a .env file in the root folder:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

```

### 4. Start the development server
```
npm start

```

#### Visit: http://localhost:3000

🧠 How It Works
✅ User signs up, and their password is hashed with bcrypt before being stored.

🔐 JWT is generated on login and sent to the client via HTTP-only cookies.

📎 Authenticated users can shorten any URL.

🔗 Each shortened URL is stored in MongoDB and mapped with a unique ID.

↪️ When accessed, the short URL redirects users to the original long URL.

