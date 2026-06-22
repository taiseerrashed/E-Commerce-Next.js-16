
const page = async({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = await params;
  console.log(name);
  

  return (
    <div>page</div>
  )
}

export default page