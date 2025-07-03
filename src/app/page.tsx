"use client";
import Link from "next/link";
import { useState } from "react";

type Post = {
  id: string;
  title: string;
  content: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([
    { id: "1", title: "Initial Post", content: "This is a starter post" },
  ]);
  const [form, setForm] = useState<Post>({ id: "", title: "", content: "" });

  const handleSubmit = () => {
    if (form.id) {
      // Update
      setPosts((prev) =>
        prev.map((p) => (p.id === form.id ? { ...p, ...form } : p))
      );
    } else {
      // Create
      const newPost: Post = {
        id: Date.now().toString(),
        title: form.title,
        content: form.content,
      };
      setPosts((prev) => [...prev, newPost]);
    }
    setForm({ id: "", title: "", content: "" });
  };

  const editPost = (post: Post) => setForm(post);

  const deletePost = (id: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Home Page</h1>
      <Link href="/about">Go to About Page</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=es">Read in Spanish</Link>
      <br />

      <hr style={{ margin: "2rem 0" }} />

      <h2>Manage Posts</h2>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <br />
      <textarea
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <br />
      <button onClick={handleSubmit}>
        {form.id ? "Update" : "Create"} Post
      </button>

      <ul style={{ marginTop: "2rem" }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <strong>{post.title}</strong>
            <p>{post.content}</p>
            <button onClick={() => editPost(post)}>Edit</button>
            <button
              onClick={() => deletePost(post.id)}
              style={{ marginLeft: "0.5rem" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
