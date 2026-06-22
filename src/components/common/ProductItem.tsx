import Image from "next/image";
import { IProduct } from "@/utils/types";
import { Link } from "@/i18n/navigation";
import { IoAdd } from "react-icons/io5";
import { useTranslations } from "next-intl";
import RatingStars from "./RatingStars";
import AddToCartButton from "./AddToCartButton";
import FavoriteButton from "./FavoriteButton";

interface IProductItemProps {
  product: IProduct;
  isFeatured?: boolean;
}

const ProductItem = ({ product, isFeatured = false }: IProductItemProps) => {
  const t = useTranslations("HomePage");

  return (
    <div className="bg-white relative rounded-2xl border p-4 space-y-3 bover:border hover:border-btn-color hover:shadow-xl hover:-translate-y-1 transition">
      {/* discount */}
      {/* {product.discountPercentage > 0 && (
        <span className="absolute top-3 ltr:left-3 rtl:right-3 z-10 text-xs text-secondary bg-btn-color font-semibold px-2 py-1 rounded-md">
          {Math.round(product.discountPercentage)}% {t("OFF")}
        </span>
      )} */}
      <span className="absolute top-3 ltr:left-3 rtl:right-3 z-10 text-xs text-secondary bg-btn-color font-semibold px-2 py-1 rounded-md">
        {product.brand.name}
      </span>
      {/* Favorite */}
      <FavoriteButton product={product} />

      {/* Image */}
      <Link href={`/products/${product._id}`} className="flex justify-center">
        <Image
          src={product.imageCover}
          alt={product.title}
          width={150}
          height={150}
          className="object-contain h-45"
        />
      </Link>

      {/* Featured badge */}
      {isFeatured && (
        <p className="text-xs text-btn-color font-semibold flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-gem"
            aria-hidden="true"
          >
            <path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path>
            <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path>
            <path d="M2 9h20"></path>
          </svg>{" "}
          {t("FEATURED")}
        </p>
      )}

      {/* Title */}
      <h3 className="font-semibold text-lg line-clamp-1">{product.title}</h3>

      {/* Price */}
      <p className="text-btn-color font-bold">${product.price}</p>

      {/* Rating + Cart */}
      <div className="flex items-center justify-between">
        {/* Stars */}
        <RatingStars rating={product.ratingsAverage} />
        {/* Add to cart */}
        <AddToCartButton
          product={product}
          className="bg-main-color hover:bg-btn-color text-background p-2 transition"
        >
          <IoAdd size={18} />
        </AddToCartButton>
      </div>
    </div>
  );
};

export default ProductItem;
