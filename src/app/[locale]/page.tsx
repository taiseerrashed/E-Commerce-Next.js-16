import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";

export default function Home() {
  return (
    <>
    <Hero />
    <FeaturedProducts />
    <NewArrivals />
    <Categories />
    </>
  );
}
