import React from "react";
import Image from "next/image";
import Button from "../Components/button/Button";

function Category() {
  return (
    <div>
      <h1 className="flex justify-center my-5 font-black ">دسته بندی</h1>

      {/* ----------------------قسمت مجلسی */}
      <div className="grid grid-cols-12 h-100 gap-5 items-center mx-5 ">
        <div className="col-span-3 flex flex-col items-center relative   h-full rounded-2xl group overflow-hidden">
          <Image
            src="https://plus.unsplash.com/premium_photo-1670984281009-863453504c52?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute bottom-12 right-4 text-right">
            <div className="w-1 bg-white h-12 absolute -right-2 top-0"></div>
            <h3 className="text-white font-black text-xl">کفش های مجلسی</h3>
            <p className="text-white text-sm">مردانه و زنانه</p>
          </div>
          <Button
            variant="success"
            className="absolute -bottom-15 group-hover:bottom-3 transition-all duration-300"
          >
            مشاهده ای محصولات
          </Button>
        </div>
        {/* ----------------------قسمت زنانه و مردانه */}
        <div className="col-span-5 h-full rounded-2xl flex flex-col gap-5 ">
          <div className=" overflow-hidden relative flex-1 rounded-2xl group flex flex-col items-center">
            <Image
              src="https://plus.unsplash.com/premium_photo-1664537975122-9c598d85816e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Women's shoes"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-12 right-4 text-right">
              <div className="w-1 h-12 bg-white absolute -right-2 top-0"></div>
              <h3 className="text-white font-bold text-xl">کفش اسپورت</h3>
              <p className="text-white ">زنانه</p>
            </div>
            <Button
              variant="success"
              className="absolute -bottom-15 group-hover:bottom-3  transition-all duration-300"
            >
              مشاهدای محصولات
            </Button>
          </div>
          <div className=" overflow-hidden group relative flex-1 rounded-2xl flex flex-col items-center">
            <Image
              src="https://media.istockphoto.com/id/2255350735/tr/foto%C4%9Fraf/hands-person-and-tying-laces-for-fitness-routine-endurance-training-and-running.jpg?s=1024x1024&w=is&k=20&c=ELyk2lNl59ao86R49lrJXvA_GB-ldfWDcZQMSY6b_PM="
              alt="Men Shoes"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-12 right-4 text-right">
              <div className=" w-1 h-12 bg-white absolute -right-2 top-0"></div>
              <h3 className="text-white font-bold text-xl">کفش اسپورت</h3>
              <p className="text-white">مردانه</p>
            </div>
            <Button
              variant="success"
              className="absolute -bottom-15 group-hover:bottom-3 transition-all duration-300"
            >
              مشاهده ای محصولات
            </Button>
          </div>
        </div>
        {/* کفش هلی بچگانه */}
        <div className="col-span-2 h-full rounded-2xl  flex flex-col items-center overflow-hidden group relative">
          <Image
            src="https://plus.unsplash.com/premium_photo-1729104895296-343b3fcd4e35?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Children's shoes"
            className="object-cover"
            fill
          />
          <div className="absolute bottom-12 right-3">
            <div className="w-1 h-12 bg-white absolute -right-2 top-0"></div>
            <h3 className="text-white text-xl font-bold">کفش بچگانه</h3>
            <p className="text-white text-sm">پسرانه و دخترانه</p>
          </div>
          <Button
            variant="success"
            className="absolute -bottom-15 group-hover:bottom-3 transition-all duration-300"
          >
            مشاهده ای محصولات
          </Button>
        </div>
        <div className="col-span-2 flex flex-col items-center bg-green-500 h-full rounded-2xl group overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="sandals"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-12 right-4">
            <div className="w-1 h-12 absolute bg-white -right-2 top-0"></div>
            <h3 className="text-white font-bold text-xl">سندل های تابستانه</h3>
            <p className="text-white text-sm">مردانه و زنانه</p>
          </div>
          <Button
            variant="success"
            className=" absolute -bottom-15 group-hover:bottom-3 transition-all duration-300"
          >
            مشاهدای محصولات
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Category;
