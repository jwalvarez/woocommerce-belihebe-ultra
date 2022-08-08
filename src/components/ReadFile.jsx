import React, { useState, useEffect } from "react";
import readXlsxFile from "read-excel-file";
import Products from "./Products";

const ReadFile = ({ showLoadFile, setProducts, setShowLoadFile }) => {
  // const input = document.getElementById("input");

  // Arrow function
  const readExcel = () => {
    const input = document.getElementById("input");
    input &&
      readXlsxFile(input.files[0]).then((rows) => {
        setProducts(rows);
        // localStorage.setItem('localProducts', JSON.stringify(rows));
        setShowLoadFile(false);
      });
  };

  return (
    <>
      {showLoadFile && localStorage.getItem("localProducts") == null ? (
        <div className="my-10  w-1/2 mx-auto">
          <div className="p-4 rounded-md border-dashed border-2 border-gray-600 hover:bg-gray-200 ease-linear duration-300">
            <label className="flex flex-col items-center px-4 py-6 rounded-lg cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              <span className="my-2 text-base leading-normal text-center">
                Selecciona un archivo para analizar (.xlsx)
              </span>
              <input
                type="file"
                id="input"
                className="text-indigo-600 pl-32 cursor-pointer"
              />
            </label>
          </div>
          <button
            onClick={readExcel}
            type="submit"
            className="w-full px-10 my-5 col-end-7 col-span-2 group relative py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-400"
            // className="my-3 col-end-7 col-span-2 group w-full py-3 px-6 text-sm font-medium rounded-3xl text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Leer Excel
          </button>
        </div>
      ) : (
        <span className="p-24 inline-block align-middle justify-center">
          Los productos se han leido. Por favor ve a la Sección de Productos, o
          bien haz click aquí
        </span>
      )}
    </>
  );
};

export default ReadFile;
