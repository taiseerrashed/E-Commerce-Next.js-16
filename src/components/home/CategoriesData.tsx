"use client";

import { useGetCategories } from "@/store/sever/useGetCategories";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

const CategoriesData = () => {
  const { data, isLoading, isError } = useGetCategories();
  const categories = data?.data.slice(0, 4) || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      
      {categories?.map((cat) => (
        <Link href={`/categories/${cat.name}`}
          key={cat.slug}
          className="border rounded-2xl shadow-xl p-6 space-y-3 hover:border-btn-color hover:-translate-y-1 transition block"
        >
          {/* Badge */}
          <span className="text-xs text-btn-color font-semibold uppercase flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles"
              aria-hidden="true"
            >
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
              <path d="M20 2v4"></path>
              <path d="M22 4h-4"></path>
              <circle cx="4" cy="20" r="2"></circle>
            </svg>{" "}
            {/* {t("featuredCategory")} */}
            {cat.name}
          </span>

          {/* Title */}
          {/* <h3 className="text-xl font-semibold">{cat.name}</h3> */}

          {/* Description */}
          {/* <p className="text-sm text-muted-foreground">{cat.description[locale]}</p> */}

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={cat.image}
              alt={cat.name}
              width={150}
              height={150}
              className="object-contain h-30"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesData;
