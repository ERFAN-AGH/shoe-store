import Link from "next/link";
import db from "../../../data/db.json";
import { ProduvtType } from "../../Type/Type";
import SingleSizeSilder from "./SingleSizeSilder";

function SingleSizeList() {
  const data = db.NewShoe as ProduvtType[];
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between gap-2 mx-5">
        <h2 className="text-xl font-bold text-emerald-600">کفش های تک سایز</h2>
        <div className="h-0.5  bg-gray-200 flex-1"></div>
        <Link href="/singleSize" className="flex items-center">
          <p>مشاهده همه</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill text-emerald-300 hover:text-emerald-500 transition-all duration-300"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </Link>
      </div>
      <SingleSizeSilder items={data} />
    </div>
  );
}

export default SingleSizeList;
