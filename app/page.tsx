import BrandLogo from "./components/brandLogo/BrandLogo";
import CategoryGrid from "./components/categoryGrid/CategoryGrid";
import HomeBanner from "./components/homeBanner/HomeBanner";
import NewArrivalsBanner from "./components/newArrivalsBanner/NewArrivalsBanner";
import PopularCategoryes from "./components/popularCategories/PopularCategoryes";
import PromoSection from "./components/promoSection/PromoSection";
import Scroll from "./components/scroll/Scroll";
import TrustBadges from "./components/trustBadges/TrustBadges";

export default function Home() {
  return (
    <div className="bg-[#FAFAF7]">
      <Scroll />
      <HomeBanner />
      <BrandLogo />
      <CategoryGrid />
      <NewArrivalsBanner />
      <PromoSection />
      <PopularCategoryes />
      <TrustBadges />
    </div>
  );
}
