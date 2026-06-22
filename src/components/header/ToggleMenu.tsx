"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations("common");
  const pathname = usePathname();

  return (
    <div className="relative md:hidden">
      <button className="text-2xl text-secondary-foreground" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <MdClose /> : <IoMenu />}
      </button>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-12 left-0 w-48 bg-primary shadow-lg rounded-lg p-4 flex flex-col space-y-4 z-50 transition-all duration-300 ease-in-out">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`${pathname.endsWith("/") ? "text-main-color" : "text-secondary-foreground"} hover:text-main-color transition-colors`}
          >
            {t("Home")}
          </Link>
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className={`${pathname.endsWith("/products") ? "text-main-color" : "text-secondary-foreground"} hover:text-main-color transition-colors`}
          >
            {t("Products")}
          </Link>
          <Link
            href="/categories"
            onClick={() => setIsOpen(false)}
            className={`${pathname.endsWith("/categories") ? "text-main-color" : "text-secondary-foreground"} hover:text-main-color transition-colors`}
          >
            {t("Categories")}
          </Link>
          <Link
            href="/brands"
            onClick={() => setIsOpen(false)}
            className={`${pathname.endsWith("/brands") ? "text-main-color" : "text-secondary-foreground"} hover:text-main-color transition-colors`}
          >
            {t("Brands")}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;
