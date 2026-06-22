import { useQuery } from "@tanstack/react-query";
import { TCategoriesResponse } from "@/utils/types";
import api from "@/lib/axios";


const getCategories = async (): Promise<TCategoriesResponse> => {
  const { data } = await api.get(`/api/v1/categories`);
  return data;
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
};