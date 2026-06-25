import { ProduvtType } from "@/app/Type/Type";
import Image from "next/image";
import React from "react";

type ArticelProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};
async function page({ params }: ArticelProps) {
  const { id } = await params;
  const result = await fetch(`http://localhost:8000/NewShoe/${id}`);
  const data = (await result.json()) as ProduvtType;

  return (
    <div>
      <Image
        src={data.image}
        alt="logo"
        className="w-30 mt-2"
        width={300}
        height={300}
      />
      <h1>{data.title}</h1>
      <p>{data.views}</p>
    </div>
  );
}

export default page;
