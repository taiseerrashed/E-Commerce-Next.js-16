"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useEffect } from "react";

interface IErrorProps {
  error: Error;
  unstable_retry: () => void;
}

const ErrorPage = ({ error, unstable_retry }: IErrorProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <>
      <h1 className="text-2xl font-bold text-red-500">An error occurred</h1>
      <p className="text-gray-700">{error.message}</p>
      <Button
        onClick={unstable_retry}
        className="mt-4 px-4 py-2 bg-blue-500 text-white"
      >
        Try Again
      </Button>
      <Link href={"/"} className="mt-4 text-blue-500 hover:underline">
        Go Home
      </Link>
    </>
  );
};

export default ErrorPage;
