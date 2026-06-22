"use client";

import { useGetBrands } from "@/store/sever/useGetBrands";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const BrandsData = () => {
  const { data, isLoading, isError } = useGetBrands();
  const brands = data?.data.slice(0, 6) || [];  

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
      {brands.map((brand) => (
        <Link href={brand._id} key={brand._id} className="border rounded-2xl shadow-xl p-6 flex items-center justify-center hover:border-btn-color hover:-translate-y-1 transition">
          <Image
            src={brand.image}
            alt={brand.name}
            width={100}
            height={100}
            className="h-20 object-contain"
          />
        </Link>
      ))}
    </div>
  );
};

export default BrandsData;
