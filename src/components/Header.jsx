import React from "react";
import { createProduct } from "../utils/Woocommerce";

const Header = ({ products }) => {
  const creteProducts = () => {
    createProduct(products[5]);
  };

  return (
    <div className="h-20 px-12 fixed grid gap-4 grid-cols-2 top-0 right-1/4 left-0 z-10 shadow-lg backdrop-blur-md bg-white/30">
      <span className="my-auto flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-indigo-500 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <h2 className="text-indigo-500 text-2xl font-black my-auto ml-2">
          woo-belihebe
        </h2>
      </span>
    </div>
  );
};

export default Header;
