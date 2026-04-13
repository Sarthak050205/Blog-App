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

## 🐛 Bugs Fixed During Development & Deployment

A full log of bugs caught and fixed — great learning experience overall.

| # | File | Bug | Fix |
|---|------|-----|-----|
| 1 | `App.jsx` | `<Outlet />` was commented out — child routes never rendered | Uncommented `<Outlet />` |
| 2 | Appwrite auth service | Wrong method name `createEmailSession` instead of `createEmailPasswordSession` | Updated to correct Appwrite SDK v13+ method |
| 3 | `AllPost.jsx` | Typo in import path, wrong fetch method, wrong property name, API call outside `useEffect` | Fixed import, method, property, wrapped call in `useEffect` |
| 4 | `LogoutBtn.jsx` | Importing from wrong file | Fixed import path to correct store/slice |
| 5 | `SignUp.jsx` | `lable` typo on form field | Renamed to `label` |
| 6 | `Button.jsx` | `px-4,` had a comma, `py2` missing dash | Fixed to `px-4` and `py-2` |
| 7 | `PostForm.jsx` | `status` field sent as string `"true"/"false"` instead of boolean | Converted to proper boolean before submitting to Appwrite |
| 8 | `PostForm.jsx` | Missing comma in object — silent JS syntax error | Added missing comma |
| 9 | Redux store | Appwrite response object contained functions — Redux serializable check error | Extracted only plain data before dispatching to store |
| 10 | `authSlice.js` | `userData` was `undefined` — wrong payload structure assumed | Fixed payload destructuring to match actual dispatched shape |
| 11 | Post detail page | `parse(post.content)` crashing when `post.content` was `null` | Added null check before calling `parse()` |
| 12 | Appwrite storage service | `getFilePreview` doesn't exist on free plan — also `this.bucket` vs `this.storage` naming mismatch | Renamed to `getFileView` and fixed constructor naming |

---

## 🙋‍♂️ Author

**Sarthak Kumar Lohani**
- LinkedIn: [linkedin.com/in/sarthak-kumar-lohani](https://linkedin.com/in/sarthak-kumar-lohani)
- GitHub: [github.com/Sarthak050205](https://github.com/Sarthak050205)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
