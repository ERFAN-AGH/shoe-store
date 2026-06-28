import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";

function CategoryList() {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 mx-5 my-5">
        <h2 className="text-xl font-bold text-emerald-600">دسته بندی</h2>
        <div className="h-0.5  bg-gray-200 flex-1"></div>
        <Link href="/category" className="flex items-center">
          <p>مشاهده همه</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill text-emerald-300 hover:text-emerald-500 transition-all duration-300"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </Link>
      </div>

      {/* ----------------------قسمت اسپورت */}
      <div className="grid grid-cols-12 h-100 gap-5 items-center mx-5 ">
        <div className="col-span-3 flex flex-col items-center relative   h-full rounded-2xl group overflow-hidden">
          <Image
            src="https://plus.unsplash.com/premium_photo-1668767725936-f896fbca8c66?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute bottom-12 right-4 text-right">
            <div className="w-1 bg-white h-12 absolute -right-2 top-0"></div>
            <h3 className="text-white font-black text-xl">کفش های ورزشی</h3>
            <p className="text-white text-sm">مردانه و زنانه</p>
          </div>
          <Link
            href="/category/sportShoes"
            className="absolute -bottom-15 group-hover:bottom-3 transition-all duration-300"
          >
            <Button variant="success">مشاهده ای محصولات</Button>
          </Link>
        </div>
        {/* ----------------------قسمت مجلسی زنانه و مردانه */}
        <div className="col-span-5 h-full rounded-2xl flex flex-col gap-5 ">
          <div className=" overflow-hidden relative flex-1 rounded-2xl group flex flex-col items-center">
            <Image
              src="https://media.istockphoto.com/id/1143262564/tr/foto%C4%9Fraf/parlak-%C5%9F%C4%B1k-stiletto-ayakkab%C4%B1-k%C4%B1z-bacaklar.jpg?s=1024x1024&w=is&k=20&c=KDDdI7OzDiikg07ySaDKvTlS_2fgiEXwmVPxOo7CHWU="
              alt="Women's shoes"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-12 right-4 text-right">
              <div className="w-1 h-12 bg-white absolute -right-2 top-0"></div>
              <h3 className="text-white font-bold text-xl">کفش مجلسی</h3>
              <p className="text-white ">زنانه</p>
            </div>
            <Link
              href="/category/wemanShoes"
              className="absolute -bottom-15 group-hover:bottom-3  transition-all duration-300"
            >
              <Button variant="success">مشاهدای محصولات</Button>
            </Link>
          </div>
          <div className=" overflow-hidden group relative flex-1 rounded-2xl flex flex-col items-center">
            <Image
              src="https://media.istockphoto.com/id/1061448006/tr/foto%C4%9Fraf/i%C5%9Fadam%C4%B1-giyim-ayakkab%C4%B1-i%C5%9F-i%C3%A7in-haz%C4%B1r-ba%C5%9Flarken-adam-sabah-d%C3%BC%C4%9F%C3%BCn-t%C3%B6reni-olmadan-damat.jpg?s=1024x1024&w=is&k=20&c=Q_LGjpPwxiR-6QfLXeuH9VGIpLK5rMoQj4cCcIyXokA="
              alt="Men Shoes"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-12 right-4 text-right">
              <div className=" w-1 h-12 bg-white absolute -right-2 top-0"></div>
              <h3 className="text-white font-bold text-xl">کفش مجلسی</h3>
              <p className="text-white">مردانه</p>
            </div>
            <Link
              href="/category/manShoes"
              className="absolute -bottom-15 group-hover:bottom-3 transition-all duration-300"
            >
              <Button variant="success">مشاهده ای محصولات</Button>
            </Link>
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
          <Link
            href="/category/kidsShoes"
            className="absolute -bottom-15 group-hover:bottom-3 transition-all duration-300"
          >
            <Button variant="success">مشاهده ای محصولات</Button>
          </Link>
        </div>
        {/* کفش هلی سندل */}
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
          <Link
            href="/category/sandalsShoes"
            className=" absolute -bottom-15 group-hover:bottom-3 transition-all duration-300"
          >
            <Button variant="success">مشاهدای محصولات</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
