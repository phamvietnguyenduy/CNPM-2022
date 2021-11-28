import React from "react";
//Components
import Header from "./Header/Header";
import HeroImage from "./HeroImage/HeroImage";
import GridLayout from "./GridLayout/GridLayout";
import Items from "./Items/Items";
import Pagination from "./Pagination/Pagination";
import Footer from "./Footer/Footer";
import Banner from "./Banner/Banner";
//Image
import BannerImage from "../images/YuruCamp.jpg";
import BannerImage2 from "../images/BannerImage.jpeg";
//DUMMY DATA
import Arr from "./DUMMY_DATA.json";
//Styles

export default function Home() {
  document.title = "Home";

  return (
    <>
      <Header />
      <HeroImage image={BannerImage} />
      <Banner image={BannerImage2} />
      <GridLayout header="New items">
        {Arr.slice(0, 4).map((item) => {
          return (
            <Items
              key={item.id}
              image={`static/media/${item.image}.fd56f8db.jpg`}
              name={item.name}
              price={item.price}
              sold={item.sold}
            />
          );
        })}
      </GridLayout>
      <Pagination header="Popular items" arrItems={Arr} itemPerPage={8} />
      <Footer />
    </>
  );
}
