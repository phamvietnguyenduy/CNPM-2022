import React from "react";
//Styles
import { Wrapper, Image } from "./Items.styles";
export default function Items({ image, name, price, sold }) {
  return (
    <>
      <Wrapper>
        <Image src={image} alt="movie-thumb" />

        <div className="row">
          <div class="col">{name}</div>
          <div className="col right">
            <i class="fas fa-heart"></i>
          </div>
        </div>
        <div className="row">
          <div class="col">{`${price}$`}</div>
          <div className="col right">{`Sold at ${sold}$`}</div>
        </div>
      </Wrapper>
    </>
  );
}
