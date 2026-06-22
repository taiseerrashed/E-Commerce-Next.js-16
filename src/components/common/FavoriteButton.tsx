"use client";

import { IProduct, TProduct } from "@/utils/types";
import { useFavoritesStore } from "@/store/client/favorites-store";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface IFavoriteButtonProps {
  // product: TProduct;
  product: IProduct;
  className?: string;
}

const FavoriteButton = ({ product, className }: IFavoriteButtonProps) => {
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  const favorite = isFavorite(product._id);

  return (
    <button
      onClick={() => toggleFavorite(product)}
      className={className ? className : "absolute top-3 ltr:right-3 rtl:left-3 z-10"}
    >
      {favorite ? (
        <FaHeart className="text-destructive text-lg" />
      ) : (
        <FaRegHeart className="text-muted-foreground text-lg" />
      )}
    </button>
  );
};

export default FavoriteButton;
