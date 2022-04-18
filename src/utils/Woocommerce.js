import axios from "axios";

const ck = import.meta.env.VITE_CONSUMER_KEY
const cs = import.meta.env.VITE_CONSUMER_SECRET

export function createProduct(product) {
  console.log(ck, cs)
  console.log("CREANDO PRODUCTO");
  const wooProduct = {
    name: "Premium Quality",
    type: "simple",
    status: "private",
    regular_price: "21.99",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    short_description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    category: ["Corporal"],
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
