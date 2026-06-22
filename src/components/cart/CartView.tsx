import { FiShoppingBag } from "react-icons/fi";
import CartActions from "./CartActions";
import { useTranslations } from "next-intl";

const CartView = () => {
  const t = useTranslations("CartPage")
  return (
    <section className="container space-y-8">
      {/* Title */}
      <div className="flex items-center justify-center gap-3">
        <FiShoppingBag className="text-btn-color text-3xl" />
        <h2 className="text-4xl font-bold">{t("title")}</h2>
      </div>

      <CartActions />
    </section>
  );
};

export default CartView;