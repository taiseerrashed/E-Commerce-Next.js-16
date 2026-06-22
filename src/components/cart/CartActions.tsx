"use client";

import { useCartStore } from "@/store/client/cart-store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FiShoppingBag } from "react-icons/fi";
import CartItem from "./CartItem";
import CartSkeleton from "./CartSkeleton";
import { useTranslations } from "next-intl";
import useHydration from "@/store/client/useHydration";
import { Link } from "@/i18n/navigation";

const CartActions = () => {
  const { cart, clearCart } = useCartStore();
  const t = useTranslations("CartPage");
  const hydrated = useHydration();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (!hydrated) {
    return <CartSkeleton />;
  }

  if (cart.length === 0) {
    return (
      <div className="text-center space-y-4 py-20">
        <div className="flex justify-center">
          <div className="bg-btn-color/10 p-6 rounded-full">
            <FiShoppingBag className="text-6xl text-btn-color" />
          </div>
        </div>
        <h2 className="text-3xl font-bold">{t("emptyTitle")}</h2>
        <p className="text-muted-foreground">{t("emptydesc")}</p>
      </div>
    );
  }

  return (
    <>
      {/* Cart Items */}
      <Card className="p-6 shadow-xl rounded-3xl space-y-6">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Card>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Button
          variant="outline"
          onClick={clearCart}
          className="w-full md:w-fit"
        >
          {t("Clear Cart")}
        </Button>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-medium">{t("Total")}:</span>

          <span className="text-3xl font-bold text-btn-color">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <Link
          href="/checkout"
          className="rounded-full px-6 py-3 text-sm font-semibold bg-btn-color text-background hover:bg-btn-color/80 transition"
        >
          {t("Checkout")}
        </Link>

        <Link
          href="/products"
          className="rounded-full px-6 py-3 text-sm font-semibold bg-secondary hover:bg-secondary-foreground transition"
        >
          {t("Continue Shopping")}
        </Link>
      </div>
    </>
  );
};

export default CartActions;
