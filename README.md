<img width="1917" height="1077" alt="social" src="https://github.com/user-attachments/assets/c2931125-a5b0-49a4-bb26-5ae61bd7b203" />

# Social Media Web App

A simple full-stack social media web application built with the MERN stack (MongoDB, Express, React, Node). The app supports user registration/login, creating posts with images, liking posts, following users, and editing profiles.

## Tech stack

- Frontend: React, Material-UI, Redux, React Router
- Backend: Node.js, Express, MongoDB, JWT authentication

## Features

- User signup / login
- Create, edit and delete posts (with image upload)
- Like / unlike posts
- Follow / unfollow users
- View followers / following and user profiles

## Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB (local) or a MongoDB Atlas connection string
- (Optional) Docker & Docker Compose

## Environment variables

Create a `.env` file inside the `Server` folder with at least the following variables:

```
MONGO_DB=<your-mongodb-connection-string>
JWT_KEY=<a-secret-key-for-jwt>
PORT=4000
```

## Install & Run (development)

Server

```bash
cd Server
npm install
npm start
```

Client

```bash
cd client
npm install
npm start
```

The client is configured to proxy API requests to `http://localhost:4000` by default.

## Docker (optional)

If you prefer Docker, the repository includes a `docker-compose.yml`. To build and run both services:

```bash
docker-compose up --build
```

## Project structure (high level)

- `client/` — React frontend
- `Server/` — Express backend and API routes
- `docker-compose.yml` — optional compose setup

## Notes

- Backend expects images to be uploaded to `Server/public/images` (static files served from `/images`).
- Important env vars: `MONGO_DB` and `JWT_KEY`.

## Contributing

Feel free to open issues or pull requests. Small, focused changes are easiest to review.

## License

This project is provided as-is; add a license file if you plan to publish.

<img width="1917" height="1077" alt="social" src="https://github.com/user-attachments/assets/c174bce1-77ea-4e1d-a87d-290a2d829d85" />
