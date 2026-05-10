"use client";

import { useGetFeaturedProducts } from "@/store/sever/useGetFeaturedProducts";
import ProductSkeleton from "../common/ProductSkeleton";
import ProductItem from "../common/ProductItem";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import SectionHeader from "../common/SectionHeader";

const FeaturedProducts = () => {
  const t = useTranslations("HomePage");
  const { data, isLoading, isError } = useGetFeaturedProducts();

  // if(isError) {
  //   throw new Error("Failed to fetch featured products");
  // }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <SectionHeader title={t("featuredTitle")} subtitle={t("featuredSubtitle")} />
        <Link
          href={"/products"}
          className="text-btn-color text-sm font-semibold"
        >
          {t("View All")}
        </Link>
      </div>
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="w-full max-w-xs">
              <ProductSkeleton />
            </div>
          ))}
        </div>
      )}
      {!isLoading && isError && (
        <p className="text-destructive">
          Failed to load featured products. Please try again later.
        </p>
      )}
      {!isLoading && data?.products && (
        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-max pb-4">
            {data.products.map((product) => (
              <div key={product.id} className="w-65 shrink-0">
                <ProductItem product={product} isFeatured={true} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
