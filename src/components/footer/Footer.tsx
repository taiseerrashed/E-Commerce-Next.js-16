import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { getLocale, getTranslations } from "next-intl/server";

const Footer = async() => {
  const t = await getTranslations("Footer");
  const locale = await getLocale();

  return (
    <footer className="bg-foreground text-secondary py-4">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-6">
        {/* Logo & About */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="mb-3">
            <Image
              src={locale === "en" ? "/images/en-logo.png" : "/images/ar-logo.png"}
              alt="ShopMart Logo"
              width={100}
              height={100}
              className="bg-background rounded-md h-10 w-30 object-cover"
            />
          </Link>

          <p className="leading-7 text-gray-400">
            {t("description")}
          </p>

          <div className="space-y-2 text-gray-400 mt-4">
            <p className="flex items-center gap-2">
              <FaWhatsapp className="w-5 text-lg text-main-color" />
              <a
                href="https://wa.me/201115603479"
                target="_blank"
                rel="noreferrer"
              >
                01115603479
              </a>
            </p>

            <p className="flex items-center gap-2">
              <MdEmail className="w-5 text-lg text-main-color" />
              <a href="mailto:taiseerrashed@gmail.com">
                taiseerrashed@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-5 text-lg text-main-color" />
              {t("location")}
            </p>
          </div>

          <div className="my-4 flex gap-3">
            <a
              href="https://github.com/taiseerrashed"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-main-color"
            >
              <FaGithub className="w-5 text-lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/taiseer-salah-9b0a3221a"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-main-color"
            >
              <FaLinkedinIn className="w-5 text-lg" />
            </a>

            <a
              href="https://web.facebook.com/tysyr.slah.991410/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-main-color"
            >
              <FaFacebook className="w-5 text-lg" />
            </a>

            <a
              href="https://www.instagram.com/taiseerrashed/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-main-color"
            >
              <FaInstagram className="w-5 text-lg" />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="mb-3 font-semibold text-background">{t("shop")}</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/products" className="hover:text-main-color">
                {t("allProducts")}
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-main-color">
                {t("categories")}
              </Link>
            </li>
            <li>
              <Link href="/brands" className="hover:text-main-color">
                {t("brands")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="mb-3 font-semibold text-background">{t("account")}</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/login" className="hover:text-main-color">
                {t("signIn")}
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-main-color">
                {t("createAccount")}
              </Link>
            </li>
            <li>
              <Link href="/wishlist" className="hover:text-main-color">
                {t("wishlist")}
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-main-color">
                {t("shoppingCart")}
              </Link>
            </li>
            <li>
              <Link href="/allorders" className="hover:text-main-color">
                {t("orders")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-3 font-semibold text-background">{t("support")}</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/contact" className="hover:text-main-color">
                {t("contactUs")}
              </Link>
            </li>
            <li>
              <Link href="/help-center" className="hover:text-main-color">
                {t("helpCenter")}
              </Link>
            </li>
            <li>
              <Link href="/shipping-info" className="hover:text-main-color">
                {t("shippingInfo")}
              </Link>
            </li>
            <li>
              <Link href="/returns-refunds" className="hover:text-main-color">
                {t("returnsRefunds")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-3 font-semibold text-background">{t("legal")}</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/privacy-policy" className="hover:text-main-color">
                {t("privacyPolicy")}
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-main-color">
                {t("termsOfService")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container text-center border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-main-color">{t("ShopMart")}</span> {t("developedBy")}{" "}
          <a
            href="https://personal-portfolio-inky-one.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-main-color hover:underline font-medium"
          >
            {t("Taiseer")}
          </a>
          {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
