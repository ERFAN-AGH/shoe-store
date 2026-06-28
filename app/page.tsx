import BannerGrid from "./Home/BannerGrid";

import HeroBanner from "./Home/HeroBanner";
import TrendShoesList from "./Components/trendShoes/TrendShoesList";
import NewShoesList from "./Components/NewShoes/NewShoesList";
import BestSellingsShoesList from "./Components/bestSellingsShoes/BestSellingsShoesList";
import CategoryList from "./Components/category/CategoryList";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <BannerGrid />
      <NewShoesList />
      <CategoryList />
      <TrendShoesList />
      <BestSellingsShoesList />
    </div>
  );
}
