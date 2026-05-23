# Auth Backend - TypeScript Login System

Complete TypeScript backend with JWT-based authentication.

## Features
- User Registration
- User Login
- User Logout
- Protected Routes
- JWT Token (Cookie + Bearer)
- Password Hashing (bcrypt)
- MongoDB Database

## API Endpoints

| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| POST | `/api/auth/register` | Register user | No |
| POST | `/api/auth/login` | Login user | No |
| POST | `/api/auth/logout` | Logout user | No |
| GET | `/api/auth/me` | Get current user | Yes |
| GET | `/api/user/profile` | Get profile | Yes |

## Setup

```bash
npm install
```

## Run (Development)

```bash
npm run dev
```

## Build & Run (Production)

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/auth-backend
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=7d
```

## Example Requests

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"123456"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"123456"}'
```
# AWS
# AWS
