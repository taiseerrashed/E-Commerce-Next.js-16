"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaHeart } from "react-icons/fa";
import { FiShoppingBag, FiTrash2 } from "react-icons/fi";
import AddToCartButton from "@/components/common/AddToCartButton";
import { useFavoritesStore } from "@/store/client/favorites-store";
import useHydration from "@/store/client/useHydration";
import FavoritesSkeleton from "./FavoritesSkeleton";
import { useTranslations } from "next-intl";

const Favorites = () => {
  const { favorites, removeFromFavorites, clearFavorites } =  useFavoritesStore();
  const t = useTranslations("FavoritesPage");
  const hydrated = useHydration();

  if (!hydrated) {
    return <FavoritesSkeleton />;
  }

  return (
    <section className="container space-y-8">
      {favorites.length === 0 ? (
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-destructive/10 p-6 rounded-full">
              <FaHeart className="text-6xl text-destructive" />
            </div>
          </div>

          <h2 className="text-3xl font-bold">{t("emptyTitle")}</h2>

          <p className="text-muted-foreground">
            {t("emptyDescription")}
          </p>
        </div>
      ) : (
        <>
          {/* Title */}
          <div className="flex items-center justify-center gap-3">
            <FaHeart className="text-destructive text-3xl" />

            <h2 className="text-4xl font-bold">{t("title")}</h2>
          </div>

          {/* Favorite Items */}
          <Card className="p-6 shadow-xl rounded-3xl space-y-6">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-b pb-6 last:border-none"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <Link href={`/products/${item.id}`}>
                    <div className="relative w-24 h-24 border rounded-2xl overflow-hidden bg-background shadow-lg">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </Link>

                  <div className="space-y-1">
                    <h2 className="font-semibold text-xl line-clamp-1">
                      {item.title}
                    </h2>

                    <p className="text-btn-color font-bold text-lg">
                      ${item.price}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 self-end lg:self-auto">
                  {/* Add To Cart */}
                  <AddToCartButton
                    product={item}
                    className="flex items-center gap-2"
                  >
                    <FiShoppingBag />
                    {t("addToCart")}
                  </AddToCartButton>

                  {/* Remove */}
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeFromFavorites(item.id)}
                  >
                    <FiTrash2 />
                  </Button>
                </div>
              </div>
            ))}
          </Card>

          {/* Footer */}
          <div className="flex justify-end">
            <Button variant="outline" onClick={clearFavorites}>
              {t("clear")}
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default Favorites;
