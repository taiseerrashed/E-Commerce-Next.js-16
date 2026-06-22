"use client";

import Image from "next/image";
import { useState } from "react";
import { useGetProductDetails } from "@/store/sever/useGetProductDetails";
import { FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";
import RatingStars from "../common/RatingStars";
import AddToCartButton from "../common/AddToCartButton";
import { Button } from "../ui/button";
import FavoriteButton from "../common/FavoriteButton";
import { useTranslations } from "next-intl";

const ProductDetails = ({ id }: { id: string }) => {
  const { data, isLoading, isError } = useGetProductDetails(id);
  const product = data?.data; // Access the product details from the response
  
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const t = useTranslations("ProductsPage");

  if (isLoading) {
    return (
      <div className="border rounded-3xl p-6 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-200 h-100 rounded-2xl" />
          <div className="space-y-4">
            <div className="bg-gray-200 h-6 w-24 rounded" />
            <div className="bg-gray-200 h-10 w-72 rounded" />
            <div className="bg-gray-200 h-24 w-full rounded" />
            <div className="bg-gray-200 h-8 w-32 rounded" />
            <div className="bg-gray-200 h-12 w-full rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return <p className="text-red-500">Failed to load product details.</p>;
  }

  return (
    <section className="border rounded-3xl p-6 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT SIDE */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative w-full h-100 border rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={product?.images[selectedImage]}
              alt={product?.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Thumbnails */}
          <div className="flex items-center gap-3">
            {product?.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 border rounded-lg overflow-hidden transition ${
                  selectedImage === index
                    ? "border-btn-color"
                    : "border-gray-200"
                }`}
              >
                <Image
                  src={img}
                  alt={product?.title}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          {/* Category */}
          <span className="uppercase text-xs tracking-[3px] text-btn-color font-semibold">
            {product?.category.name}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-bold">{product?.title}</h1>

          {/* Description */}
          <p className="text-muted-foreground leading-8">{product?.description}</p>

          {/* Price */}
          <h2 className="text-4xl font-bold text-btn-color">${product?.price}</h2>

          <div className="flex items-center justify-between">
            {/* Rating */}
            <RatingStars rating={product?.ratingsAverage} />
            <FavoriteButton
              product={product}
              className="transition hover:scale-110"
            />
          </div>

          {/* Stock */}
          <p className="text-sm font-medium text-btn-color">
            {t("In Stock")}: {product?.quantity}
          </p>

          <div className="flex items-center gap-4">
            <Button
              disabled={quantity === 1}
              variant={"outline"}
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="w-10 h-10 border rounded-lg"
            >
              <FiMinus />
            </Button>

            <span className="text-xl font-semibold text-btn-color">
              {quantity}
            </span>

            <Button
              variant={"outline"}
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-10 h-10 border rounded-lg"
            >
              <FiPlus />
            </Button>
          </div>

          {/* Add To Cart */}
          <AddToCartButton
            product={product}
            quantity={quantity}
            reset={() => setQuantity(1)}
            className="w-full h-12 text-lg flex items-center justify-center gap-2 hover:opacity-85 transition"
          >
            <FiShoppingBag />
            {t("Add to Cart")}
          </AddToCartButton>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
