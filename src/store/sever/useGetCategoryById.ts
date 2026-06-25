import { useQuery } from "@tanstack/react-query";
import { ICategory } from "@/utils/types";
import api from "@/lib/axios";

interface ICateogryByIdResponse {
  data: ICategory;
}


const getCategoryById = async (id: string): Promise<ICateogryByIdResponse> => {
  const { data } = await api.get(`/api/v1/categories/${id}`);
  return data;
};

export const useGetCategoryById = (id: string) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategoryById(id),
  });
};