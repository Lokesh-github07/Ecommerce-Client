# 🛒 ShopEase
### 📊 Repository Activity

[![Work in Progress](https://img.shields.io/badge/Status-Work%20in%20Progress-orange?style=for-the-badge)](https://github.com/Lokesh-github07/Ecommerce-Client)


[![Commits](https://img.shields.io/github/commit-activity/t/Lokesh-github07/TestAutomationFramework?style=flat-square)](https://github.com/Lokesh-github07/TestAutomationFramework/commits)

A full-stack e-commerce platform built with **React, Node.js, Express.js, MongoDB, and REST APIs**.

## 🚀 Features

- 🔐 User Registration & Login
- 🛍️ Product Browsing & Search
- 📦 Product Details
- 🛒 Shopping Cart
- ❤️ Wishlist
- 💳 Checkout & Payments
- 📋 Order Management
- 👤 User Profile
- 👨‍💼 Admin Dashboard
- 📊 Product & Order Management
- 📱 Responsive Design

## 🛠️ Tech Stack

### Frontend

[![React](https://img.shields.io/badge/React.js-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

### Backend

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![REST API](https://img.shields.io/badge/REST-API-02569B)](https://developer.mozilla.org/en-US/docs/Glossary/REST)
[![JWT](https://img.shields.io/badge/JWT-Authentication-000000?logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![bcrypt](https://img.shields.io/badge/bcrypt-Password%20Hashing-003A70)](https://github.com/kelektiv/node.bcrypt.js)

### Database

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white)](https://mongoosejs.com/)

## 📁 Project Structure

```text
ecommerce-platform/
├── client/          # React Frontend
├── server/          # Node.js + Express Backend
├── README.md
└── .gitignore
```

## 🔄 Architecture

```
React
  ↓
Axios
  ↓
REST APIs
  ↓
Node.js + Express
  ↓
Mongoose
  ↓
MongoDB
```

## ⚙️ Installation

**Frontend**
```bash
cd client
npm install
npm run dev
```

**Backend**
```bash
cd server
npm install
npm run dev
```

## 🔐 Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

## 📌 Project Status

🚧 Currently in Development

**Roadmap**
- [x] React frontend setup
- [x] Routing
- [x] Basic UI
- [x] Node.js backend
- [x] MongoDB integration
- [ ] Authentication
- [ ] Product APIs
- [ ] Cart & Wishlist
- [ ] Orders
- [ ] Payments
- [ ] Admin Dashboard
- [ ] Deployment

## 🖥️ Frontend Setup Notes (Vite + React)

The `client` folder is built with **React + Vite**, providing a minimal setup with HMR (Hot Module Replacement) and Oxlint rules.

Two official Vite plugins are available for React support:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) — uses [SWC](https://swc.rs/)

**React Compiler**
The React Compiler is not enabled on this template due to its impact on dev & build performance. To add it, see the [official installation guide](https://react.dev/learn/react-compiler/installation).

**Expanding the Oxlint Configuration**
For production applications, TypeScript with type-aware lint rules is recommended. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for guidance on integrating TypeScript and Oxlint's TypeScript-related rules.

## 👨‍💻 Author

Lokesh Pande

⭐ If you like this project, consider giving it a star!
