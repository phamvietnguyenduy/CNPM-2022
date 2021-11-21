import React from "react";
//Components
import Header from "./Header/Header";
import HeroImage from "./HeroImage/HeroImage";
import GridLayout from "./GridLayout/GridLayout";
import Items from "./Items/Items";
import Footer from "./Footer/Footer";
import Banner from "./Banner/Banner";
//Image
import BannerImage from "../images/YuruCamp.jpg";
import BannerImage2 from "../images/BannerImage.jpeg";
//DUMMY DATA
const DUMMY_DATA = [
  { id: 1, image: BannerImage, name: "YuruCamp", price: 20 },
  { id: 2, image: BannerImage, name: "YuruCamp", price: 20 },
  { id: 3, image: BannerImage, name: "YuruCamp", price: 20 },
  { id: 4, image: BannerImage, name: "YuruCamp", price: 20 },
];
//Styles

export default function Home() {
  return (
    <>
      <Header />
      <HeroImage image={BannerImage} />
      <Banner image={BannerImage2} />
      <GridLayout header="New items">
        {DUMMY_DATA.map((item) => {
          return (
            <Items
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </GridLayout>
      <GridLayout header="Popular items">
        {DUMMY_DATA.map((item) => {
          return (
            <Items
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </GridLayout>
      <Footer />
    </>
  );
}
