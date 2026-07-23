import NavList from "../header/NavList";
import Icon from "../icon/Icon";

import Link from "next/link";
import FooterContactInfo from "./FooterContactInfo";

function Footer() {
  const customerServiceLinks = [
    { title: "سوالات متداول", href: "/faq", id: "1" },
    { title: "پیگیری سفارش", href: "/track-order", id: "2" },
    { title: "راهنمای انتخاب سایز", href: "/size-guide", id: "3" },
    { title: "روش‌های پرداخت", href: "/payment-methods", id: "4" },
    { title: "شرایط و قوانین", href: "/terms", id: "5" },
    { title: "بازگشت و مرجوعی کالا", href: "/returns", id: "6" },
  ];

  return (
    <div>
      <div className=" rounded-2xl bg-[#f0f0ef] mx-5 mt-5 grid sm:grid-cols-2 lg:grid-cols-6 p-3 gap-4">
        {/* ------------------------------بخش گفتار------------------------------ */}
        <div className="bg-[#f5f5f3] rounded-2xl col-span-2 p-3 ">
          <h1 className="text-xl font-bold flex">
            <span className="text-[#374151]">کفش </span>
            <span className="text-[#2E7D32]">ورزشی</span>
            <Icon
              paths={[
                "M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z",
              ]}
              size={25}
              className="text-[#2E7D32]"
              viewBox="0 0 16 16"
            />
          </h1>
          <div className="text-[#355E3B] text-sm flex flex-col gap-2">
            <p className=" my-3 ">
              فروشگاه تخصصی کفش های با کیفیت،راحت ودوست دارمحیط زیست
            </p>
            <p className="font-bold">چرا ما؟</p>
            <p>
              طراحی حرفه‌ای برای عملکرد بهتر — کفی ضربه‌گیر و قالب ارگونومیک،
              مناسب دویدن، تمرین و فعالیت روزانه
            </p>
            <p>
              دوام در برابر فشار تمرین — مقاوم در برابر سایش، مناسب استفاده مکرر
              و شدید
            </p>
            <p>
              ضمانت اصالت و کیفیت — تمام محصولات با گارانتی اصالت کالا عرضه
              می‌شن
            </p>
          </div>
        </div>
        {/* ---------------------------------بخش لینک های صفحه------------ */}
        <div className="bg-[#f5f5f3] rounded-2xl flex flex-col items-center  p-3">
          <h3 className="text-[#355E3B] font-bold text-xl mb-5">دسترسی سریع</h3>

          <div className="m-5 text-sm ">
            <NavList direction="grid" />
          </div>
        </div>
        {/* -------------------------------------------------------خدمات مشتریان */}
        <div className="bg-[#f5f5f3] rounded-2xl flex flex-col p-4 gap-3 ">
          <h3 className=" text-[#355E3B] font-bold text-xl mx-auto mb-5">
            خدمات مشتریان
          </h3>
          <ul className="list-disc text-[#355E3B] flex flex-col gap-4 text-sm mr-3">
            {customerServiceLinks.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="hover:text-[#2E7D32]">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* -------------------------------راه های ارتباطی---------- */}
        <div className="bg-[#f5f5f3] rounded-2xl flex flex-col p-4 gap-3   text-[#355E3B]">
          <FooterContactInfo />
        </div>
        {/* -----------------------------------محل نماد ها */}
        <div className="bg-[#f5f5f3] rounded-2xl flex items-center justify-center">
          <div className="border border-dashed  border-gray-300 rounded-lg p-4 text-center text-gray-400 text-xs w-24 h-24 flex items-center justify-center">
            محل نماد اعتماد
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------- */}
      <div className="bg-[#355E3B] h-7 w-full rounded-t-lg flex items-center justify-center text-[#f5f5f3] text-sm">
        © 1405 کفش ورزشی. تمامی حقوق محفوظ است. | طراحی و توسعه توسط عرفان
      </div>
    </div>
  );
}

export default Footer;
