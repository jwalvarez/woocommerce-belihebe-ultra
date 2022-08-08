import React, { useState } from "react";
import axios from "axios";

import { getSiigoToken } from "../utils/getSiigoToken";

const UpdateSiigoProducts = () => {
  const [siigoToken, setSiigoToken] = useState("");

  const saveSiigoTokenToLocalStorage = (event) => {
    event.preventDefault();
    const token = event.target[0].value;
    localStorage.setItem("siigo_access_token", token);
    setSiigoToken(token);
    getSiigoProducts(token);
  };

  const getSiigoProducts = (authorization_token) => {
    var data = "";

    var config = {
      method: "get",
      url: "https://api.siigo.com/v1/products",
      headers: {
        Authorization: authorization_token,
        "Access-Control-Allow-Origin": "*",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="h-screen bg-[#F6F7FC] p-10">
      <h1 className="font-black text-3xl text-indigo-600 text-left">
        Actualizar Productos en Siigo
      </h1>
      <form
        onSubmit={saveSiigoTokenToLocalStorage}
        className="flex justify-start space-x-4"
      >
        <input
          type="text"
          name="siigo_token"
          placeholder="Access Token"
          className="input w-full max-w-xs"
        />
        <button
          className="btn normal-case tooltip tooltip-right"
          data-tip="Guardar Token de autenticación de siigo nube"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default UpdateSiigoProducts;
