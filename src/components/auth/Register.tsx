"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import AuthCardWrapper from "./AuthCardWrapper";
import { registerSchema, TRegisterValues } from "@/utils/schemas";
import { useRegister } from "@/store/sever/auth/useRegister";
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
import { useAuthStore } from "@/store/client/auth-store";
import { AxiosError } from "axios";

import { toast } from "sonner";

const Register = () => {
  const router = useRouter();
  const { login } = useAuthStore();
  const { mutate, isPending } = useRegister();

  const form = useForm<TRegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
  });

  const onSubmit = (values: TRegisterValues) => {
    mutate(values, {
      onSuccess: (data) => {
        login(data.token, data.user);
        toast.success("Account created successfully");
        router.push("/");
      },
      onError: (error: AxiosError<{ message: string }>) => {
        toast.error(error.response?.data.message || "Registration failed. Please try again.");
      },
    });
  };

  return (
    <AuthCardWrapper
      title="Create Account"
      des="Create your account and start shopping."
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary">Name</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Enter your name"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary">Email</FormLabel>

                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary">Phone</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
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

          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary">
                  Confirm Password
                </FormLabel>

                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    className="bg-background"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full h-11" disabled={isPending}>
            {isPending ? "Creating account..." : "Create Account"}
          </Button>

          <div className="text-center text-sm">
            <span className="text-secondary-foreground">
              Already have an account?{" "}
            </span>

            <Link href="/login" className="text-main-color hover:underline">
              Log in
            </Link>
          </div>
        </form>
      </Form>
    </AuthCardWrapper>
  );
};

export default Register;
