import React from "react";
//Styles
import { Wrapper, Content } from "./GridLayout.styles";
export default function GridLayout({ header, children }) {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
}
