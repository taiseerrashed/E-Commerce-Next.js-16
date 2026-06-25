"use client";

import { useGetCategories } from "@/store/sever/useGetCategories";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import CategoriesSkeleton from "../categories/CategoriesSkeleton";
import { Button } from "../ui/button";

const CategoriesData = () => {
  const { data, isLoading, isError, refetch } = useGetCategories();
  const categories = data?.data.slice(0, 6) || [];

  if (isLoading) {
    return <CategoriesSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <p className="text-destructive">Failed to load categories</p>

        <Button onClick={() => refetch()} className="mt-2">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
      {categories?.map((cat) => (
        <Link
          href={`/categories/${cat._id}`}
          key={cat._id}
          className="group flex flex-col items-center gap-3"
        >
          <div className="flex h-30 w-30 overflow-hidden items-center justify-center rounded-full border bg-muted/30 transition group-hover:border-btn-color">
            <Image
              src={cat.image}
              alt={cat.name}
              width={70}
              height={70}
              className="object-contain transition group-hover:scale-105"
            />
          </div>

          <span className="text-center text-sm font-medium">{cat.name}</span>
        </Link>
        // <Link
        //   href={`/categories/${cat.name}`}
        //   key={cat.slug}
        //   className="border rounded-2xl shadow-xl p-6 space-y-3 hover:border-btn-color hover:-translate-y-1 transition block"
        // >
        //   {/* Badge */}
        //   <span className="text-xs text-btn-color font-semibold uppercase flex items-center gap-1">
        //     <svg
        //       xmlns="http://www.w3.org/2000/svg"
        //       width="12"
        //       height="12"
        //       viewBox="0 0 24 24"
        //       fill="none"
        //       stroke="currentColor"
        //       strokeWidth="2"
        //       strokeLinecap="round"
        //       strokeLinejoin="round"
        //       className="lucide lucide-sparkles"
        //       aria-hidden="true"
        //     >
        //       <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
        //       <path d="M20 2v4"></path>
        //       <path d="M22 4h-4"></path>
        //       <circle cx="4" cy="20" r="2"></circle>
        //     </svg>{" "}
        //     {cat.name}
        //   </span>

        //   {/* Image */}
        //   <div className="flex justify-center">
        //     <Image
        //       src={cat.image}
        //       alt={cat.name}
        //       width={150}
        //       height={150}
        //       className="object-contain h-30"
        //     />
        //   </div>
        // </Link>
      ))}
    </div>
  );
};

export default CategoriesData;
