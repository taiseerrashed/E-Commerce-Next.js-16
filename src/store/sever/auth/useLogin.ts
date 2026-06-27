import api from "@/lib/axios";
import { IAuthResponse, TCredentials } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";


const login = async (credentials: TCredentials): Promise<IAuthResponse> => {
  const { data } = await api.post("/api/v1/auth/signin", credentials);
  return data;
};

export const useLogin = () => {
  return useMutation<IAuthResponse, AxiosError<{ message: string }>, TCredentials>({
    mutationFn: login,
  });
};
