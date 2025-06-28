interface PageProps {
  params: { category: string; slug: string };
}

export default function BlogPost({ params }: PageProps) {
  const { category, slug } = params;
  return <h1>{`Inside Blogs: ID ${category} and review ${slug} for the product`}</h1>;
}
