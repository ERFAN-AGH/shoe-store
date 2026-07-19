import { ProductType } from "@/app/Type/Type";
import Image from "next/image";
import Icon from "../icon/Icon";

function NewArrivalsBannerCard({ category, image, title, price }: ProductType) {
  return (
    <div className="bg-[#EEF4E6] mx-2  rounded-2xl relative my-4 hover:scale-105 transition-transform duration-200">
      <div className="  absolute left-5 top-4 ">
        <Icon
          className="text-[#1B5E20] hover:text-red-500 cursor-pointer"
          size={25}
          path="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
        />
      </div>
      <Image src={image} alt={title} width={250} height={250} className="" />

      <div className="p-2 text-[#1B5E20] ">
        <p className="opacity-50">مدل:</p>
        <h1>{title}</h1>
        <p className="opacity-50">دسته بندی:</p>
        <h5> {category}</h5>
        <p className="opacity-50"> قیمت:</p>
        <h5>{price.toLocaleString("en-US")} تومان</h5>
      </div>
    </div>
  );
}

export default NewArrivalsBannerCard;
