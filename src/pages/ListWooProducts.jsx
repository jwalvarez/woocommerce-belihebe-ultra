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

  /**
   * It takes a string, splits it into an array of strings, and returns the array.
   * @returns An array of strings.
   */
  async function getDescription(description) {
    description = description
      .replace(/<[^>]+>/g, "")
      .replaceAll('"', '')
      .replaceAll("¿QUÉ ES?", "")
      .replaceAll("&nbsp;", "")
      .replaceAll('&amp;', '&')
      .replaceAll("&gt;", ">")
      .replace("ACTIVOS PRINCIPALES", "¿ACTIVOS PRINCIPALES?")
      .replace("MODO DE USO", "¿MODO DE USO?")
      .replace("BENEFICIOS", "¿BENEFICIOS?");

    // console.log(description.split(/¿[a-z\s]+\?/i)[0]);

    return description.split(/¿+[a-z\s]+\?+/i);
  }

  function getAttribute() { }

  // todo: Match every object with a column in a row for the csv
  /**
   * It takes an array of objects, and returns a CSV file
   */
  async function saveProducts() {
    console.log("Click")

    let products = [
      [],
      [],
      [
        "IMAGEN DEL PRODUCTO (FONDO BLANCO)",
        "2DA IMAGEN (EMPAQUE)",
        "3RA IMAGEN (TEXTURA)",
        "SKU",
        "MARCA",
        "NOMBRE OFICIAL",
        "LÍNEA ESPECÍFICA",
        "DESCRIPCIÓN CORTA DEL PRODUCTO (QUE VENDE)",
        "PRECIO",
        "¿QUÉ ES?",
        "¿BENEFICIOS?",
        "¿ACTIVOS PRINCIPALES?",
        "¿MODO DE USO?",
        "1.MARCA",
        "2.1 CATEGORÍA",
        "2.2 CATEGORÍA",
        "2.3 CATEGORÍA",
        "2.4 CATEGORÍA",
        "3.1 ¿CUÁL ES TU NECESIDAD?",
        "3.2 ¿CUÁL ES TU NECESIDAD?",
        "3.3 ¿CUÁL ES TU NECESIDAD?",
        "3.4 ¿CUÁL ES TU NECESIDAD?",
        "4.TIPO DE PIEL",
        "5.MODO DE USO",
        "6.TEXTURA",
        "7.CONTENIDO (COLOMBIA)",
        "8.FACTOR DE PROTECCIÓN SOLAR",
        "9.COLOR",
        "10.TESTADO DERMATOLÓGICAMENTE",
        "11.TESTADO OFTALMOLÓGICAMENTE",
        "12.TESTADO EN ANIMALES",
        "13.GÉNERO",
        "14.PAÍS",
      ],
    ];
    for (const p of wooProducts) {
      let brand =
        p["attributes"].filter((a) => a.name == "MARCA")[0].options[0] ?? "";
      const regex = new RegExp(`${brand}`, "i");
      let description = await getDescription(p["description"]);
      products.push([
        p["images"][0]["src"].replace("https://", ""),
        p["images"][1]?.["src"].replace("https://", ""),
        p["images"][2]?.["src"].replace("https://", ""),
        p["sku"],
        brand,
        p["name"],
        "Specific line",
        `"${p["short_description"]
          .replace(regex, "")
          .replace(/<[^>]+>/g, "")
          .replaceAll('&nbsp;', '')
          .replaceAll('&amp;', '&')
          .replaceAll('&#8211;', '-')
          .replaceAll("\n", "")}"`,
        p["price"],
        `"${description[0]}"`,
        `"${description[1]}"`,
        `"${description[2]}"`,
        `"${description[3]}"`,
        p["attributes"].filter((a) => a.name == "MARCA")[0].options[0] ?? "",
        p["attributes"].filter((a) => a.name == "CATEGORÍA")[0]?.options[0] ??
        "",
        p["attributes"].filter((a) => a.name == "CATEGORÍA")[0]?.options[1] ??
        "",
        p["attributes"].filter((a) => a.name == "CATEGORÍA")[0]?.options[2] ??
        "",
        p["attributes"].filter((a) => a.name == "CATEGORÍA")[0]?.options[3] ??
        "",
        p["attributes"].filter((a) => a.name == "¿CUÁL ES TU NECESIDAD?")[0]
          ?.options[0] ?? "",
        p["attributes"].filter((a) => a.name == "¿CUÁL ES TU NECESIDAD?")[0]
          ?.options[1] ?? "",
        p["attributes"].filter((a) => a.name == "¿CUÁL ES TU NECESIDAD?")[0]
          ?.options[2] ?? "",
        p["attributes"].filter((a) => a.name == "¿CUÁL ES TU NECESIDAD?")[0]
          ?.options[3] ?? "",
        p["attributes"].filter((a) => a.name == "TIPO DE PIEL")[0]
          ?.options[0] ?? "",
        p["attributes"].filter((a) => a.name == "MODO DE USO")[0]?.options[0] ??
        "",
        p["attributes"].filter((a) => a.name == "TEXTURA")[0]?.options[0] ?? "",
        p["attributes"].filter((a) => a.name == "CONTENIDO")[0]?.options[0] ??
        "",
        p["attributes"].filter((a) => a.name == "FACTOR DE PROTECCIÓN SOLAR (SPF)")[0]?.options[0] ?? "",
        p["attributes"].filter((a) => a.name == "COLOR")[0]?.options[0] ?? "",
        p["attributes"].filter((a) => a.name == "TESTADO DERMATOLÓGICAMENTE")[0]
          ?.options[0] ?? "",
        p["attributes"].filter((a) => a.name == "TESTADO OFTALMOLÓGICAMENTE")[0]
          ?.options[0] ?? "",
        p["attributes"].filter((a) => a.name == "TESTADO EN ANIMALES")[0]
          ?.options[0] ?? "",
        p["attributes"].filter((a) => a.name == "GENERO")[0]?.options[0] ?? "",
        p["attributes"].filter((a) => a.name == "PAÍS")[0]?.options[0] ?? "",
      ]);
    }
    console.log(products)
    downloadCSV(products);
  }

  /**
   * It takes an array of arrays, and creates a CSV file from it.
   */
  function downloadCSV(rows) {
    let csvContent = "";

    rows.forEach(function (rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
    });

    var link = window.document.createElement("a");
    link.setAttribute(
      "href",
      "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csvContent)
    );
    link.setAttribute("download", `${selectedAttribute.label}.csv`);
    link.click();
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

  /**
   * When the user clicks the button, show a toast with a loading message, then show a success message
   * when the promise resolves, or an error message if it rejects.
   * @returns a promise.
   */
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
