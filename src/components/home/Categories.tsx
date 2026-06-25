import { getTranslations } from "next-intl/server";
import SectionHeader from "../common/SectionHeader";
import CategoriesData from "./CategoriesData";
import { Link } from "@/i18n/navigation";

const Categories = async () => {
  const t = await getTranslations("HomePage");
  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex justify-between">
        <SectionHeader title={t("categoryTitle")} subtitle={t("categorySubtitle")}/>
        <Link
          href={"/categories"}
          className="text-btn-color text-sm font-semibold shrink-0"
        >
          {t("View All")}
        </Link>
      </div>

      {/* Cards */}
      <CategoriesData />
    </section>
  );
};

export default Categories;
