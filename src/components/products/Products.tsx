"use client";

import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetAllProducts } from "@/store/sever/useGetAllProducts";
import { PRODUCTS_PER_PAGE } from "@/utils/constants";
import ProductSkeleton from "../common/ProductSkeleton";
import ProductItemCard from "../common/ProductItemCard";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useGetAllProducts(currentPage);

  const products = data?.products || [];
  const totalPages = Math.ceil((data?.total || 0) / PRODUCTS_PER_PAGE);

  return (
    <div>
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
        <p className="text-destructive">
          Failed to load products. Please try again later.
        </p>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductItemCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination className="my-10">
        <PaginationContent>
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => Math.max(prev - 1, 1));
              }}
            />
          </PaginationItem>

          {/* First 3 Pages */}
          {Array.from({
            length: Math.min(3, totalPages),
          }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={currentPage === index + 1}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(index + 1);
                }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Dots */}
          {totalPages > 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductsPage;
