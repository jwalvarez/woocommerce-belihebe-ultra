import axios from "axios";
import { categories } from "../constants/categories";
import { getWooProductID } from "./getWooProductID";

const ck = import.meta.env.VITE_CONSUMER_KEY;
const cs = import.meta.env.VITE_CONSUMER_SECRET;

export async function updateProduct(product) {
  console.log("- - - - - - - - - - - - - -");
  const sku = product[3];
  const productID = sku.split("-")[1];

  // const sku = product[3]
  // const searchResult = await getWooProductID(product[5])
  // const id = searchResult.filter(e => e.name == product[5])[0].id;
  // console.log('ID: ',id);
  // console.log('NAME: ',product[5]);
  console.log(product);
  const wooProduct = {
    // id: id,
    // sku: sku,
    name: `${product[13]} ${product[5]}`,
    // type: "simple",
    // status: "private",
    // regular_price: product[8].toString(),
    description: `
    <strong>¿QUÉ ES?</strong>

    ${product[9]}

    <strong>¿BENEFICIOS?</strong>

    ${product[10]}

    <strong>¿ACTIVOS PRINCIPALES?</strong>

    ${product[11]}

    <strong>¿MODO DE USO?</strong>

    ${product[12]}
    `,
    short_description: product[7],
    // categories: [
    //   { id: categories.filter((e) => e.name === product[14])[0].id },
    //   { id: categories.filter((e) => e.name === product[15])[0]?.id },
    //   { id: categories.filter((e) => e.name === product[16])[0]?.id },
    //   { id: categories.filter((e) => e.name === product[17])[0]?.id },
    // ],
    attributes: [
      {
        id: 3,
        options: [product[13]],
        visible: true,
      },
      {
        id: 16,
        options: [
          product[14],
          product[15] ?? "",
          product[16] ?? "",
          product[17] ?? "",
        ],
        visible: true,
      },
      {
        id: 17,
        options: [
          product[18],
          product[19],
          product[20] ?? "",
          product[21] ?? "",
        ],
        visible: true,
      },
      {
        id: 4,
        options: [product[22]],
        visible: true,
      },
      {
        id: 5,
        options: [product[23]],
        visible: true,
      },
      {
        id: 7,
        options: [product[24]],
        visible: true,
      },
      {
        id: 12,
        options: [product[25]],
        visible: true,
      },
      {
        id: 6,
        options: [product[26]],
        visible: true,
      },
      {
        id: 11,
        options: [product[27]],
        visible: true,
      },
      {
        id: 13,
        options: [product[28]],
        visible: true,
      },
      {
        id: 14,
        options: [product[29]],
        visible: true,
      },
      {
        id: 15,
        options: [product[30]],
        visible: true,
      },
      {
        id: 8,
        options: [product[31]],
        visible: true,
      },
      {
        id: 9,
        options: [product[32]],
        visible: true,
      },
    ],
    // images: [
    //   {
    //     // src: `https://www.${product[0]}`,
    //     src: `${product[0]}`,
    //   },
    //   {
    //     // src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg",
    //     // src: `https://www.${product[1]}`,
    //     src: `${product[1]}`,
    //   },
    // ],
  };

  console.log(wooProduct);

  await axios({
    method: "put",
    url: `https://www.belihebe.com/wp-json/wc/v3/products/${productID}?consumer_key=${ck}&consumer_secret=${cs}`,
    data: wooProduct,
  })
    .then(function (response) {
      console.log("PRODUCTO MODIFICADO");
      console.log(response);
    })
    .catch(function (error) {
      console.log("ERROR AL MODIFICAR PRODUCTO");
      console.log(error);
    });
}
