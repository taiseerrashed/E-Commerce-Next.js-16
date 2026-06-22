import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct } from "@/utils/types";

type TCartItem = IProduct & {
  quantity: number;
};

interface ICartStore {
  cart: TCartItem[];
  addToCart: (product: IProduct, quantity: number) => void;
  removeFromCart: (_id: string) => void;
  increaseQuantity: (_id: string) => void;
  decreaseQuantity: (_id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<ICartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product, quantity) =>
        set((state) => {
          const existing = state.cart.find((item) => item._id === product._id);

          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item._id === product._id
                  ? {
                      ...item,
                      quantity: item.quantity + quantity,
                    }
                  : item,
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity,
              },
            ],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item._id !== id),
        })),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item._id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item._id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cartItems", // name of the item in storage
    },
  ),
);
