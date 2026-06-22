import { getTranslations } from "next-intl/server";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import BrandsData from "./BrandsData";


const Brands = async() => {
  const t = await getTranslations("HomePage");
  return (
    <section className="space-y-6 my-16">
      {/* Header */}
      <SectionHeader title={t("brandsTitle")} subtitle={t("brandsSubtitle")} />

      {/* Cards */}
      <BrandsData />
      
    </section>
  );
};

export default Brands;
