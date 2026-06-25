import ProductsPage from "@/components/products/Products";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("ProductsPage");

  return (
    <section className="container">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">{t("title")}</h2>
        <p className="text-gray-500 mt-2">{t("subtitle")}</p>
      </div>
      <ProductsPage />
    </section>
  );
};

export default page;
