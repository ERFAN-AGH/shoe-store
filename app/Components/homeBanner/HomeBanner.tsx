import { homeBanner } from "@/app/Type/Type";
import db from "@/data/db.json";
import HomeBannerSlider from "./HomeBannerSlider";

function HomeBanner() {
  const data = db.homeBanner as homeBanner[];

  return (
    <div className="">
      <HomeBannerSlider items={data} />
    </div>
  );
}

export default HomeBanner;
