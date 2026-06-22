import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Brands from "@/components/home/Brands";
import NewArrivals from "@/components/home/NewArrivals";

export default function Home() {
  return (
    <>
    <Hero />
    <Categories />
    <FeaturedProducts />
    {/* <NewArrivals /> */}
    <Brands />
    </>
  );
}
