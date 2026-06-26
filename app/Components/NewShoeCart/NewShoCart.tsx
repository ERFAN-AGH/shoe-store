import React from "react";
import Image from "next/image";
import { ProduvtType } from "@/app/Type/Type";

function NewShoCart({ image, title, views }: ProduvtType) {
  return (
    <div className="bg-sky-200 my-3 rounded-2xl w-44 h-64 p-3 ">
      <div className="flex justify-center rounded-2xl">
        <Image
          src={image}
          alt="logo"
          className="w-30 mt-2 border-t-red-200 rounded h-32 "
          width={300}
          height={300}
        />
      </div>

      <h4 className="">{title}</h4>
      <p>ُshoeNaik</p>
      <p>{views}</p>
      <button className=" cursor-pointer  mx-auto w-full border rounded">
        خرید
      </button>
    </div>
  );
}

export default NewShoCart;
