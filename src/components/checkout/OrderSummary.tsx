"use client";
import { useCartStore } from "@/store/client/cart-store";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

const OrderSummary = () => {
  const { cart } = useCartStore();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <Card className="p-6 space-y-4 sticky top-24">
      <h2 className="text-2xl font-bold">Order Summary</h2>

      {cart.map((item) => (
        <div key={item._id} className="flex justify-between">
          <span>
            {item.title} x {item.quantity}
          </span>

          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}

      <Separator />

      <div className="flex justify-between font-bold text-xl">
        <span>Total</span>

        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </Card>
  );
};

export default OrderSummary;
