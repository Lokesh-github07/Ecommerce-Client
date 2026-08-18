# 🛒 ShopEase

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

**Frontend**
- React.js
- Vite
- React Router
- Axios
- CSS

**Backend**
- Node.js
- Express.js
- REST APIs
- JWT Authentication
- bcrypt

**Database**
- MongoDB
- Mongoose

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