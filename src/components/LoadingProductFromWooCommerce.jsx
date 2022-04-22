import React from "react";

const LoadingProductFromWooCommerce = () => {
  return (
    <div className="block mt-20">
      <h3 className="text-2xl text-gray-600 font-bold mt-6 px-72 animate-pulse">
        Obteniendo Productos de WooCommerce
      </h3>
      <svg
        version="1.1"
        id="L9"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        width="200"
        height="200"
        fill="none"
        color="currentColor"
        className="mx-auto text-indigo-500"
      >
        <path
          fill="currentColor"
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default LoadingProductFromWooCommerce;
