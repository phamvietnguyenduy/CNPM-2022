import React from "react";
//Components
import Header from "./Header/Header";
import HeroImage from "./HeroImage/HeroImage";
import GridLayout from "./GridLayout/GridLayout";
import Items from "./Items/Items";
import Footer from "./Footer/Footer";
//Image
import Banner from "../images/YuruCamp.jpg";
//DUMMY DATA
const DUMMY_DATA = [
  { id: 1, image: Banner, name: "YuruCamp", price: 20 },
  { id: 2, image: Banner, name: "YuruCamp", price: 20 },
  { id: 3, image: Banner, name: "YuruCamp", price: 20 },
  { id: 4, image: Banner, name: "YuruCamp", price: 20 },
];
export default function Home() {
  return (
    <>
      <Header />
      <HeroImage image={Banner} />
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
