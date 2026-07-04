"use client";
import { useState, useEffect } from "react";
import Button from "../button/Button";

function Scroll() {
  const [showButton, setShowButton] = useState(false);

  const handelScroll = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const checkButton = () => {
      const scrollY = window.scrollY;
      const scrollwindo = document.documentElement.scrollHeight / 2;

      if (scrollY >= scrollwindo) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", checkButton);
    return () => {
      window.removeEventListener("scroll", checkButton);
    };
  }, []);
  return (
    <div>
      <Button
        variant="success"
        className={`fixed rounded-full w-10 h-10 items-center bottom-20 left-10 transition-all duration-300 ${showButton ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-4  pointer-events-none"}`}
        onClick={handelScroll}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-arrow-up-circle-fill "
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
        </svg>
      </Button>
    </div>
  );
}

export default Scroll;
