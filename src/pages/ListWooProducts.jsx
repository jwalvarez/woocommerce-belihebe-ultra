import React, { useState, useEffect } from "react";
import { getProductsAttributes } from "../utils/getProductsAttributes";
import Select from "react-select";
import { getWooProducts } from "../utils/getWooProducts";

const ListWooProducts = () => {
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
        <button
          onClick={() => getProducts()}
          className="px-10 my-5 col-end-7 col-span-2 group relative py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-400"
        >
          Obtener productos
        </button>
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
