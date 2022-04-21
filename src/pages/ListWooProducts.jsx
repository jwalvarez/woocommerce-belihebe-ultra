import React, { useState, useEffect } from "react";
import { getProductsAttributes } from "../utils/getProductsAttributes";
import Select from "react-select";
import { getWooProducts } from "../utils/getWooProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListWooProducts = () => {
  const notify = () => {
    toast.success(`Se han leido todos los productos`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
      icon: "👌",
    });
  };

  const [attributes, setAttributes] = useState([
    { value: 12, label: "Cargando marcas..." },
  ]);

  const [selectedAttribute, setSelectedAttribute] = useState({
    label: "Academie",
  });

  const [wooProducts, setWooProducts] = useState([]);

  useEffect(() => {
    getAttributes(3);
  }, []);

  async function getAttributes(id) {
    const wooAttributes = await getProductsAttributes(id);

    wooAttributes.forEach((o) => {
      (o["value"] = o["id"]),
        (o["label"] = o["name"]),
        delete o["id"],
        delete o["name"];
    });

    setAttributes(wooAttributes);
  }

  async function toastGetProducts() {
    await toast.promise(getProducts(), {
      pending: {
        render() {
          return `Obteniendo productos desde WooCommercer`;
        },
        theme: "dark",
        icon: "🔥",
        position: toast.POSITION.BOTTOM_RIGHT,
      },
      success: {
        render() {
          return `Se han leido los productos correctamente`;
        },
        theme: "colored",
        icon: "🍕",
      },
      error: `Error al cargar productos :c`,
    });
  }

  async function getProducts() {
    console.log("Obteniendo Productos");
    let page = 9;
    const n = 1;
    let stop = false;
    let products = [];
    while (!stop) {
      console.log("Page 🍒 ", page);
      let tmpP = await getWooProducts(page);
      tmpP.forEach((p) => {
        p["attributes"][0]?.["name"] == "MARCA" &&
          p["attributes"][0]?.["options"][0] == selectedAttribute.label &&
          products.push(p);
      });
      page++;
      stop = tmpP.length == 0 && true;
    }
    console.log(products);
    console.log("Productos recibidos 🔥");
    setWooProducts(products);
  }

  const handleChange = (e) => {
    const selectedValue = attributes.find(
      (attribute) => attribute["value"] == e.target.value
    );
    setSelectedAttribute(selectedValue);
  };

  return (
    <div className="pt-10 mx-10 my-auto h-full mt-2">
      <ToastContainer />

      <h2 className="my-auto top-24 text-4xl text-left font-bold text-gray-700">
        Descargar Productos ({selectedAttribute.label})
      </h2>
      <div className="flex justify-between">
        {/* <Select
          className="w-1/2 py-6 my-auto font-bold text-gray-700"
          options={attributes}
          onChange={handleChange}
        /> */}
        <select
          className="bg-indigo-50/40 my-auto py-3 pl-4 pr-20 rounded"
          onChange={handleChange}
        >
          {attributes.map((option) => (
            <option
              key={option.value}
              value={option.value}
              label={option.label}
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="flex">
          <button className="flex px-10 mx-2 my-5 col-end-7 col-span-2 group relative py-3 border border-indigo-500 text-sm font-medium rounded-md text-indigo-600 focus:ring-offset-2 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-download mr-4"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
            Descargar
          </button>
          <button
            onClick={() => toastGetProducts()}
            className="px-10 my-5 mx-2 col-end-7 col-span-2 group relative py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-400"
          >
            Obtener productos
          </button>
        </div>
      </div>
      <ul className="pb-10">
        {wooProducts.map(
          (p) =>
            p["attributes"][0]?.["name"] == "MARCA" && (
              <div
                className="flex justify-between bg-gray-100 rounded-lg text-indigo-600 font-normal py-2 px-4 my-1 text-left"
                key={p["id"]}
              >
                <span>{p.name}</span>
                <span className="bg-indigo-100 px-4 py-1 rounded-xl text-sm">
                  {p["attributes"][0]?.["options"][0]}
                </span>
              </div>
            )
        )}
      </ul>
    </div>
  );
};

export default ListWooProducts;
