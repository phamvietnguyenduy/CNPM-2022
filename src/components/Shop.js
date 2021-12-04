import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import Pagination from "./Pagination/Pagination";

//DUMMY DATA
import sale from "../images/sale.jpg";
import { DATA } from "./DUMMY_DATA";
//Styles

export default function Shop({ category }) {
  document.title = "Shop";

  return (
    <>
      <Header style={{ backgroundColor: "black" }} />
      <div style={{ marginTop: "80px" }}>
        <Banner image={sale} />
      </div>
      <div style={{ maxWidth: "100%" }} className="container">
        <div class="row">
          <div class="col-4">
            <Sidebar />
          </div>
          <div class="col-8">
            {category === "" && (
              <Pagination
                arrItems={DATA}
                itemPerPage={3}
                header=" popular items"
              />
            )}

            {category === "items1" && (
              <Pagination
                arrItems={DATA}
                itemPerPage={3}
                header=" not popular items"
              />
            )}

            {category === "clothes" && (
              <Pagination arrItems={DATA} itemPerPage={3} header="Clothes" />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
