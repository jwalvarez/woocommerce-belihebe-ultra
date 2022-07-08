import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-1/4 fixed h-screen bg-gradient-to-tr from-indigo-50 to-indigo-100 shadow-2xl shadow-indigo-200">
      <div className="rounded-xl shadow-lg backdrop-blur-md bg-white/30 hover:bg-white/70 ease-linear duration-300 m-4 p-6 cursor-default">
        <span className="my-auto flex">
          <h2 className="text-indigo-500 text-2xl font-black my-auto mr-2">
            woo-belihebe
          </h2>
        </span>
      </div>
      <ul>
        <li>
          <span className="my-0 px-6 py-2 flex">
            <Link to="/">
              <h2 className="cursor-pointer text-indigo-500 hover:text-indigo-400 text-xl font-black my-auto ml-2">
                Cargar archivo (.xlsx)
              </h2>
            </Link>
          </span>
        </li>
        <li>
          <span className="my-0 px-6 py-2 flex">
            <Link to="products/create">
              <h2 className="cursor-pointer text-indigo-500 hover:text-indigo-400 text-xl font-black my-auto ml-2">
                Montar Productos
              </h2>
            </Link>
          </span>
        </li>
        <li>
          <span className="my-0 px-6 py-2 flex">
            <Link to="products/list">
              <h2 className="cursor-pointer text-indigo-500 hover:text-indigo-400 text-xl font-black my-auto ml-2">
                Descargar Productos
              </h2>
            </Link>
          </span>
        </li>
        <li>
          <span className="my-0 px-6 py-2 flex">
            <Link to="settings">
              <h2 className="cursor-pointer text-indigo-500 hover:text-indigo-400 text-xl font-black my-auto ml-2">
                Configurar
              </h2>
            </Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
