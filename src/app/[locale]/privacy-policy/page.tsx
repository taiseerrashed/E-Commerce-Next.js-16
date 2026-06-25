import InfoPage from "@/components/common/InfoPage";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("PrivacyPolicy");
  return (
    <InfoPage
      title={t("title")}
      description={t("description")}
    >
      <p>{t("paragraph1")}</p>
      <p>{t("paragraph2")}</p>
      <p>{t("paragraph3")}</p>
    </InfoPage>
  );
};

export default page;
