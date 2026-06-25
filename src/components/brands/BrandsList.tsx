"use client";

import { useGetBrands } from "@/store/sever/useGetBrands";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import BrandsSkeleton from "./BrandsSkeleton";

const BrandsList = () => {
  const { data, isLoading, isError, refetch } = useGetBrands();

  if (isLoading) {
    return <BrandsSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-destructive font-medium">Failed to load brands</p>

        <button
          onClick={() => refetch()}
          className="mt-3 text-btn-color hover:underline"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {data?.data.map((brand) => (
        <Link
          key={brand._id}
          href={`/brands/${brand._id}`}
          className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-btn-color hover:shadow-lg"
        >
          <div className="flex h-24 items-center justify-center">
            <Image
              src={brand.image}
              alt={brand.name}
              width={120}
              height={120}
              className="max-h-20 w-auto object-contain transition group-hover:scale-105"
            />
          </div>

          <h2 className="mt-4 text-center text-sm font-medium">{brand.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default BrandsList;
