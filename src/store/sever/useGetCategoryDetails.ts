import { useQuery } from "@tanstack/react-query";
import { TCategoriesResponse } from "@/utils/types";
import api from "@/lib/axios";


const getCategoryDetails = async (id: string) => {
  const { data } = await api.get(`/api/v1/categories/${id}`);
  return data;
};

export const useGetCategoryDetails = (id: string) => {
  return useQuery({
    queryKey: ["category-details", id],
    queryFn: () => getCategoryDetails(id),
  });
};