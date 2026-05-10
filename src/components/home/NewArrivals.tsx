"use client";

import ProductSkeleton from "../common/ProductSkeleton";
import ProductItem from "../common/ProductItem";
import { useTranslations } from "next-intl";
import { useGetNewArrivals } from "@/store/sever/useGetNewArrivals";
import SectionHeader from "../common/SectionHeader";

const NewArrivals = () => {
  const t = useTranslations("HomePage");
  const { data, isLoading, isError } = useGetNewArrivals();

  return (
    <section className="space-y-6">
      <SectionHeader
        title={t("newArrivalsTitle")}
        subtitle={t("newArrivalsSubtitle")}
      />
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
          Failed to load new arrivals. Please try again later.
        </p>
      )}
      {!isLoading && data?.products && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default NewArrivals;
