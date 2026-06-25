import { useQuery } from "@tanstack/react-query";
import { IBrand } from "@/utils/types";
import api from "@/lib/axios";

interface IBrandByIdResponse {
  data: IBrand;
}

const getBrandById = async (id: string): Promise<IBrandByIdResponse> => {
  const { data } = await api.get(`/api/v1/brands/${id}`);
  return data;
};

export const useGetBrandById = (id: string) => {
  return useQuery({
    queryKey: ["brand", id],
    queryFn: () => getBrandById(id),
  });
};
