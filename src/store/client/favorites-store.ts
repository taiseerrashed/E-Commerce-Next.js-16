import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TProduct } from "@/utils/types";

interface IFavoritesStore {
  favorites: TProduct[];
  addToFavorites: (product: TProduct) => void;
  removeFromFavorites: (id: number) => void;
  toggleFavorite: (product: TProduct) => void;
  clearFavorites: () => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoritesStore = create<IFavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addToFavorites: (product) =>
        set((state) => ({
          favorites: [...state.favorites, product],
        })),

      removeFromFavorites: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== id),
        })),

      toggleFavorite: (product) => {
        const exists = get().favorites.some((item) => item.id === product.id);

        if (exists) {
          get().removeFromFavorites(product.id);
        } else {
          get().addToFavorites(product);
        }
      },

      clearFavorites: () => set({ favorites: [] }),

      isFavorite: (id) => {
        return get().favorites.some((item) => item.id === id);
      },
    }),
    {
      name: "favoriteItems",
    },
  ),
);
