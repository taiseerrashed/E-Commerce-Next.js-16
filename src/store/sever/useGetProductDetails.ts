import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "@/utils/types";

interface IProductResponse {
  data: IProduct;
}

const getProductDetails = async (id: string): Promise<IProductResponse> => {
  const { data } = await api.get(`/api/v1/products/${id}`);
  return data;
};

export const useGetProductDetails = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetails(id),
  });
};
