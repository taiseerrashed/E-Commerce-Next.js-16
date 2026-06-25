import CategoryDetails from "@/components/categories/CategoryDetails";

const page = async({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  
  return (
    <CategoryDetails id={id} />
  )
}

export default page