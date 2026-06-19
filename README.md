# Indian Kart - Advanced E-Commerce Platform

A premium, full-stack MERN e-commerce application rebranded as **Indian Kart**. This platform features real-time updates, secure authentication, and a modern, responsive UI with an Indian-inspired Saffron & Green theme.

## 🚀 Key Features

- **Real-time Inventory**: Socket.io integration for instant product and order updates.
- **Secure Authentication**: JWT-based login and registration with automated role detection.
- **Product Management**: Robust admin dashboard for managing inventory, categories, and stock.
- **Dynamic Cart & Wishlist**: Persistent user data synced across sessions.
- **Atlas Cloud Integration**: Fully migrated to MongoDB Atlas for cloud scalability.
- **Responsive Design**: Built with Vite, React, and Tailwind CSS for lightning-fast performance.

## 🛠️ Technology Stack

- **Frontend**: React.js, Vite, Tailwind CSS, Lucide React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas Cloud)
- **Real-time**: Socket.io
- **State Management**: Context API

## 📦 Project Structure

```text
.
├── E-Commerce/
│   ├── client/       # React application (Vite)
│   └── server/       # Node/Express API
├── .gitignore
└── README.md
```

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/mitulaghara/AWT-Ecommerce-Project.git
cd AWT-Ecommerce-Project
```

### 2. Backend Setup
```bash
cd E-Commerce/server
npm install
```
Create a `.env` file in the `server` directory:
```env
PORT=5001
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```
Start the development server:
```bash
npm run dev
```

## 🌐 Deployment

The application is optimized for deployment on **Vercel**.
- **Serverless functions**: The backend is ready for serverless hosting.
- **Cloud Database**: Integrated with MongoDB Atlas for reliable performance.

## 👤 Author

**Mitul Aghara**
- GitHub: [@mitulaghara](https://github.com/mitulaghara)
- Project: AWT Final Project
