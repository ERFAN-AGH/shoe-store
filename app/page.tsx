import BrandLogo from "./components/brandLogo/BrandLogo";
import CategoryGrid from "./components/categoryGrid/CategoryGrid";
import HomeBanner from "./components/homeBanner/HomeBanner";
import NewArrivalsBanner from "./components/newArrivalsBanner/NewArrivalsBanner";
import Scroll from "./Components/scroll/Scroll";

export default function Home() {
  return (
    <div className="bg-[#FAFAF7]">
      <Scroll />
      <HomeBanner />
      <BrandLogo />
      <CategoryGrid />
      <NewArrivalsBanner />
    </div>
  );
}
