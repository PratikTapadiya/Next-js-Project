import Link from "next/link";
import { use } from "react";

export default  function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{lang? :"en"|"es"|"fr"}>;
}) {
    const {articleId}=  use(params);
    const {lang="en"}=  use(searchParams);
  return (
    <div>
      <h1>New article {articleId}</h1>
      <h3>Reading in {lang}</h3>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <br></br>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <br></br>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
