import { Link } from "@/i18n/navigation";
import Navbar from "./Navbar";
import ToggleMenu from "./ToggleMenu";
import LanguageSwitcher from "../common/LanguageSwitcher";
import CartIcon from "./CartIcon";
import { FavoriteIcon } from "./FavoriteIcon";
import Image from "next/image";
import { getLocale } from "next-intl/server";

const Header = async () => {
  const locale = await getLocale();
  return (
    <>
      <header className="fixed top-0 bg-primary/95 w-full backdrop-blur-sm border-secondary border-b-3 z-50">
        <div className="container px-4 md:px-1 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ToggleMenu />
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-2xl"
              >
                <Image
                  src={locale === "en" ? "/images/en-logo.png" : "/images/ar-logo.png"}
                  alt="ShopMart Logo"
                  width={150}
                  height={150}
                  priority
                  className="h-14 object-cover"
                />
              </Link>
            </div>
            <Navbar />
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <FavoriteIcon />
                <CartIcon />
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
