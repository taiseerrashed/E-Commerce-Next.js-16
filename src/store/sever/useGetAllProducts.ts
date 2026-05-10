import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { TProduct } from "@/utils/types";

interface IProductsResponse {
  products: TProduct[];
  total: number;
  skip: number;
  limit: number;
}

const getAllProducts = async (page: number): Promise<IProductsResponse> => {
  const limit = 12;
  const skip = (page - 1) * limit;

  const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);  
  return data;
};

export const useGetAllProducts = (page: number) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: () => getAllProducts(page),
  });
};