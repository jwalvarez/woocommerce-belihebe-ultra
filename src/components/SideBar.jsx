import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-1/4 fixed h-screen bg-gradient-to-tr from-indigo-400 to-indigo-300 shadow-2xl">
      <div className="rounded-xl shadow-lg backdrop-blur-md bg-white/30 hover:bg-white/70 ease-linear duration-300 m-4 p-6 cursor-default">
        <span className="my-auto flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-indigo-500 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <h2 className="text-indigo-500 text-2xl font-black my-auto ml-2">
            woo-belihebe
          </h2>
        </span>
      </div>
      <ul>
        <li>
          <span className="my-0 px-6 py-2 flex">
            <Link to="/">
              <h2 className="cursor-pointer text-indigo-200 hover:text-indigo-50 text-xl font-black my-auto ml-2">
                Home
              </h2>
            </Link>
          </span>
        </li>
        <li>
          <span className="my-0 px-6 py-2 flex">
            <Link to="products/create">
              <h2 className="cursor-pointer text-indigo-200 hover:text-indigo-50 text-xl font-black my-auto ml-2">
                Montar Productos
              </h2>
            </Link>
          </span>
        </li>
        <li>
          <span className="my-0 px-6 py-2 flex">
            <Link to="products/list">
              <h2 className="cursor-pointer text-indigo-200 hover:text-indigo-50 text-xl font-black my-auto ml-2">
                Descargar Productos
              </h2>
            </Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
