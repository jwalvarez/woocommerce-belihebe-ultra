import axios from "axios";

const ck = import.meta.env.VITE_CONSUMER_KEY;
const cs = import.meta.env.VITE_CONSUMER_SECRET;

export async function getWooProductID(word) {
  let res;
  await axios({
    method: "get",
    url: `https://www.belihebe.com/wp-json/wc/v3/products?search=${encodeURI(word)}&consumer_key=${ck}&consumer_secret=${cs}`,
  })
    .then(function (response) {
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
}
