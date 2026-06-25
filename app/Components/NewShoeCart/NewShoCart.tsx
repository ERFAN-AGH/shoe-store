import React from "react";
import Image from "next/image";
import { ProduvtType } from "@/app/Type/Type";

function NewShoCart({ image, title, views }: ProduvtType) {
  return (
    <div className="bg-sky-200 my-3 rounded-2xl w-36">
      <Image
        src={image}
        alt="logo"
        className="w-30 mt-2 border-t-red-200"
        width={300}
        height={300}
      />
      <h4>{title}</h4>
      <p>ُshoeNaik</p>
      <p>{views}</p>
      <button>خرید</button>
    </div>
  );
}

export default NewShoCart;
