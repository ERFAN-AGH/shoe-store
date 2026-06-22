import React from "react";

function Search() {
  return (
    <div className="flex w-full max-w-xs  rounded">
      <button className="group bg-white cursor-pointer mr-2 rounded p-2 hover:bg-sky-400 transition-colors duration-300 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search transition-colors duration-300 group-hover:text-white"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>
      <input
        type="text"
        placeholder="جستوجو محصولات "
        dir="rtl"
        className="w-full rounded px-2 py-1 border-green-300 border  bg-white"
      />
    </div>
  );
}

export default Search;
