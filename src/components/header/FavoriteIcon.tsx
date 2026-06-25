"use client";

import { Link } from "@/i18n/navigation";
import { useFavoritesStore } from "@/store/client/favorites-store";
import { FaHeart } from "react-icons/fa";

export const FavoriteIcon = () => {
  const { favorites } = useFavoritesStore();

  return (
    <Link href="/wishlist" className="relative">
      <FaHeart className="text-xl text-main-color" />

      {favorites.length > 0 && (
        <span className="absolute -top-3 -right-3 bg-primary text-secondary rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {favorites.length}
        </span>
      )}
    </Link>
  );
};
