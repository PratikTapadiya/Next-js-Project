This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# Posts API

## Endpoints

### GET /api/posts
Returns all posts.

### POST /api/posts
Creates a new post.
- Body: { title: string, content: string }

### GET /api/posts/[id]
Returns a single post by ID.

### PUT /api/posts/[id]
Updates an existing post.
- Body: { title?: string, content?: string }

### DELETE /api/posts/[id]
Deletes a post by ID.

---

## Frontend
Open http://localhost:3000 to:
- View all posts
- Create a new post
- Edit a post
- Delete a post
