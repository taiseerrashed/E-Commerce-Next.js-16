import { useQuery } from "@tanstack/react-query";
import { TProductsResponse } from "@/utils/types";
import api from "@/lib/axios";

interface IParams {
  page?: number;
  limit?: number;
  brand?: string;
  category?: string;
  search?: string;
  sort?: string;
}

const getAllProducts = async (params?: IParams): Promise<TProductsResponse> => {
  const { data } = await api.get("/api/v1/products", { params, });
  return data;
};

export const useGetAllProducts = (params?: IParams) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => getAllProducts(params),
  });
};