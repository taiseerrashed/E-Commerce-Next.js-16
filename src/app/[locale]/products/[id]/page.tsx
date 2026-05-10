import ProductDetails from "@/components/products/ProductDetails";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <ProductDetails id={Number(id)}/>;
};

export default page;
