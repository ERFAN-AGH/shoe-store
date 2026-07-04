import Link from "next/link";
import db from "../../../data/db.json";

interface TSocialMedia {
  id: string;
  label: string;
  href: string;
  icon: string;
}
interface TphoneNumber {
  id: string;
  href: string;
  label: string;
}
function ContactInfo() {
  const socialMedia = db.socialMedia as TSocialMedia[];
  const phoneNumber = db.phoneNumber as TphoneNumber[];

  return (
    <div>
      <div className="flex flex-col gap-5 ">
        <h3 className=" text-2xl font-bold mt-3 text-emerald-500 justify-center">
          راه های ارتباطی
        </h3>
        <div className="flex gap-3 flex-col">
          {phoneNumber.map((item) => (
            <Link
              href={item.href}
              className="flex gap-3 w-fit  hover:text-emerald-600 hover:underline duration-200  text-emerald-400"
              key={item.id}
            >
              {item.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone-fill "
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <h3 className="flex  text-2xl  font-bold mt-3 text-emerald-500 ">
          شبکه های اجتماعی ما
        </h3>
        <div className=" flex  gap-4">
          {socialMedia.map((item) => (
            <Link href={item.href} key={item.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-instagram text-emerald-400  hover:text-emerald-600 cursor-pointer"
                viewBox="0 0 16 16"
              >
                <path d={item.icon} />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
