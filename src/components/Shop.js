import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
//Styles

export default function Shop({ category }) {
  document.title = "Shop";
  const [Pagecount,setPagecount] = useState(0);
  const [Posts,setPosts] = useState([]);  
  
  // lấy dữ liệu từ api
  useEffect(() => {
    
    if (window.sessionStorage.getItem("currentPage") === 1 || window.sessionStorage.getItem("currentPage") === null) {
      api.APIPost("shop").then(res =>{            
        setPosts(res.data.allproduct.data);
        setPagecount(res.data.allproduct.last_page);
        window.sessionStorage.setItem("currentPage",1);        
      })
    }else if(window.sessionStorage.getItem("currentPage") !== 1)
    {
      api.APIPost("shop?page="+window.sessionStorage.getItem("currentPage")).then(res =>{            
        setPosts(res.data.allproduct.data);
        setPagecount(res.data.allproduct.last_page);
      })
    }
    
  }, [])

  // nhả dữ liệu
  const renderPost = ()=> {     
    if (Posts !== []) {
     
      return Posts.map((item)=>{
        return (
          <h1>{item.name}</h1>
        );
      }); 
    }     
  }  
  const changePage = ({ selected }) => {
    api.APIPost("shop?page="+(selected+1)).then(res =>{            
      setPosts(res.data.allproduct.data);
      window.sessionStorage.setItem("currentPage",selected +1);
      // setPagecount(res.data.allproduct.last_page);
      // useEffect();
    })
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
                 renderPost()
            
            }
            
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={Pagecount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-link"}
                nextClassName={"page-link"}
                activeClassName={"active"}
                initialSelected={window.sessionStorage.getItem("currentPage")}
              />
            
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
