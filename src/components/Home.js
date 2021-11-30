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
import md from "../images/md.jpg";
import sale from "../images/sale.jpg";
import mod1 from "../images/mod1.jpg";
import mod2 from "../images/mod2.jpg";
import mod3 from "../images/mod3.jpg";
import mod4 from "../images/mod4.jpg";
import "../../src/style.css";
//DUMMY DATA

const DUMMY_DATA = [
  { id: 1, image:md, name: "md", price: "200$" , dis:"30%",class:"discount"},
  { id: 2, image:md, name: "YuruCamp", price: "200$" , dis:"35%",class:"discount1"},
  { id: 3, image: md, name: "YuruCamp", price: "200$" , dis:"25%",class:"discount2"},
  { id: 4, image: md, name: "YuruCamp", price: "200$" , dis:"20%",class:"discount"},
  { id: 5, image: md, name: "YuruCamp", price:"200$" , dis:"10%",class:"discount2"},
];
//Styles
//slide
const image=[
  {a: mod3,bg:'black' },{a:mod4,bg:'#d2b052'},{a:mod2,bg:'black'},{a:mod1,bg:'#d2b052'}
];
export default function Home() {
  document.title = "Home";

  return (
    <>
      <Header />
      <HeroImage image={image} />
      <Banner image={sale} />
      <GridLayout header="New items">
        {DUMMY_DATA.slice(0, 4).map((item) => {

          return (
            <Items
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              dis={item.dis}
              classi={item.class}

            />
          );
        })}
      </GridLayout>
      <GridLayout header="Popular items">
        {DUMMY_DATA.slice(0, 4).map((item) => {

          return (
            <Items
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              dis={item.dis}
              classi={item.class}
            />
          );
        })}
      </GridLayout>
      <nav aria-label="Page navigation example" style={{paddingbottom:'50px'}}>
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item"><a class="page-link" href="#">...</a></li>
          <li class="page-item"><a class="page-link" href="#">10</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
      <Footer />
    </>
  );
}
