import ContactInfo from "../contactItem/ContactInfo";

function FooterLinks() {
  return (
    <div className="flex flex-col items-center  ">
      <div className="mt-2 w-50">
        <h3 className="flex  text-2xl font-bold mt-3 text-emerald-500 ">
          ساعات کاری
        </h3>
        <p className="w-64   text-emerald-400">
          شنبه تا چها رشنبه 8:00 الی 17:00 و روز پنجشنبه 8:00 الی 14:00
        </p>
      </div>
      <div className="flex flex-col gap-5 ">
        <ContactInfo />
      </div>
    </div>
  );
}

export default FooterLinks;
