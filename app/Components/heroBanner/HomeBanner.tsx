import db from "./../../../data/db.json";
import HomeBannerLink from "./HomeBannerLink";
import HomeBannerSlider from "./HomeBannerSlider";
export interface THomeBannerSlider {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

async function HomeBanner() {
  const data = (await db.homeBanner) as THomeBannerSlider[];

  return (
    <div className="grid grid-cols-12 gap-4 h-100">
      <div className="col-span-8 ">
        <HomeBannerSlider items={data} />
      </div>
      <div className="col-span-4 ">
        <HomeBannerLink />
      </div>
    </div>
  );
}

export default HomeBanner;

// &lsaquo
