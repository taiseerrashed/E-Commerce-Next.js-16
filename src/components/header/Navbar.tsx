"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("common");
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden md:flex items-center space-x-8 text-lg font-medium">
        <Link href="/" className={`${pathname.endsWith("/") ? "text-main-color" : "text-secondary"} hover:text-main-color transition hover:-translate-y-1`}>{t("Home")}</Link>
        <Link href="/products" className={`${pathname.endsWith("/products") ? "text-main-color" : "text-secondary"} hover:text-main-color transition hover:-translate-y-1`}>{t("Products")}</Link>
        <Link href="/contact" className={`${pathname.endsWith("/contact") ? "text-main-color" : "text-secondary"} hover:text-main-color transition hover:-translate-y-1`}>{t("Contact")}</Link>
      </nav>
    </>
  );
};

export default Navbar;
