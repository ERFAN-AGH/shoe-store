import BestSellingsShoes from "./bestSellingsShoes/BestSellingsShoes";
import BannerGrid from "./Home/BannerGrid";
import Category from "./Home/Category";
import HeroBanner from "./Home/HeroBanner";
import NewShoes from "./newShoes/NewShoes";
import TrendShoes from "./trendShoes/TrendShoes";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <BannerGrid />
      <NewShoes />
      <Category />
      <TrendShoes />
      <BestSellingsShoes />
    </div>
  );
}
