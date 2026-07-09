import CategoryList from "./Components/category/CategoryList";

import Scroll from "./Components/scroll/Scroll";

export default function Home() {
  return (
    <div className="bg-[#FAFAF7]">
      <CategoryList />

      <Scroll />
    </div>
  );
}
