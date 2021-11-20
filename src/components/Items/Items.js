import React from "react";
//Styles
import { Wrapper, Image } from "./Items.styles";
export default function Items({ image, name, price }) {
  return (
    <>
      <Wrapper>
        <Image src={image} alt="movie-thumb" />
        <div>
          <h1>{name}</h1>
          <label>{price}</label>
        </div>
      </Wrapper>
    </>
  );
}
