import React from "react";

function Category() {
  return (
    <div>
      <h1 className="flex justify-center my-5 font-black ">دسته بندی</h1>
      <div className="grid grid-cols-12 h-100 gap-5 items-center mx-5 ">
        <div className="col-span-3 bg-red-500 h-full rounded-2xl"></div>
        <div className="col-span-5 h-full rounded-2xl flex flex-col gap-5 ">
          <div className="bg-amber-300 flex-1 rounded-2xl"></div>
          <div className="bg-fuchsia-600  flex-1 rounded-2xl"></div>
        </div>
        <div className="col-span-2 bg-sky-200 h-full rounded-2xl"></div>
        <div className="col-span-2 bg-green-500 h-full rounded-2xl"></div>
      </div>
    </div>
  );
}

export default Category;
