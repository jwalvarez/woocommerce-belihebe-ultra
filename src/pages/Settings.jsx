import React from "react";
import { useState } from "react";

const Settings = () => {
  const saveCredentialsToLocalStorage = () => {
    localStorage.setItem("secrect_key", "sk");
    localStorage.setItem("costumer_secrect", "cs");
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  return (
    <div className="bg-red-300 h-screen">
      Settings
      <h2>Configurar Credenciales</h2>
      <input
        onChange={inputChangeHandler}
        name="secrect_key"
        type="text"
        value="tbone"
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
      />
      <button
        onClick={saveCredentialsToLocalStorage}
        type="submit"
        className="w-full px-10 my-5 col-end-7 col-span-2 group relative py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-400"
      >
        Guardar Credenciales
      </button>
    </div>
  );
};

export default Settings;
