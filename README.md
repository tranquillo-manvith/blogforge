# BlogForge

A minimal CMS-style blog platform with rich text support, SEO-friendly URLs, and MongoDB integration.  
Built for an internship assignment at Truly IAS.

## 🔗 Live Demo (Future Reference)

[https://blogforge-ten.vercel.app/](https://blogforge-ten.vercel.app/)

## Features

- Rich Text Editor using **React-Quill**
- SEO-friendly slugs in URL
- MongoDB (with Mongoose) for data storage
- Admin Dashboard for full CRUD:
  - Create, edit, delete posts
  - View all posts
- Public blog post viewer (`/posts/[slug]`)
- Dynamic `<meta>` tags for SEO
- Basic admin-only access (no external users)

---

## Tech Stack

| Layer    | Tech                     |
| -------- | ------------------------ |
| Frontend | Next.js, Tailwind CSS    |
| Backend  | Next.js API Routes       |
| Database | MongoDB Atlas + Mongoose |
| Editor   | React-Quill              |
| Hosting  | Vercel                   |

---

## UI Designs

All UI design mockups are available in the [`/designs`](./designs) folder.

- Admin Dashboard
- Create Post
- Edit Post
- Public Post View
- Blog Home Page

Made with Figma.

---

## MongoDB Schema

```js
const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true }, // HTML string
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
```
