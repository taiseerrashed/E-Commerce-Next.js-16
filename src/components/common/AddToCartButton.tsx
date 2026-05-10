"use client";

import { TProduct } from "@/utils/types";
import { Button } from "../ui/button";
import { useCartStore } from "@/store/client/cart-store";
import { ReactNode } from "react";

interface IAddToCartButtonProps {
  product: TProduct;
  children: ReactNode;
  className?: string;
  quantity?: number;
  reset?: () => void;
}

const AddToCartButton = ({
  product,
  children,
  className,
  quantity = 1,
  reset,
}: IAddToCartButtonProps) => {

  const { addToCart } = useCartStore();
  const handleAddToCart = () => {
    addToCart(product, quantity);
    reset?.();
  };

  return (
    <Button onClick={handleAddToCart} className={className}>
      {children}
    </Button>
  );
};

export default AddToCartButton;
