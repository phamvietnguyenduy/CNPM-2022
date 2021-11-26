import React from "react";
//Components
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import GridLayout from "./GridLayout/GridLayout";
import Items from "./Items/Items";
import MenuLeft from "./MenuLeft/MenuLeft";
import Footer from "./Footer/Footer";
//Image
import BannerImage2 from "../images/BannerImage.jpeg";
import BannerImage from "../images/YuruCamp.jpg";
//DUMMY DATA
const DUMMY_DATA = [
  { id: 1, image: BannerImage, name: "YuruCamp", price: 20, sold: 2000 },
  { id: 2, image: BannerImage, name: "YuruCamp", price: 20, sold: 2000 },
  { id: 3, image: BannerImage, name: "YuruCamp", price: 20, sold: 2000 },
  { id: 4, image: BannerImage, name: "YuruCamp", price: 20, sold: 2000 },
];
//Styles

export default function Shop() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "80px" }}>
        <Banner image={BannerImage2} />
      </div>
      <div class="row pad">
        <div class="col-4">
          <MenuLeft />
        </div>
        <div class="col-8">
          <GridLayout header="">
            {DUMMY_DATA.map((item) => {
              return (
                <Items
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  sold={item.sold}
                />
              );
            })}
          </GridLayout>
        </div>
      </div>
      <Footer />
    </>
  );
}
