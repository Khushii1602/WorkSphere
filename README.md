# WorkSphere

A team workspace for planning projects, assigning tasks, and tracking delivery.

> **Status:** Early development

## Overview

WorkSphere is a full-stack project management application designed to help small teams organise work in one place. The initial build focuses on clear project ownership, task workflows, and secure team access.

## Planned features

- User registration and sign-in
- Create and manage projects
- Invite team members and assign roles
- Create tasks with priority, status, and due dates
- Filter and search tasks
- Project activity history
- Dashboard with project and task summaries

## Technology

- **Frontend:** React, Vite, JavaScript, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT and bcrypt

The stack may evolve as the implementation develops.

## Repository layout

```text
WorkSphere/
├── client/                 # React application
│   └── src/
│       ├── components/
│       ├── features/
│       ├── pages/
│       ├── services/
│       └── App.jsx
├── server/                 # Express API
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       └── app.js
├── docs/
├── .gitignore
└── README.md
```

## Getting started

The application is currently being scaffolded. Setup instructions and environment variables will be documented here as the client and server are implemented.

## Development milestones

- [ ] Create client and server applications
- [ ] Configure MongoDB connection and environment variables
- [ ] Implement authentication
- [ ] Build project and membership APIs
- [ ] Build task workflows
- [ ] Connect the frontend to the API
- [ ] Add validation, tests, and deployment documentation

## Project principles

- Keep API routes, business logic, and data models separated.
- Validate incoming data on the server.
- Store secrets in environment variables.
- Enforce authorization on every protected resource.

---

This repository is an independent learning and development project. Features listed above are planned and are not represented as completed until implemented and tested.
