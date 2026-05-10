import { TCategory } from "./types";

export const slides = [
  {
    id: 1,
    image: "/images/hero2.avif",
    titleKey: "slides.0.title",
    subtitleKey: "slides.0.subtitle",
  },
  {
    id: 2,
    image: "/images/hero3.avif",
    titleKey: "slides.1.title",
    subtitleKey: "slides.1.subtitle",
  },
  {
    id: 3,
    image: "/images/hero1.avif",
    titleKey: "slides.2.title",
    subtitleKey: "slides.2.subtitle",
  },
];

export const categories: TCategory[] = [
  {
    slug: "beauty",
    name: {
      en: "Beauty",
      ar: "الجمال",
    },
    description: {
      en: "Premium care and daily essentials.",
      ar: "عناية مميزة واحتياجات يومية.",
    },
  },
  {
    slug: "fragrances",
    name: {
      en: "Fragrances",
      ar: "العطور",
    },
    description: {
      en: "Elegant scents for every occasion.",
      ar: "روائح أنيقة لكل المناسبات.",
    },
  },
  {
    slug: "furniture",
    name: {
      en: "Furniture",
      ar: "الأثاث",
    },
    description: {
      en: "Modern styles built for comfort.",
      ar: "تصاميم حديثة مريحة.",
    },
  },
  {
    slug: "groceries",
    name: {
      en: "Groceries",
      ar: "البقالة",
    },
    description: {
      en: "Quality picks for your home.",
      ar: "منتجات عالية الجودة لمنزلك.",
    },
  },
];

export const PRODUCTS_PER_PAGE = 12;
