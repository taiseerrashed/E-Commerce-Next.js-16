"use client";

import { useEffect, useState } from "react";

const useHydration = () => {
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHydrated(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return hydrated;
};

export default useHydration;