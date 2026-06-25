import InfoPage from "@/components/common/InfoPage";
import { getTranslations } from "next-intl/server";

const page = async () => {
    const t = await getTranslations("ShippingInfo");
  return (
    <InfoPage
      title={t("title")}
      description={t("description")}
    >
      <ul className="list-disc space-y-2 pl-5">
        <li>{t("item1")}</li>
        <li>{t("item2")}</li>
        <li>{t("item3")}</li>
        <li>{t("item4")}</li>
      </ul>
    </InfoPage>
  );
};

export default page;
