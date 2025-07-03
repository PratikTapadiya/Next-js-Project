import { NextResponse } from 'next/server';

const posts = [
  { id: '1', title: 'Hello World', content: 'First post content' },
];

// GET all posts
export async function GET() {
  return NextResponse.json(posts);
}

// POST a new post
export async function POST(req: Request) {
  const body = await req.json();
  const newPost = {
    id: Date.now().toString(),
    title: body.title,
    content: body.content,
  };
  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
}
