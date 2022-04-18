import React from "react";

const Product = ({ product, index, setCurrentProduct, setShowCurrentProductDetail }) => {

  const showModal = () => {
    setCurrentProduct(product)
    setShowCurrentProductDetail(true)
  }

  return (
    <div onClick={() => { showModal() }} className="flex justify-between my-2 py-3 bg-gray-50 hover:bg-gray-100 border rounded  shadow-sm hover:scale-[0.985] duration-300">
      <div className="flex">
        <span className="text-indigo-500 py-2 px-2 w-10 rounded-l flex justify-center text-sm font-bold">
          {index - 2}
        </span>
        <span className="text-sm text-zinc-900 mx-4 my-auto">
          {product[5]}
        </span>
      </div>
      <div className="flex">
        <span className="bg-indigo-200 px-5 sm:block hidden rounded-full text-sm text-zinc-900 my-auto">
          {product[14]}
        </span>

        <span className="text-sm font-semibold text-zinc-900 mx-4 my-auto inline">
          $ {product[8]}
        </span>
        <span className="text-sm font-semibold text-zinc-900 mx-4 my-auto inline cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
          </svg>
        </span>

      </div>

    </div>
  );
};

export default Product;
