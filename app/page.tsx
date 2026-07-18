import BrandLogo from "./Components/brandLogo/BrandLogo";
import CategoryGrid from "./Components/categoryGrid/CategoryGrid";
import HomeBanner from "./Components/homeBanner/HomeBanner";
import Scroll from "./Components/scroll/Scroll";

export default function Home() {
  return (
    <div className="bg-[#FAFAF7]">
      <Scroll />
      <HomeBanner />
      <BrandLogo />
      <CategoryGrid />
    </div>
  );
}
