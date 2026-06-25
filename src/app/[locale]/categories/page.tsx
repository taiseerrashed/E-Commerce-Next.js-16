import CategoriesList from "@/components/categories/CategoriesList";
import PageHeader from "@/components/common/PageHeader";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("CategoriesPage");
  return (
    <section className="container">
      <PageHeader
        label={t("label")}
        title={t("title")}
        description={t("description")}
      />

      <CategoriesList />
    </section>
  );
};

export default page;
