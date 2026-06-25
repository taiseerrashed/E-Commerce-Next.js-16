import { Link } from "@/i18n/navigation";
import { IBrand } from "@/utils/types";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface IBrandHeaderProps {
  brand: IBrand;
  results: number;
}

const BrandHeader = ({ brand, results }: IBrandHeaderProps) => {
    const t = useTranslations("BrandsPage");

  return (
    <div className="mb-10 overflow-hidden rounded-[32px] border border-main-color/20 bg-linear-to-br from-secondary/20 via-background to-main-color/10 p-6 shadow-sm sm:p-8">
      <div className="mb-6 h-1 w-24 rounded-full bg-main-color" />

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <Link
            href="/brands"
            className="inline-flex rounded-full border border-main-color/30 bg-background px-4 py-2 text-sm font-semibold text-btn-color transition-all duration-300 hover:bg-btn-color hover:text-white"
          >
            {t("backToBrands")}
          </Link>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-main-color">
            {t("brand")}
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-dark-background sm:text-5xl">
            {brand?.name || t("brandProducts")}
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
            {t("brandDescription")}
          </p>

          <div className="mt-6 inline-flex rounded-full bg-main-color/15 px-4 py-2 text-sm font-medium text-btn-color">
           {t("productsFound", { count: results })}
          </div>
        </div>

        <div className="flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-main-color/20 bg-white p-4 shadow-sm transition-transform duration-300 hover:scale-105 sm:h-44 sm:w-44">
          {brand?.image ? (
            <Image
              src={brand.image}
              alt={brand.name}
              width={140}
              height={140}
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="text-5xl font-black text-main-color/40">
              {brand?.name?.charAt(0) || "B"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;