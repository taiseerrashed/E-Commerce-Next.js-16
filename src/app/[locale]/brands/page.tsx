import BrandsList from "@/components/brands/BrandsList";
import PageHeader from "@/components/common/PageHeader";
import { getTranslations } from "next-intl/server";

const page = async () => {
    const t = await getTranslations("BrandsPage");

  return (
    <section className="container">
      <PageHeader
        label={t("label")}
        title={t("title")}
        description={t("description")}
      />
      <BrandsList />
    </section>
  );
};

export default page;
