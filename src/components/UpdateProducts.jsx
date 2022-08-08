import React, { useState } from "react";
import Resume from "./Resume";
import Product from "./Product";
import { createProduct } from "../utils/Woocommerce";
import { updateProduct } from "../utils/UpdateWooProduct";
import ProductDetail from "./ProductDetail";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProducts = ({ products, showLoadFile }) => {
  const notify = (product) => {
    toast.success(`${product} Creado`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
      icon: "👌",
    });
  };

  async function updateProducts() {
    // console.log(createProduct(products[3]));
    // const response = await createProduct(products[3]);
    // console.log(response);
    // console.log("Esta linea no deberia imprimirse 🐦")

    let index = 0;
    for await (const product of products) {
      let response;
      if (index > 1) {
        await toast.promise(updateProduct(product), {
          pending: {
            render() {
              return `Actualizando ${product[5]}`;
            },
            theme: "dark",
            icon: "🥣",
            position: toast.POSITION.BOTTOM_RIGHT,
          },
          success: {
            render() {
              return `${product[5]} Actualizado`;
            },
            theme: "colored",
            icon: "🥝",
          },
          error: `Error al actualizar ${product[5]}`,
        });
      }
      index++;
    }

    console.log("Mostrar alert aqui :3");
  }

  const localProducts = JSON.parse(localStorage.getItem("localProducts")) ?? [];

  const [showCurrentProductDetail, setShowCurrentProductDetail] =
    useState(false);

  const [currentProduct, setCurrentProduct] = useState({});

  return (
    <div className="sticky">
      <ToastContainer />
      <div className="px-10">
        {/* <ProductDetail showCurrentProductDetail={showCurrentProductDetail} setShowCurrentProductDetail={setShowCurrentProductDetail} currentProduct={currentProduct} /> */}

        {/* {!showLoadFile && (
          <Resume
            quantity={products.length}
            brand={!showLoadFile && products[2][4]}
          />
        )} */}

        <div className="flex justify-between mt-2">
          <h2 className="py-6 my-auto top-24 text-4xl font-bold text-gray-700">
            Productos desde excel
          </h2>
          <button
            onClick={() => updateProducts(products)}
            className="px-10 my-5 col-end-7 col-span-2 group relative py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-400"
          >
            Actualizar Productos
          </button>
        </div>
        <div className="pb-6">
          {products.map(
            (product, index) =>
              index > 1 && (
                <Product
                  key={index + 1}
                  product={product}
                  index={index + 1}
                  setCurrentProduct={setCurrentProduct}
                  setShowCurrentProductDetail={setShowCurrentProductDetail}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
