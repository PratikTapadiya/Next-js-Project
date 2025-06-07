export default function ProductId({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details of Product with ID {params.productId}</h1>;
}
