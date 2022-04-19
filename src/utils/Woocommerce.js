import axios from "axios";
import { categories } from "../constants/categories"

const ck = import.meta.env.VITE_CONSUMER_KEY
const cs = import.meta.env.VITE_CONSUMER_SECRET

export function createProduct(product) {
  console.log("CREANDO PRODUCTO");
  const wooProduct = {
    name: product[5],
    type: "simple",
    status: "private",
    regular_price: product[8].toString(),
    description: `
    <strong>¿QUÉ ES?</strong>

    ${product[9]}

    ¿BENEFICIOS?

    ${product[10]}

    ¿ACTIVOS PRINCIPALES?

    ${product[11]}

    ¿MODO DE USO?

    ${product[12]}
    ` ,
    short_description: product[7],
    categories: [
      { "id": categories.filter(e => e.name === product[14])[0].id },
      { "id": categories.filter(e => e.name === product[15])[0]?.id },
      { "id": categories.filter(e => e.name === product[16])[0]?.id },
      { "id": categories.filter(e => e.name === product[17])[0]?.id },
    ],
    images: [
      {
        src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg",
      },
      {
        src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg",
      },
    ],
  };
  console.log(wooProduct);

  axios({
    method: "post",
    url: `https://www.belihebe.com/wp-json/wc/v3/products?consumer_key=${ck}&consumer_secret=${cs}`,
    data: wooProduct,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
