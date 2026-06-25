import InfoPage from "@/components/common/InfoPage";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("HelpCenter");

  return (
    <InfoPage
      title={t("title")}
      description={t("description")}
    >
      <div className="space-y-6">
        <div>
          <h2 className="font-semibold">{t("question1")}</h2>
          <p>{t("answer1")}</p>
        </div>

        <div>
          <h2 className="font-semibold">{t("question2")}</h2>
          <p>{t("answer2")}</p>
        </div>

        <div>
          <h2 className="font-semibold">{t("question3")}</h2>
          <p>{t("answer3")}</p>
        </div>
      </div>
    </InfoPage>
  );
};

export default page;