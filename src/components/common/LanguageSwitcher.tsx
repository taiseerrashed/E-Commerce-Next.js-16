"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  
  const handleLanguageChange = (nextLocale: "ar" | "en") => {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        disabled={isPending}
        className="flex items-center gap-2 text-main-color bg-primary rounded-xl px-4 py-2 text-sm"
      >
        {locale === "en" ? "En" : "عربي"}
        <FaChevronDown size={12} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="" align="center">
        <DropdownMenuItem
          onClick={() => handleLanguageChange("ar")}
          disabled={locale === "ar"}
        >
          العربية
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("en")}
          disabled={locale === "en"}
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
