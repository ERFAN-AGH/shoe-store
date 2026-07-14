import BrandList from "./brandList/page";
import HomeBanner from "./Components/homeBanner/HomeBanner";
import Scroll from "./Components/scroll/Scroll";

export default function Home() {
  return (
    <div className="bg-[#FAFAF7]">
      <Scroll />
      <HomeBanner />
      <BrandList />
    </div>
  );
}
