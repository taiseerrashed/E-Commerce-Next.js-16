import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { TProduct } from "@/utils/types";

const getProductDetails = async (id: number): Promise<TProduct> => {

  const { data } = await axios.get(`https://dummyjson.com/products/${id}`);  
  return data;
};

export const useGetProductDetails = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetails(id),
  });
};