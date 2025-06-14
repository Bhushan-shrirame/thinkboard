<h1 align="center">📝 Note Taking App ✨</h1>

<p align="center">
  A minimal and powerful note-taking application built with the MERN stack, Redis for caching, and a beautiful frontend.
</p>

<p align="center">
  <a href="https://thinkboard-alov.onrender.com/" target="_blank"><strong>🚀 Live Demo</strong></a>
</p>

---

## 📌 Features

- 🖊️ Create, update, and delete notes
- 🧠 Real-time data sync with Redis
- 🔐 Secure backend with environment variables
- ⚡ Fast and responsive UI using modern React stack

---

## 🧰 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Cache:** Upstash Redis
- **Dev Tools:** Vite, Nodemon, dotenv

---

## 🧪 .env Setup

### Backend (`/backend`)

```
MONGO_URI=<your_mongo_uri>

UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```

## 🔧 Run the Backend

```
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```
cd frontend
npm install
npm run dev
```