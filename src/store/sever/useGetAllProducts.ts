import { useQuery } from "@tanstack/react-query";
import { TProductsResponse } from "@/utils/types";
import api from "@/lib/axios";

const getAllProducts = async (page?: number): Promise<TProductsResponse> => {
  const { data } = await api.get(`/api/v1/products?page=${page}&limit=12`);
  return data;
};

export const useGetAllProducts = (page?: number) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: () => getAllProducts(page),
  });
};