import React from "react";
//Components
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import GridLayout from "./GridLayout/GridLayout";
import Items from "./Items/Items";
import MenuLeft from "./MenuLeft/MenuLeft";
import Footer from "./Footer/Footer";
import Pagination from "./Pagination/Pagination";
//Image
import BannerImage2 from "../images/BannerImage.jpeg";
import BannerImage from "../images/YuruCamp.jpg";
//DUMMY DATA
import Arr from "./DUMMY_DATA.json";
//Styles

export default function Shop() {
  document.title = "Shop";
  console.log(Arr);
  return (
    <>
      <Header />
      <div style={{ marginTop: "80px" }}>
        <Banner image={BannerImage2} />
      </div>
      <div style={{ maxWidth: "100%" }} className="container">
        <div class="row">
          <div class="col-4">
            <MenuLeft />
          </div>
          <div class="col-8">
            <Pagination header="" arrItems={Arr} itemPerPage={9} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
