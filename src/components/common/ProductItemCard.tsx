import Image from "next/image";
import { TProduct } from "@/utils/types";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { FiShoppingBag } from "react-icons/fi";
import RatingStars from "./RatingStars";
import AddToCartButton from "./AddToCartButton";
import FavoriteButton from "./FavoriteButton";

interface IProductItemProps {
  product: TProduct;
}
const ProductItemCard = ({ product }: IProductItemProps) => {
  const t = useTranslations("ProductsPage");

  return (
    <Card className="hover:border hover:border-btn-color hover:shadow-xl hover:-translate-y-1 transition">
      {/* Favorite */}
      <FavoriteButton product={product} />

      <Link href={`/products/${product.id}`} className="space-y-4">
        {/* Image */}
        <CardHeader className="flex justify-center">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={150}
            height={150}
            className="object-contain h-45"
          />
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            {/* Title */}
            <h3 className="font-medium text-lg line-clamp-1">
              {product.title}
            </h3>
            {/* Price */}
            <p className="text-btn-color font-bold">${product.price}</p>
          </div>

          <div>
            {/* Brand */}
            <p className="text-sm font-thin">
              {t("Brand")} :{" "}
              <span className="font-medium">{product.brand}</span>
            </p>
            {/* Category */}
            <p className="text-sm font-thin">
              {t("Category")} :{" "}
              <span className="font-medium">{product.category}</span>
            </p>
            {/* Stock */}
            <p className="font-bold text-green-800">
              {t("In Stock")} : <span>{product.stock}</span>
            </p>
            {/* Stars */}
            <RatingStars rating={product.rating} />
          </div>
        </CardContent>
      </Link>

      <CardFooter>
        {/* Add to cart */}
        <AddToCartButton
          product={product}
          className="h-10 w-full transition hover:opacity-85 flex items-center justify-center gap-2"
        >
          <FiShoppingBag />
          {t("Quick Add To Cart")}
        </AddToCartButton>
      </CardFooter>
    </Card>
  );
};

export default ProductItemCard;
