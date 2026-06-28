import BannerGrid from "./Home/BannerGrid";
import Category from "./category/page";
import HeroBanner from "./Home/HeroBanner";
import TrendShoesList from "./Components/trendShoes/TrendShoesList";
import NewShoesList from "./Components/NewShoes/NewShoesList";
import BestSellingsShoesList from "./Components/bestSellingsShoes/BestSellingsShoesList";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <BannerGrid />
      <NewShoesList />
      <Category />
      <TrendShoesList />
      <BestSellingsShoesList />
    </div>
  );
}
