import { useQuery } from "@tanstack/react-query";
import { TBrandsResponse } from "@/utils/types";
import api from "@/lib/axios";


const getBrands = async (): Promise<TBrandsResponse> => {
  const { data } = await api.get(`/api/v1/brands`);
  return data;
};

export const useGetBrands = () => {
  return useQuery({
    queryKey: ["brands"],
    queryFn: () => getBrands(),
  });
};