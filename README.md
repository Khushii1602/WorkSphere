# WorkSphere

A workspace for planning projects, assigning tasks, and keeping team delivery visible.

**Status:** Starter implementation · early development

## What is in this repository

- A responsive React dashboard preview with project summaries and a sample task list.
- An Express API starter with a `GET /api/health` endpoint.
- A documented client/server structure and development roadmap.

The dashboard currently uses hard-coded sample data. Authentication, project persistence, task APIs, and MongoDB integration are not implemented yet.

## Tech stack

- **Frontend:** React, Vite, JavaScript, Lucide icons
- **Backend:** Node.js, Express
- **Database (planned):** MongoDB with Mongoose

## Project structure

```text
WorkSphere/
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── src/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── docs/
│   └── ROADMAP.md
├── .gitignore
└── README.md
```

## Run locally

Use Node.js 18 or newer.

**1. Start the API**

```bash
cd server
npm install
```

Copy `.env.example` to `.env`, then run:

```bash
npm run dev
```

The API starts on port `5000`. Check it at `http://localhost:5000/api/health`.

**2. Start the frontend** in a second terminal:

```bash
cd client
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Development roadmap

- [ ] Connect MongoDB and define data models
- [ ] Implement registration, login, and protected routes
- [ ] Add projects, memberships, and role permissions
- [ ] Implement task creation, assignment, priorities, and due dates
- [ ] Replace sample dashboard data with API responses
- [ ] Add validation, tests, and deployment documentation

See [docs/ROADMAP.md](docs/ROADMAP.md) for the broader plan.

## Engineering principles

- Keep routes, controllers, and data models separated as the API grows.
- Validate incoming data on the server.
- Store credentials and secrets in environment variables.
- Check authorization on every protected resource.

---

This is an independent project in active development. The current UI is a preview and the planned features above should not be treated as completed functionality.
