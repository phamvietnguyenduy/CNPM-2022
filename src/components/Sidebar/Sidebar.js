import React, { useState, useEffect } from "react";
//Components
import { SidebarData } from "./SidebarData";
import { Submenu } from "./Submenu";
import api from "../api";
//Styles
import { Wrapper, Content, SidebarNav, SidebarWrap } from "./Sidebar.styles";
import { Link } from "react-router-dom";
export let categoryTitle = [];
export default function MenuLeft() {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    api.APIPost("category").then((res) => {
      setPosts(res.data.category);
    });
  }, []);
  const Category = () => {
    return Posts.map((item) => {
      categoryTitle.push(item.name);
      return <Submenu item={item} />;
    });
  };

  return (
    <Wrapper>
      <Content>
        <SidebarNav>
          <SidebarWrap>{Category()}</SidebarWrap>
        </SidebarNav>
      </Content>
    </Wrapper>
  );
}
