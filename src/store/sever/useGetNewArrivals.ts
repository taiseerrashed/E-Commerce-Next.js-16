import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { TProduct } from "@/utils/types";

interface INewArrivalsResponse {
  products: TProduct[];
  total: number;
  skip: number;
  limit: number;
}
const getNewArrivalas = async (): Promise<INewArrivalsResponse> => {
  const { data } = await axios.get("https://dummyjson.com/products?limit=12&skip=10");
  return data;
};

export const useGetNewArrivals = () => {
  return useQuery({
    queryKey: ["newArrivals"],
    queryFn: getNewArrivalas,
  });
};
