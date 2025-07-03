import { NextResponse } from 'next/server';

const posts = [
  { id: '1', title: 'Hello World', content: 'First post content' },
];

// GET post by ID
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id);
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(post);
}

// PUT update post
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const index = posts.findIndex(p => p.id === params.id);
  if (index === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  posts[index] = { ...posts[index], ...body };
  return NextResponse.json(posts[index]);
}

// DELETE post
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const index = posts.findIndex(p => p.id === params.id);
  if (index === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const [deleted] = posts.splice(index, 1);
  return NextResponse.json(deleted);
}
