# Indian Kart - Advanced E-Commerce Platform

A premium, full-stack MERN e-commerce application rebranded as **Indian Kart**. This platform features real-time updates, secure authentication, and a modern, responsive UI with an Indian-inspired Saffron & Green theme.

## 🌐 Live Deployment

| Service | URL |
|---|---|
| 🛒 **Frontend (Store)** | [https://indiankart.vercel.app](https://indiankart.vercel.app) |
| 🔌 **Backend (API)** | [https://indiankart-api.vercel.app](https://indiankart-api.vercel.app) |

## 🚀 Key Features

- **Real-time Inventory**: Socket.io integration for instant product and order updates.
- **Secure Authentication**: JWT-based login and registration with automated role detection.
- **Product Management**: Robust admin dashboard for managing inventory, categories, and stock.
- **Dynamic Cart & Wishlist**: Persistent user data synced across sessions.
- **Atlas Cloud Integration**: Fully migrated to MongoDB Atlas for cloud scalability.
- **Responsive Design**: Built with Vite, React, and Tailwind CSS for lightning-fast performance.
- **Indian Kart Theme**: Saffron & Deep Green color palette inspired by India.

## 🛠️ Technology Stack

- **Frontend**: React.js, Vite, Tailwind CSS, Lucide React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (`indian_kart` database)
- **Real-time**: Socket.io
- **State Management**: Context API
- **Deployment**: Vercel (Frontend + Backend)

## 📦 Project Structure

```text
.
├── client/       # React application (Vite)
└── server/       # Node/Express API
```

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/mitulaghara/FUTURE_FS_03.git
cd FUTURE_FS_03
```

### 2. Backend Setup
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory:
```env
PORT=5001
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
```
Start the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```
Create a `.env` file in the `client` directory:
```env
VITE_API_BASE_URL=http://localhost:5001
```
Start the development server:
```bash
npm run dev
```

## 🔐 Admin Access

- **Email:** `admin@indiankart.com`
- **Password:** `Aghara@2005`

> **Note:** On first run with a fresh database, visit `https://indiankart-api.vercel.app/api/seed` to seed sample products.

## 🌐 Deployment

The application is deployed on **Vercel**.
- **Frontend:** [https://indiankart.vercel.app](https://indiankart.vercel.app)
- **Backend API:** [https://indiankart-api.vercel.app](https://indiankart-api.vercel.app)
- **Cloud Database:** MongoDB Atlas (`indian_kart`)

## 👤 Author

**Mitul Aghara**
- GitHub: [@mitulaghara](https://github.com/mitulaghara)
- Project: FUTURE_FS_03
