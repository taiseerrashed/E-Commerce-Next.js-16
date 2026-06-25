import Link from "next/link";
import { useTranslations } from "next-intl";

const OfferBanner = () => {
  const t = useTranslations("OfferBanner");

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] bg-dark-background px-6 py-12 text-background sm:px-10 lg:px-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex rounded-full bg-btn-color px-4 py-2 text-sm font-semibold text-background">
                {t("badge")}
              </span>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl text-secondary">
                {t("title")}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 sm:text-base text-secondary-foreground">
                {t("description")}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/products"
                className="rounded-full bg-main-color px-7 py-3 text-center text-sm font-semibold text-background transition hover:bg-background hover:text-gray-950"
              >
                {t("shopOffers")}
              </Link>

              <Link
                href="/categories"
                className="rounded-full border border-background/20 px-7 py-3 text-center text-sm font-semibold text-background transition hover:bg-background hover:text-gray-950"
              >
                {t("browseCategories")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;