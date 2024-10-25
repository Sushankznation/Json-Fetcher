# JSON Fetcher

A simple and interactive web application that allows users to fetch JSON data from any API endpoint, view it in multiple formats (HTML/Markdown), and edit JSON content manually. The project was built with React, TypeScript, and Tailwind CSS, with state management handled through React’s Context API and notifications powered by React Toastify.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

---

## Features

- **Fetch JSON Data**: Input any API endpoint and retrieve JSON data by clicking the GET button.
- **Edit JSON**: Manually edit or input JSON data to view it directly.
- **HTML and Markdown Rendering**: Choose to render JSON data as HTML or Markdown for easy readability.
- **Error Notifications**: Displays real-time success and error notifications using React Toastify.
- **Responsive Design**: Optimized layout for mobile and desktop screens using Tailwind CSS.

---

## Demo

- **GitHub Repository**: [View the code](https://github.com/Sushankznation/Json-Fetcher)
- **Hosted Application**: [View live application](#) *(Add hosted link here if available)*

---

## Technologies Used

- **React** with TypeScript for building a dynamic, type-safe UI
- **React Context API** for state management across components
- **Tailwind CSS** for responsive styling
- **React Toastify** for elegant notifications
- **Axios** for API requests
- **React Markdown** for Markdown rendering

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sushankznation/Json-Fetcher.git
   cd Json-Fetcher
2. **CInstall Dependencies:**
   ```npm install
3. **CRun the Application:**
   ```npm start
---
## Usage

- **Fetch Data**: Enter an API URL in the input field and click **GET** to fetch JSON data.
- **Edit JSON**: Manually enter JSON data in the text area, and click **Update JSON** to render it.
- **Toggle Render Type**: Choose between **HTML** and **Markdown** to render JSON data in different formats.
- **View Notifications**: Success and error messages appear via toast notifications in the top right corner.
---
## Project Structure 
Json-Fetcher/
├── public/
├── src/
│   ├── components/
│   │   ├── JsonInput.tsx
│   │   ├── DisplayArea.tsx
│   │   ├── RenderOptions.tsx
│   │   └── AppProvider.tsx
│   ├── AppContext.tsx
│   ├── App.tsx
│   └── index.tsx
├── .gitignore
├── package.json
└── README.md

