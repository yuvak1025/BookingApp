﻿
# Activity Booking Web Application

## 📦 Tech Stack

- Frontend: React.js (optional)
- Backend: Node.js, Express.js
- Database: MongoDB (via MongoDB Atlas)
- Tools: Postman, JWT, Mongoose

## 🔧 Features

- User Registration & Login (with password hashing and JWT)
- Activity Listing with date, location, and description
- Booking an activity (authenticated users only)
- View user’s own bookings

## 📁 Folder Structure

```
/backend
│
├── models/
│   ├── User.js
│   ├── Activity.js
│   └── Booking.js
│
├── routes/
│   ├── auth.js
│   ├── activities.js
│   └── bookings.js
│
├── controllers/
│   └── (optional controllers if separated)
│
├── .env
├── server.js
└── package.json
```

## 🧪 API Endpoints

| Method | Endpoint              | Description                   |
|--------|------------------------|-------------------------------|
| POST   | /api/auth/register     | Register new user             |
| POST   | /api/auth/login        | Login and receive JWT token   |
| GET    | /api/activities        | Get list of all activities    |
| POST   | /api/bookings          | Book an activity              |
| GET    | /api/bookings          | View user's own bookings      |


Desetti Yuva Kiran – IIT Patna  
GitHub: [https://github.com/yuvak1025?tab=overview&from=2023-03-01&to=2023-03-12]  
Email: [yuvakiran12321@gmail.com]
