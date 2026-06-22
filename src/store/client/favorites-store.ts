import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct } from "@/utils/types";

interface IFavoritesStore {
  favorites: IProduct[];
  addToFavorites: (product: IProduct) => void;
  removeFromFavorites: (_id: string) => void;
  toggleFavorite: (product: IProduct) => void;
  clearFavorites: () => void;
  isFavorite: (_id: string) => boolean;
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
          favorites: state.favorites.filter((item) => item._id !== id),
        })),

      toggleFavorite: (product) => {
        const exists = get().favorites.some((item) => item._id === product._id);

        if (exists) {
          get().removeFromFavorites(product._id);
        } else {
          get().addToFavorites(product);
        }
      },

      clearFavorites: () => set({ favorites: [] }),

      isFavorite: (id) => {
        return get().favorites.some((item) => item._id === id);
      },
    }),
    {
      name: "favoriteItems",
    },
  ),
);
