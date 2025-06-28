import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">Go to About Page</Link><br></br>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link><br></br>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link><br></br>
      <Link href="/articles/breaking-news-123?lang=es">Read in Spanish</Link><br></br>
    </div>
  );
}
