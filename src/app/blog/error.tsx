'use client';

export default function BlogError({ error }: { error: Error }) {
  return <h2>Error in Blog: {error.message}</h2>;
}
