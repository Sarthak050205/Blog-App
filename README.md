# 📝 Blog App

A full-stack blog platform built with **React.js** and **Appwrite**, featuring user authentication, rich text editing, and image uploads. Users can create, edit, and delete their own posts with a clean, responsive UI.

🔗 **Live Demo:** [blog-app-two-livid.vercel.app](https://blog-app-two-livid.vercel.app)

---

## ✨ Features

- 🔐 User Authentication (Sign Up / Login / Logout) via Appwrite
- 📝 Create, Edit & Delete blog posts
- 🖼️ Image upload and preview for post thumbnails
- 📄 Rich Text Editor (TinyMCE)
- 🔒 Protected routes — only post authors can edit/delete their posts
- ⚡ Fast and responsive UI built with Tailwind CSS
- ☁️ Deployed on Vercel

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React.js | Frontend framework |
| Redux Toolkit | Global state management |
| React Router DOM | Client-side routing |
| Appwrite | Backend as a Service (Auth, DB, Storage) |
| TinyMCE | Rich text editor |
| Tailwind CSS | Styling |
| Vite | Build tool |
| Vercel | Deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- An [Appwrite](https://appwrite.io) account and project

### Installation

```bash
# Clone the repository
git clone https://github.com/Sarthak050205/Blog-App.git
cd Blog-App

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_TINYMCE_API_KEY=your_tinymce_key
```

### Run Locally

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
├── appwrite/         # Appwrite service config (auth, database, storage)
├── components/       # Reusable UI components
│   ├── Header/
│   ├── Footer/
│   ├── post-form/
│   └── ...
├── pages/            # Route-level page components
├── store/            # Redux slices
├── conf/             # Environment variable config
└── main.jsx
```

---

## 🐛 Notable Bugs Fixed During Deployment

While deploying to Vercel, I ran into a couple of Appwrite SDK issues worth documenting:

1. **`getFilePreview is not a function`** — The service file was calling a method that didn't exist. Fixed by aligning the method name to `getFileView` as defined in the Appwrite service class.

2. **`Cannot read properties of undefined (reading 'getFileView')`** — The storage instance inside the Appwrite service class was named `this.bucket` in the constructor but referenced as `this.storage` in the methods after a refactor. Fixed by making the naming consistent throughout the class.

---

## 🙋‍♂️ Author

**Sarthak Kumar Lohani**
- LinkedIn: [linkedin.com/in/sarthak-kumar-lohani](https://linkedin.com/in/sarthak-kumar-lohani)
- GitHub: [github.com/Sarthak050205](https://github.com/Sarthak050205)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
