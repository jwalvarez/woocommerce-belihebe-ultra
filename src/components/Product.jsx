import React, { useState } from "react";
import ProductDetail from "./ProductDetail";

const Product = ({ product, index, setCurrentProduct, setShowCurrentProductDetail }) => {

  const showModal = () => {
    setCurrentProduct(product)
    setShowCurrentProductDetail(true)
    setShow(!show)
  }
  const [show, setShow] = useState(false)

  return (
    <>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3 text-indigo-600" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>
          </span>

        </div>

      </div>
      {
        <div className={show ? "bg-indigo-400 p-10 rounded-lg transition-opacity duration-150 ease-linear" : "hidden bg-red-400 p-10 rounded-lg transition-all duration-150 ease-linear"}>
          <h2 className="text-lg text-gray-200 font-bold text-left">¿QÚE ES?</h2>
          <p className='text-lg text-gray-200 text-left'>{product[9]}</p> <br />

          <h2 className="text-lg text-gray-200 font-bold text-left">¿CUÁLES SON SUS BENEFICIOS?</h2>
          <p className='text-lg text-gray-200 text-left'>{product[10]}</p> <br />

          <h2 className="text-lg text-gray-200 font-bold text-left">ACTIVOS PRINCIPALES: </h2>
          <p className='text-lg text-gray-200 text-left'>{product[11]}</p> <br />
        </div>
      }
    </>
  );
};

export default Product;
