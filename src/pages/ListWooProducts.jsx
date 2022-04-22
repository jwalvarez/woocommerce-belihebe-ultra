import React, { useState, useEffect } from "react";
import { getProductsAttributes } from "../utils/getProductsAttributes";
import Select from "react-select";
import { getWooProducts } from "../utils/getWooProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmptyProductList from "../components/EmptyProductList";
import LoadingProductFromWooCommerce from "../components/LoadingProductFromWooCommerce";

const ListWooProducts = () => {
  const [attributes, setAttributes] = useState([
    { value: 12, label: "Cargando marcas..." },
  ]);

  const [selectedAttribute, setSelectedAttribute] = useState({
    label: "Academie",
  });

  const [wooProducts, setWooProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Obtener atributos con id=3, es decir, MARCAS
    getAttributes(3);
  }, []);

  // todo: Match every object with a column in a row for the csv
  async function saveProducts() {
    let products = [];
    for (const p of wooProducts) {
      // wooProducts.forEach((p) => {
      products.push([
        //todo: FIX THIS LINE, image uri is not acceted by web to download csv :c
        p["images"][0],
        "as",
        "as",
        p["sku"],
        "brand",
        p["name"],
        "linea especìfica",
        "descriociob corta",
        "precio",
        "QUE ES",
        "BENEFICIOS",
        "ACTIVOS PRINCIPALES",
        "MODO DE USO",
        "MARCA",
        "CATEGORIA 1",
        "CATEGORIA 2",
        "CATEGORIA 3",
        "CATEGORIA 4",
        "NECESIDAD 1",
        "NECESIDAD 2",
        "NECESIDAD 3",
        "NECESIDAD 4",
        "TIPO DE PIEL",
      ]);
    }
    // );

    // const rows = [
    //   ["name1", "city1", "some other info"],
    //   ["name2", "city2", "more info"],
    // ];
    // console.log(rows);

    downloadCSV(products);
    console.log("No se debe imprimir");
  }

  function downloadCSV(rows) {
    let csvContent = "data:text/csv;charset=utf-8,";

    rows.forEach(function (rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
    });

    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  }

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
    setIsLoading(true);
    let page = 1;
    const n = 1;
    let stop = false;
    let products = [];
    setWooProducts(products);
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
    console.log("Productos recibidos 🔥");
    setIsLoading(false);
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

      <h2 className="my-auto top-24 text-4xl text-left font-black text-gray-700">
        Listar Productos (
        <span className="text-indigo-400"> {selectedAttribute.label} </span>)
      </h2>
      <div className="flex justify-between">
        {/* <Select
          className="w-1/2 py-6 my-auto font-bold text-gray-700"
          options={attributes}
          onChange={handleChange}
        /> */}
        <select
          className="text-indigo-400 text-xl font-black my-auto"
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
          {wooProducts.length != 0 && (
            <button
              onClick={saveProducts}
              className="flex px-10 mx-2 my-5 col-end-7 col-span-2 group relative py-3 border border-indigo-500 text-sm font-medium rounded-md text-indigo-600 focus:ring-offset-2 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-download mr-4 my-auto"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              Descargar
            </button>
          )}
          <button
            onClick={() => toastGetProducts()}
            disabled={isLoading}
            className={
              isLoading
                ? "animate-pulse flex px-10 my-5 mx-2 col-end-7 col-span-2 group relative py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-400/80 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 shadow-lg shadow-gray-300"
                : "flex px-10 my-5 mx-2 col-end-7 col-span-2 group relative py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-400"
            }
          >
            Listar productos
            {isLoading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lightning-charge my-auto ml-2"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        {wooProducts.length == 0 ? (
          isLoading ? (
            <LoadingProductFromWooCommerce />
          ) : (
            <EmptyProductList />
          )
        ) : (
          <ul className="pb-10 w-full">
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
        )}
      </div>
    </div>
  );
};

export default ListWooProducts;
