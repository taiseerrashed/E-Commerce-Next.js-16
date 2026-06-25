import InfoPage from "@/components/common/InfoPage";
import { getTranslations } from "next-intl/server";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const page = async () => {
  const t = await getTranslations("Contact");
  return (
    <InfoPage
      title={t("title")}
      description={t("description")}
    >
      <div className="space-y-4">
        <p className="flex items-center gap-2">
          <FaWhatsapp />
          01115603479
        </p>

        <p className="flex items-center gap-2">
          <MdEmail />
          taiseerrashed@gmail.com
        </p>

        <p className="flex items-center gap-2">
          <FaMapMarkerAlt />
          {t("location")}
        </p>
      </div>
    </InfoPage>
  );
};

export default page;
