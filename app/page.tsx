import BannerGrid from "./Home/BannerGrid";
import Category from "./Home/Category";
import HeroBanner from "./Home/HeroBanner";
import NewShoes from "./newShoes/NewShoes";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <BannerGrid />
      <NewShoes />
      <Category />
    </div>
  );
}
