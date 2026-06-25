"use client";

import { useGetAllProducts } from "@/store/sever/useGetAllProducts";
import { useGetCategoryById } from "@/store/sever/useGetCategoryById";
import CategoryHeader from "./CategoryHeader";
import ProductItemCard from "../common/ProductItemCard";
import ProductSkeleton from "../products/ProductSkeleton";
import { Button } from "../ui/button";

const CategoryDetails = ({ id }: { id: string }) => {
  const { data: categoryResponse } = useGetCategoryById(id);

  const {
    data: productsResponse,
    isLoading,
    isError,
    refetch,
  } = useGetAllProducts({
    category: id,
  });

  const category = categoryResponse?.data;
  const products = productsResponse?.data || [];
  const results = productsResponse?.results || 0;

  console.log(products);
  
  return (
    <section>
        {category && <CategoryHeader category={category} results={results} />}

        {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-full max-w-xs">
              <ProductSkeleton />
            </div>
          ))}
        </div>
      )}
      {!isLoading && isError && (
        <div className="flex flex-col items-center justify-center py-10">
          <p className="text-destructive">
            Failed to load products. Please try again later.
          </p>
          <Button onClick={() => refetch()} className="mt-2 text-btn-color">
            Try Again
          </Button>
        </div>
      )}

        <div className="grid grid-cols-1 items-stretch gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductItemCard key={product._id} product={product} />
          ))}
        </div>

        {products.length === 0 && <p className="text-center text-gray-500">No products found in this category.</p>}
    </section>
  );
};

export default CategoryDetails;
