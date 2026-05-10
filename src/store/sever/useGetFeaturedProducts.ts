import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { TProduct } from "@/utils/types";

interface IFeaturedProductsResponse {
  products: TProduct[];
  total: number;
  skip: number;
  limit: number;
}
const getFeaturedProducts = async (): Promise<IFeaturedProductsResponse> => {
  const { data } = await axios.get("https://dummyjson.com/products?limit=8");
  return data;
};

export const useGetFeaturedProducts = () => {
  return useQuery({
    queryKey: ["featuredProducts"],
    queryFn: getFeaturedProducts,
  });
};
