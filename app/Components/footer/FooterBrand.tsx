"use client";

import Link from "next/link";
import logo from "./../../../public/images/logo/Logo.png";
import Image from "next/image";

function FooterBrand() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl text-emerald-700 font-bold">کفشو</h3>
        <Link
          href="/"
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        >
          <Image src={logo} alt="logo" width={300} height={300} />
        </Link>
      </div>
      <h3 className="mb- text-xl text-emerald-400">
        ما بهرتین ها رو برای قلب دوم انتخاب میکنیم
      </h3>
      <p className="text-emerald-700 m">
        فروشگاه تخصصی آنلاین کتونی است. از سال 1405 که شروع به کار کردیم تا
        اکنون، اصل اساسی ما حفظ احترام مشتری و ارائه خدمات بی نظیر بوده و خواهد
        بود. به همین دلیل با تامین کفش اسپرت از برندهای مطرح جهانی، فروش اقساطی،
        ضمانت تعویض و عودت کالا همراه مشاوره تخصصی قبل از خرید می خواهیم تجربه
        ای متفاوت از خرید اینترنتی کفش بسازیم. به امید اینکه در ارتقای سلامت
        عمومی و افزایش پویایی جامعه سهم داشته باشیم.
      </p>
    </div>
  );
}

export default FooterBrand;
