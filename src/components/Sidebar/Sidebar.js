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
            {/* {SidebarData().map((item, index) => {
              return <div>{item.name}  </div>;
            })} */}
            {console.log(SidebarData())}

          </SidebarWrap>
        </SidebarNav>
      </Content>
    </Wrapper>
  );
}
