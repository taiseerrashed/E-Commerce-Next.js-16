import BrandDetails from "@/components/brands/BrandDetails";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <BrandDetails id={id} />
  )
}

export default page