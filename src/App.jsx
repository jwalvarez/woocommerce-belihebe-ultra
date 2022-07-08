import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Product from "./components/Product";
import Resume from "./components/Resume";
import SideBar from "./components/SideBar";
import Products from "./components/Products";
import ReadFile from "./components/ReadFile";
import ListWooProducts from "./pages/ListWooProducts";
import Settings from "./pages/Settings";

function App() {
  const [products, setProducts] = useState([]);
  const [showLoadFile, setShowLoadFile] = useState(true);

  return (
    // <div className="p-6 h-screen md:w-3/6 w-[90] mx-auto">
    <div className="App">
      {/* {products.length != 0 && (
        <Header products={products.length != 0 && products} />
      )} */}
      <div className="h-screen flex justify-center">
        <div className="w-1/3">
          <SideBar />
        </div>
        <div className="w-full">
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  // showLoadFile, setProducts, setShowLoadFile
                  <ReadFile
                    showLoadFile={showLoadFile}
                    setProducts={setProducts}
                    setShowLoadFile={setShowLoadFile}
                  />
                }
              ></Route>
              <Route
                path="products/create"
                element={
                  <Products products={products} showLoadFile={showLoadFile} />
                }
              ></Route>
              <Route path="products/list" element={<ListWooProducts />}></Route>
              <Route path="settings" element={<Settings />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
