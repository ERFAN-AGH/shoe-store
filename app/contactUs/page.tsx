import Link from "next/link";
import ContactInfo from "../Components/contactItem/ContactInfo";

function ContactUs() {
  return (
    <div className="my-5">
      <h1 className="font-bold text-3xl text-emerald-500 text-center">
        ارتباط با ما
      </h1>
      <div className="grid grid-cols-6 gap-4 mt-5   ">
        <div className=" col-span-4 col-start-2  ">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl">آدرس فروشگاه:</h3>
              <p className="text-sm text-emerald-400">
                استان گلستان ،شهرستان گنبد کاووس،خیابان امام خمینی(ره)
              </p>
            </div>
            <Link href="https://maps.app.goo.gl/EWGtRYaSPxKKMXjX7?g_st=ac">
              <div className="bg-emerald-100 flex text-emerald-600 rounded-2xl py-1 px-3">
                <p>مکان</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-geo-alt "
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className=" col-span-4 col-start-2  ">
          <h3 className="font-bold text-xl">ساعات کاری فروشگاه:</h3>
          <p className="text-sm text-emerald-400">
            شنبه تا چهارشنبه 8:00 الی 17:00 و روز پنجشنبه 8:00 الی 14:00
          </p>
        </div>
        <div className=" col-span-4 col-start-2  ">
          <h3 className="font-bold text-xl">پست الکترونی</h3>
          <p className="text-sm text-emerald-400"> info@kafshoStore.ir</p>
        </div>
        <div className="col-span-4 col-start-2">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
