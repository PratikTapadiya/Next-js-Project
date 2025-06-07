import { notFound } from "next/navigation";
export default function ReviewId({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) > 500) {
    return notFound();
  }
  return (
    <>
      <h1>
        Displaying {params.reviewId} Reviews of Product with ID{" "}
        {params.productId}
      </h1>
    </>
  );
}
