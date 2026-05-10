import Image from "next/image";
import { TProduct } from "@/utils/types";
import QuantityBox from "./QuantityBox";

type TCartItem = TProduct & {
  quantity: number;
};

const CartItem = ({ item }: { item: TCartItem }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-b pb-6 last:border-none">
      {/* Product Info */}
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24 border rounded-2xl overflow-hidden bg-background shadow-lg">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-contain p-2"
          />
        </div>

        <div className="space-y-1">
          <h2 className="font-semibold text-xl line-clamp-1">{item.title}</h2>

          <p className="text-btn-color font-bold text-lg">
            ${(item.price * item.quantity).toFixed(2)}
          </p>

          <p className="text-sm text-muted-foreground">{item.category}</p>
        </div>
      </div>

      <QuantityBox item={item} />
    </div>
  );
};

export default CartItem;
