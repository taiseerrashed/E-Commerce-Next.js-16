import { getTranslations } from "next-intl/server";
import SectionHeader from "../common/SectionHeader";
import BrandsData from "./BrandsData";
import { Link } from "@/i18n/navigation";

const Brands = async () => {
  const t = await getTranslations("HomePage");
  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex justify-between">
        <SectionHeader title={t("brandsTitle")} subtitle={t("brandsSubtitle")}/>
        <Link href={"/brands"} className="text-btn-color text-sm font-semibold shrink-0">
          {t("View All")}
        </Link>
      </div>

      {/* Cards */}
      <BrandsData />
    </section>
  );
};

export default Brands;
