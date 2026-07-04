import Filter from "../Components/filter/Filter";
import StoreCard from "../Components/storeCard/StoreCard";
import Scroll from "../Components/scroll/Scroll";

function Store() {
  return (
    <div className="grid grid-cols-12 gap-5 mx-5  ">
      <div className="col-span-8">
        <StoreCard />
      </div>
      <div className="col-span-4">
        <Filter />
      </div>
      <Scroll />
    </div>
  );
}

export default Store;
