import api from "@/lib/axios";
import { IAuthResponse, TUserData } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";


const register = async (userData: TUserData): Promise<IAuthResponse> => {
  const { data } = await api.post("/api/v1/auth/signup", userData);
  return data;
};

export const useRegister = () => {
  return useMutation<IAuthResponse, AxiosError<{ message: string }>, TUserData>({
    mutationFn: register,
  });
};
