import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
//Components
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import Pagination from "./Pagination/Pagination";
import ReactPaginate from "react-paginate";
//DUMMY DATA
import sale from "../images/sale.jpg";
import { DATA } from "./DUMMY_DATA";
import api from "./api";
import {useState, useEffect} from 'react';
import PaginationL from "./PaginationL/PaginationL";
import Items from "./Items/Items";
import DetailsInfo from "./DetailsInfo/DetailsInfo";
//Styles

export default function Shop({ category }) {
  document.title = "Shop";
  const [pageCount,setpageCount] = useState(0);
  const [Posts,setPosts] = useState([]);  
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
  const idpro = new URLSearchParams(search).get('idpro');
  // lấy dữ liệu từ api khi load hoặc load lại trang
  useEffect(() => {        
    if (window.sessionStorage.getItem("currentPage") === null) {
      window.sessionStorage.setItem("currentPage",1);
    }
    if (id === null && idpro === null) {
      api.APIPost("shop?page="+window.sessionStorage.getItem("currentPage")).then(res =>{    
        // console.log(res.data.allproduct);        
        setPosts(res.data.allproduct.data);
        setpageCount(res.data.allproduct.last_page);
      })
    }if(id !== null){
      api.APIPost("shop/category?id="+id).then(res =>{    
        console.log(res.data.productcate);        
        setPosts(res.data.productcate.data);
        setpageCount(res.data.productcate.last_page);
      })
    }if(idpro !== null){
      api.APIPost("shop/detail?idpro="+idpro).then(res =>{    
        console.log(res.data.productdetail);        
        setPosts(res.data.productdetail);
        setpageCount(0);
      })
    }
    
    
  }, [search])

  // nhả dữ liệu
  const renderPost = ()=> {     
    if (idpro === null) {
     
      return Posts.map((item)=>{
        return (
         <Link to={"?idpro="+item.product_id}>
          <Items
          name={item.name}
          price={item.price}
          />
          </Link>
        );
      }
      ); 
    }else{
      return Posts.map((item)=>{
        return (
         <DetailsInfo title={item.name} price={item.price}></DetailsInfo>
        );
      });
    }
  }  

  // trả về dữ liệu khi đổi trang
  const changePage = ({ selected }) => {
    if (id === null) {
      api.APIPost("shop?page="+(selected+1)).then(res =>{           
        setPosts(res.data.allproduct.data);
        window.sessionStorage.setItem("currentPage",selected +1);     
      })
    }else{
      api.APIPost("shop/category?page="+(selected+1)+"&&id="+id).then(res =>{           
        setPosts(res.data.productcate.data);
        window.sessionStorage.setItem("currentPage",selected +1);     
      })
    }
  }
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
            {category === "" &&     
                 renderPost().length === 0 ? <h1>Loading................</h1>: renderPost()
            
            }            
            {pageCount === 0  ? null : <PaginationL
              pagecount={pageCount}
              pagechange={changePage}
            />}
              
            {console.log(pageCount)}
            {/* {category === "items1" && (
              <Pagination
                arrItems={DATA}
                itemPerPage={3}
                header=" not popular items"
              />
            )}

            {category === "clothes" && (
              <Pagination arrItems={DATA} itemPerPage={3} header="Clothes" />
            )} */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
