import React, { useState } from "react";
//Components
import { SidebarData } from "./SidebarData";
import { Submenu } from "./Submenu";
//Styles
import { Wrapper, Content, SidebarNav, SidebarWrap } from "./Sidebar.styles";
export default function MenuLeft() {
  return (
    <Wrapper>
      <Content>
        <SidebarNav>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <Submenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </Content>
    </Wrapper>
  );
}
