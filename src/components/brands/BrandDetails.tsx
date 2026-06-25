"use client";
import { useGetAllProducts } from "@/store/sever/useGetAllProducts";
import { useGetBrandById } from "@/store/sever/useGetBrandById";
import BrandHeader from "./BrandHeader";
import ProductSkeleton from "../products/ProductSkeleton";
import { Button } from "../ui/button";
import ProductItemCard from "../common/ProductItemCard";

const BrandDetails = ({ id }: { id: string }) => {
  const { data: brandResponse } = useGetBrandById(id);
  const {
    data: productsResponse,
    isLoading,
    isError,
    refetch,
  } = useGetAllProducts({
    brand: id,
  });

  const brand = brandResponse?.data;
  const products = productsResponse?.data || [];
  const results = productsResponse?.results || 0;

  return (
    <section>
      {brand && <BrandHeader brand={brand} results={results} />}

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

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductItemCard key={product._id} product={product} />
        ))}
      </div>
      {products.length === 0 && (
        <p className="text-center text-gray-500">
          No products found for this brand.
        </p>
      )}
    </section>
  );
};

export default BrandDetails;
