"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { slides } from "@/utils/constants";

const Hero = () => {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  return (
    <section className="w-full shadow-2xl">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{ clickable: true }}
        className="rounded-2xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-130 flex items-center relative overflow-hidden">
              {/* Image */}
              <div
                className="slide-bg absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* content */}
              <div className="relative z-10 max-w-xl text-background px-10 content space-y-10">
                <p className="sub text-sm tracking-widest mb-4 text-main-color font-semibold">
                  {t("title")}
                </p>
                <div className="space-y-1">
                  <h1 className="title text-4xl md:text-5xl text-secondary font-bold leading-tight">
                    {t(slide.titleKey)}
                  </h1>
                  <p className="desc text-secondary-foreground">{t(slide.subtitleKey)}</p>
                </div>

                <Link
                  href={"/products"}
                  className="btn w-fit font-semibold hover:-translate-y-1 bg-btn-color text-secondary transition px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  {t("ShopNow")}
                  {locale === "en" ? <FaArrowRight /> : <FaArrowLeft />}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
