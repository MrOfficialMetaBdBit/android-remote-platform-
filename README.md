# 🔐 Secure Remote Platform

A Full Stack Secure Remote Control System built with:

- 📱 Android (Client App)
- 🖥 Node.js + Express (Backend API)
- 🌐 React (Web Admin Panel)
- 🔒 JWT Authentication
- 🛡 Role Based Access Control (RBAC)
- 🔌 Socket.io (Real-time Communication)

---

## 🚀 Features

✅ User Registration & Login  
✅ JWT Token Authentication  
✅ Role Based Access (Admin / User / Device)  
✅ Secure REST API  
✅ Protected Socket Connection  
✅ Modular Scalable Architecture  

---

## 🏗 Project Structure

```
secure-remote-platform/
│
├── android-app/
│   ├── app/
│   ├── gradle/
│   ├── build.gradle
│   └── settings.gradle
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── modules/
│   │   ├── socket/
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── web-admin/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env
│
├── .gitignore
├── .env.example
└── README.md
```

---

## ⚙️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Backend** | Node.js, Express.js, PostgreSQL |
| **Frontend (Web)** | React, Redux, Axios |
| **Mobile** | Android (Java/Kotlin) |
| **Authentication** | JWT, bcrypt |
| **Real-time** | Socket.io |
| **Database** | PostgreSQL |

---

## 🔐 Security Features

- JWT Token-based authentication
- Password hashing with bcryptjs
- Role-based access control (RBAC)
- CORS enabled
- Protected API endpoints
- Secure WebSocket connections

---

## 📦 Installation

### Backend Setup

```bash
cd backend
npm install
cp .env .env.local  # Configure your environment
npm run dev
```

### Web Admin Setup

```bash
cd web-admin
npm install
cp .env .env.local  # Configure your environment
npm start
```

### Android App Setup

```bash
cd android-app
# Build and run using Android Studio or
./gradlew build
```

---

## 🔑 Environment Variables

Create a `.env` file in each directory using `.env.example` as reference:

**Backend:**
```
BACKEND_PORT=8000
JWT_SECRET=your_secret_key
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_NAME=secure_platform
```

---

## 🚀 Running the Application

1. **Start PostgreSQL Database**
   ```bash
   # Ensure PostgreSQL is running
   ```

2. **Start Backend**
   ```bash
   cd backend && npm run dev
   ```

3. **Start Web Admin**
   ```bash
   cd web-admin && npm start
   ```

4. **Run Android App**
   - Open in Android Studio and run on emulator/device

---

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Protected Routes
All protected routes require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📞 Support

For issues and questions, please open an issue in the repository.