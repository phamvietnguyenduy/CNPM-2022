import React, { useState,useEffect } from "react";
//Components
import {SidebarData} from "./SidebarData";
import { Submenu } from "./Submenu";
import api from "../api";
//Styles
import { Wrapper, Content, SidebarNav, SidebarWrap } from "./Sidebar.styles";
import { Link } from "react-router-dom";
export default function MenuLeft() {

const [Posts,setPosts] = useState([]);  
useEffect(() => {
  api.APIPost("category").then(res =>{       
    // console.log(res.data.category);     
    setPosts(res.data.category);                      
  })  
},[])
const Category = ()=>{
  return Posts.map((item)=>{
      return(        
        <Link to={"?id="+item.category_id} >{item.name}</Link>
        
      );
  });
}


  return (
    <Wrapper>
      <Content>
        <SidebarNav>
          <SidebarWrap>
            {/* {Posts.map((item, index) => {
              return <Submenu item={item} index={index} />;
            })}             */}
            {Category()}

          </SidebarWrap>
        </SidebarNav>
      </Content>
    </Wrapper>
  );
}
