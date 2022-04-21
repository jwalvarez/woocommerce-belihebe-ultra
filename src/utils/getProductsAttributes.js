import axios from "axios";

const ck = import.meta.env.VITE_CONSUMER_KEY;
const cs = import.meta.env.VITE_CONSUMER_SECRET;

export async function getProductsAttributes(id) {
  console.log("OBTENIENDO ATRIBUTOS DE PRODUCTOS");
  let attributes;

  await axios({
    method: "get",
    url: `https://www.belihebe.com/wp-json/wc/v3/products/attributes/${id}/terms?consumer_key=${ck}&consumer_secret=${cs}&per_page=100`,
  })
    .then(function (response) {
      attributes = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return attributes;
}
