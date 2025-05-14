# 📸 Instagram Clone

An Instagram-inspired full-stack web application built using **MERN Stack (MongoDB, Express, React, Node.js)** and integrated with **Gemini API** for smart features like image captions, hashtag generation, or user insights.

## 🌐 Live Demo
> [Deployed Link Here](#) *(Add your deployed URL)*

---

## 🛠️ Tech Stack

### 💻 Frontend
- React.js
- Tailwind CSS / SCSS (if used)
- Context API / Redux (if used)
- Axios

### 🧠 Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Gemini API (Google AI)

---

## 📦 Features

### ✅ User Features
- Signup & Login with JWT Auth
- Profile Page with Posts and Bio
- Create, Edit, and Delete Posts
- Like/Unlike Posts
- Follow/Unfollow Users
- Add & View Stories
- Real-Time Comments and Feed
- Smart Caption/Hashtag Suggestions using Gemini API

### 🤖 AI Features (Gemini API)
- Auto-generated image captions
- Suggested hashtags for better reach
- Smart user interaction recommendations *(optional)*

---



---

## 🔐 Environment Variables

Create a `.env` file in `server/` directory:

```env
PORT=3000,
MONGO_URI=
JWT_SECRET=
JWT_EXPAIRE_IN=7d
REDIS_HOST=
REDIS_PORT=
REDIS_PASSWORD=
GEMINI_API_KEY=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL=
BASE_URL=http://localhost:5173


