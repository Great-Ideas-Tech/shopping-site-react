import { Inter } from "next/font/google";
import HomeBanner from "./components/HomeBanner";
import Categories from "./components/Categories";
import BigSale from "./components/BigSale";
import FeaturedProducts from "./components/FeaturedProducts";
import Intro from "./components/Intro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
   <HomeBanner/>
   <Intro/>
   <Categories/>
   <FeaturedProducts/>
   <BigSale/>
    </>
  );
}
