"use client";

import { Link } from '@/i18n/navigation';
import { FaCartPlus } from "react-icons/fa";
import { useCartStore } from "@/store/client/cart-store";

const CartIcon = () => {
  const { cart } = useCartStore();

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link href="/cart" className="relative">
      <FaCartPlus className="text-2xl text-main-color" />

      {totalQuantity > 0 && (
        <span className="absolute -top-3 -right-3 bg-primary text-secondary rounded-full w-6 h-6 flex items-center justify-center text-xs">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
