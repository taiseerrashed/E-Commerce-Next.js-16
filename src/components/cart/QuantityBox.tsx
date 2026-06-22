"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/client/cart-store";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { IProduct } from "@/utils/types";
import { useTranslations } from "next-intl";

type TCartItem = IProduct & {
  quantity: number;
};

const QuantityBox = ({ item }: { item: TCartItem }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore();
  const t = useTranslations("CartPage");

  return (
    <div className="flex items-center gap-4 self-end lg:self-auto">
      {/* Quantity */}
      <div className="flex rtl:flex-row-reverse items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          disabled={item.quantity === 1}
          onClick={() => decreaseQuantity(item._id)}
        >
          <FiMinus />
        </Button>

        <span className="font-bold text-lg min-w-5 text-center">
          {item.quantity}
        </span>

        <Button
          variant="outline"
          size="icon"
          onClick={() => increaseQuantity(item._id)}
        >
          <FiPlus />
        </Button>
      </div>

      {/* Remove */}
      <Button
        variant="destructive"
        className="flex items-center gap-2"
        onClick={() => removeFromCart(item._id)}
      >
        <FiTrash2 />
        {t("Remove")}
      </Button>
    </div>
  );
};

export default QuantityBox;
