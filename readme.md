# create-mvc-app

A simple scaffolding tool for creating a starter **Node + Express MVC project** for students.

This tool copies a predefined project template into a new folder so students can immediately begin working with a consistent structure in class and on assignments.

![MVC Architecture Diagram](./template/public/images/default.webp)

---

## What this tool does

- Creates a new project folder
- Copies a predefined MVC starter template into it
- Includes example routes, views, static assets, and configuration
- Does not modify files after copying
- Does not run `npm install`

The generated project is intentionally simple and readable.

---

## Requirements

- Node.js 18 or newer
- npm

Students should create projects in a **local folder** (Desktop, Documents, or a dedicated projects directory), not inside cloud-synced folders such as OneDrive or iCloud.

---

## Installation

Install the tool globally from the NPM registry:

```bash
npm install -g @archerjb/create-mvc-app
```

Once installed, the `create-mvc-app` command will be available globally.

---

## Usage

Create a new project by providing a folder name:

```bash
create-mvc-app my-app
```

Then:

```bash
cd my-app
npm install
npm run dev
```

By default, the application will start on:

```
http://localhost:8001
```

---

## Generated project structure

The scaffolded project follows a basic MVC layout:

```text
public/
src/
  controller/
  model/
  routers/
  services/
  utility/
  views/
app.js
server.js
```

The project includes:
- An example EJS-rendered page
- A static HTML page served from `/public`
- Shared CSS and images
- Example files to demonstrate structure

Students are expected to modify or replace the example files as the course progresses.

---

## Purpose

This tool exists to:
- Standardize project setup across a class
- Reduce time spent on boilerplate
- Reinforce MVC concepts through structure
- Keep focus on Node, Express, and core JavaScript

There is no build step and no framework abstraction beyond Express.

---

## License

MIT
