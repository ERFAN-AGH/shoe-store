import BannerGrid from "./Components/bannerGrid/BannerGrid";
import TrendShoesList from "./Components/trendShoes/TrendShoesList";
import NewShoesList from "./Components/NewShoes/NewShoesList";
import BestSellingsShoesList from "./Components/bestSellingsShoes/BestSellingsShoesList";
import CategoryList from "./Components/category/CategoryList";
import HomeBanner from "./Components/heroBanner/HomeBanner";
import FeaturesList from "./Components/featuresList/featuresList";
import DiscountedList from "./Components/discountedItemes/DiscountedList";
import SingleSizeList from "./Components/singleSize/SingleSizeList";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <BannerGrid />
      <NewShoesList />
      <CategoryList />
      <TrendShoesList />
      <BestSellingsShoesList />
      <FeaturesList />
      <DiscountedList />
      <SingleSizeList />
    </div>
  );
}
