import React from "react";
//Components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import DetailsImage from "./DetailsImage/DetailsImage";
import DetailsInfo from "./DetailsInfo/DetailsInfo";
import Comment from "./Comment/Comment";
import {useState, useEffect} from 'react';
import api from "./api";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
//Image
import Image from "../images/YuruCamp.jpg";
export default function Details() {
  const [Posts,setPosts] = useState([]);  
  const search = useLocation().search;
  const idpro = new URLSearchParams(search).get('idpro');
useEffect(() => {
  api.APIPost("shop/detail?idpro="+idpro).then(res =>{    
    console.log(res.data.productdetail);        
    setPosts(res.data.productdetail);    
  })
}, [])
const renderPost = ()=> {     
  return Posts.map((item)=>{
    return(
      <div class="row">
          <div class="col-sm-4">
            <DetailsImage srcImg={Image} alt="items" />
          </div>
          <div class="col-sm-8">
            <DetailsInfo title={item.name} price={item.price} />
          </div>
        </div>
    );
  });
}  
  
  return (
    <>
      <Header style={{ backgroundColor: "black" }} />
      
      <div style={{ maxWidth: "100%" }} className="container">
        
        {renderPost()}
        <div style={{ border: "1px solid blue", margin: "0 20px 20px 10px" }}>
          <h1 style={{ paddingLeft: "20px" }}>Comment</h1>

          <Comment username="Test" avatar={Image} />
          <Comment username="Test" avatar={Image} />
          <Comment username="Test" avatar={Image} />
          <Comment username="Test" avatar={Image} />
        </div>
      </div>
      <Footer />
    </>
  );
}
