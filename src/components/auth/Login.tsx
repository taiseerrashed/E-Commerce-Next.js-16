"use client";

import AuthCardWrapper from "./AuthCardWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, TLoginValues } from "@/utils/schemas";
import { Link, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLogin } from "@/store/sever/auth/useLogin";
import { useAuthStore } from "@/store/client/auth-store";
import { toast } from "sonner";
import { AxiosError } from "axios";

const Login = () => {
  const router = useRouter();
  const { login } = useAuthStore();
  const { mutate, isPending } = useLogin();

  const form = useForm<TLoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: TLoginValues) => {
    mutate(values, {
      onSuccess: (data) => {
        login(data.token, data.user);
        toast.success("Logged in successfully");
        router.push("/");
      },
      onError: (error: AxiosError<{ message: string }>) => {
        toast.error(error.response?.data.message || "Login failed. Please try again.");
      },
    });
  };

  return (
    <AuthCardWrapper
      title="Log in"
      des="Please enter your credentials to continue shopping"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary">Email or Phone</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Enter your email or phone number"
                    className="bg-background"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary">Password</FormLabel>

                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="bg-background"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full h-11" disabled={isPending}>
            {isPending ? "Logging in..." : "Log in"}
          </Button>

          <div className="flex items-center justify-between text-sm">
            <Link
              href="/forgot-password"
              className="text-main-color hover:underline"
            >
              Forgot password?
            </Link>

            <Link href="/register" className="text-main-color hover:underline">
              Create account
            </Link>
          </div>
        </form>
      </Form>
    </AuthCardWrapper>
  );
};

export default Login;
