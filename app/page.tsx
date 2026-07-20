import BrandLogo from "./components/brandLogo/BrandLogo";
import CategoryGrid from "./components/categoryGrid/CategoryGrid";
import HomeBanner from "./components/homeBanner/HomeBanner";
import NewArrivalsBanner from "./components/newArrivalsBanner/NewArrivalsBanner";
import PromoSection from "./components/promoSection/PromoSection";
import Scroll from "./components/scroll/Scroll";

export default function Home() {
  return (
    <div className="bg-[#eeeeea]">
      <Scroll />
      <HomeBanner />
      <BrandLogo />
      <CategoryGrid />
      <NewArrivalsBanner />
      <PromoSection />
    </div>
  );
}
