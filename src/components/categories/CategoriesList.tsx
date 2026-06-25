"use client";

import { useGetCategories } from "@/store/sever/useGetCategories";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import CategoriesSkeleton from "./CategoriesSkeleton";

const CategoriesList = () => {
  const { data, isLoading, isError, refetch } = useGetCategories();

  if (isLoading) {
    return <CategoriesSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-destructive font-medium">
          Failed to load categories
        </p>

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
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data?.data.map((category) => (
        <Link
          key={category._id}
          href={`/categories/${category._id}`}
          className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:border-btn-color hover:shadow-lg"
        >
          <div className="relative aspect-square">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          <div className="p-4 text-center">
            <h2 className="font-semibold">{category.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesList;
