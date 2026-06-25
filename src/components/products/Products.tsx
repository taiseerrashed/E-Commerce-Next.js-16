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
import ProductSkeleton from "./ProductSkeleton";
import ProductItemCard from "../common/ProductItemCard";
import { Button } from "../ui/button";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, refetch } = useGetAllProducts(currentPage);

  const products = data?.data || [];
  const totalPages = data?.metadata.numberOfPages || 1;

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

      {/* Pagination */}
      <Pagination className="mt-10">
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
