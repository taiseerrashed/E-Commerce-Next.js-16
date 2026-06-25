import { Link } from "@/i18n/navigation";
import { ICategory } from "@/utils/types";
import { useLocale, useTranslations } from "next-intl";

interface ICategoryHeaderProps {
  category: ICategory;
  results: number;
}

const CategoryHeader = ({ category, results }: ICategoryHeaderProps) => {
  const t = useTranslations("CategoriesPage");
  const locale = useLocale();
  const isArabic = locale === "ar";
  
  return (
    <div
      className="relative mb-10 overflow-hidden rounded-[32px] px-6 py-14 text-background shadow-lg sm:px-10 sm:py-16"
      style={{
        backgroundImage: category?.image ? `url(${category.image})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div
        className={`absolute inset-0 ${
          isArabic
            ? "bg-linear-to-l from-btn-color/60 via-black/30 to-transparent"
            : "bg-linear-to-r from-btn-color/60 via-black/30 to-transparent"
        }`}
      />

      <div className="relative max-w-2xl">
        <div className="mb-6 h-1 w-24 rounded-full bg-main-color" />

        <Link
          href="/categories"
          className="inline-flex rounded-full border border-main-color/40 bg-background/10 px-4 py-2 text-sm font-semibold text-background backdrop-blur transition-all duration-300 hover:bg-main-color hover:text-dark-background"
        >
          {t("backToCategories")}
        </Link>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-main-color">
          {t("category")}
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          {category?.name || t("categoryProducts")}
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-gray-200 sm:text-base">
          {t("categoryDescription")}
        </p>

        <div className="mt-6 inline-flex rounded-full border border-main-color/20 bg-main-color/15 px-4 py-2 text-sm font-medium text-main-color backdrop-blur">
          {t("productsFound", { count: results })}
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
