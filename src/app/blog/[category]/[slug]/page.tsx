interface PageProps {
  params: { category: string; slug: string };
}

export default function BlogPost({ params }: PageProps) {
  const { category, slug } = params;
  if (!category || !slug) {
    return <h2>Missing content — fallback shown</h2>;
  }

  return (
    <h1>{`Inside Blogs: ID ${category} and review ${slug} for the product`}</h1>
  );
}
