# 🐶 React Dog Finder

> A simple React + Vite app using React Router to “find” and view information about different dog breeds via dedicated routes.

[![React](https://img.shields.io/badge/react-18%2B-blue)](https://reactjs.org/) [![Vite](https://img.shields.io/badge/vite-4%2B-cyan)](https://vitejs.dev/) [![React Router](https://img.shields.io/badge/react--router-6+-purple)](https://reactrouter.com/)

---

## 📋 Table of Contents

1. [About](#about)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
5. [Usage](#usage)  
6. [Contributing](#contributing)  
7. [Contact](#contact)  

---

## 🌟 About

**React Dog Finder** is a teaching assignment app that uses React Router to navigate between different dog “profile” pages. The app defines routes for each dog breed, and when you visit a route (e.g. `/dogs/labrador`), it displays that dog’s photo and information.

---

## ✨ Features

- **Dynamic Routing**: Routes for each dog (`/dogs/:name`)  
- **Breed Data**: Hard-coded info and images for each dog  
- **Navigation Links**: Clickable links to browse breeds  
- **Fallback Route**: 404 page for unknown paths  

---

## 🛠 Tech Stack

- **Framework:** React 18+  
- **Bundler:** Vite  
- **Routing:** React Router v6  
- **Styling:** CSS 
- **Tooling:** ESLint, Prettier  

---

## 🏁 Getting Started

### Prerequisites

- Node.js v16 or higher  
- npm (bundled with Node.js) or Yarn  

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/malmonte827/react-dog-router.git
cd react-dog-router

# 2. Install dependencies
npm install
# or
yarn

# 3. Start the development server
npm run dev
# or
yarn dev
```

### 📖 Usage

- Navigate to /dogs/whippet, /dogs/labrador, /dogs/terrier, etc.

- Use the navigation links at the top to switch between breeds.

- If you enter an unrecognized route, you’ll see a “404 — Dog Not Found” message.
---

## Contributing

We welcome contributions! To contribute:

- Fork the repository

- Create a new branch (git checkout -b feature-name)

- Commit your changes (git commit -m 'Add new feature')

- Push to the branch (git push origin feature-name)

- Open a pull request

## Contact

For questions or suggestions, reach out:

- Email: malmonte827@gmail.com

