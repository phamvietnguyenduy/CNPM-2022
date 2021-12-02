import React from "react";
//Components
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import MenuLeft from "./MenuLeft/MenuLeft";
import Footer from "./Footer/Footer";
import Pagination from "./Pagination/Pagination";

//DUMMY DATA
import sale from "../images/sale.jpg";
import { DATA } from "./DUMMY_DATA";
//Styles

export default function Shop() {
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
            <MenuLeft />
          </div>
          <div class="col-8">
            <Pagination
              itemPerPage={4}
              arrItems={DATA}
              header={"Popular Items"}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
