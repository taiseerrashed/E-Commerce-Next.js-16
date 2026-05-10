import Link from "next/link";
import Navbar from "./Navbar";
import ToggleMenu from "./ToggleMenu";
import LanguageSwitcher from "../common/LanguageSwitcher";
import { useTranslations } from "next-intl";
import CartIcon from "./CartIcon";
import { FavoriteIcon } from "./FavoriteIcon";

const Header = () => {
  const t = useTranslations("common");

  return (
    <>
      <header className="fixed top-0 bg-primary/95 w-full backdrop-blur-sm border-secondary border-b-3 z-50">
        <div className="container p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ToggleMenu />
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-2xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-crown text-main-color bg-primary rounded-sm p-1 border border-main-color"
                  aria-hidden="true"
                >
                  <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                  <path d="M5 21h14"></path>
                </svg>
                <span className=" text-secondary">{t("ShopMart")}</span>
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
