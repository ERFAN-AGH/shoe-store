import FooterLinks from "./FooterLinks";
import FooterBrand from "./FooterBrand";

function Footer() {
  return (
    <div className=" ">
      <div className="grid grid-cols-12 bg-emerald-50 rounded-2xl">
        <div className="col-span-4">
          <FooterLinks />
        </div>

        <div className="col-span-8">
          <FooterBrand />
        </div>
      </div>
      <h1 className="flex w-full justify-center bg-emerald-600 rounded-2xl  text-white">
        © کلیه حقوق و محتوای سایت متعلق به فروشگاه اینترنتی کفشو می‌باشد
      </h1>
    </div>
  );
}

export default Footer;
