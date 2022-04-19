import React, { useState } from "react";
import Resume from "./Resume";
import Product from "./Product";
import { createProduct } from "../utils/Woocommerce";
import ProductDetail from "./ProductDetail";

const Products = ({ products, showLoadFile }) => {

  const creteProducts = () => {
    console.log(products[3]);
    createProduct(products[3]);
  };

  const localProducts = JSON.parse(localStorage.getItem('localProducts')) ?? [];

  const [showCurrentProductDetail, setShowCurrentProductDetail] = useState(false)

  const [currentProduct, setCurrentProduct] = useState({})

  return (
    <div className="sticky">
      <div className="px-10">
        {/* <ProductDetail showCurrentProductDetail={showCurrentProductDetail} setShowCurrentProductDetail={setShowCurrentProductDetail} currentProduct={currentProduct} /> */}

        {/* {!showLoadFile && (
          <Resume
            quantity={products.length}
            brand={!showLoadFile && products[2][4]}
          />
        )} */}


        <div className="flex justify-between mt-20">
          <h2 className="py-6 my-auto top-24 text-4xl font-bold text-gray-700">
            Productos
          </h2>
          <button
            onClick={() => creteProducts(products)}
            className="px-10 my-5 col-end-7 col-span-2 group relative py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-400"
          >
            Crear Productos
          </button>
        </div>
        <div className="pb-6">
          {products.map(
            (product, index) =>
              index > 2 && <Product key={index} product={product} index={index} setCurrentProduct={setCurrentProduct} setShowCurrentProductDetail={setShowCurrentProductDetail} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
