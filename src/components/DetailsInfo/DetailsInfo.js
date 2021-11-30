import React from "react";
//Styles
import { Wrapper, Content } from "./DetailsInfo.styles";
export default function DetailsInfo({ title, price }) {
  return (
    <>
      <Wrapper>
        <h1>{title}</h1>
        <Content>
          <p>
            A company description provides an overview of key aspects of your
            business, like what you do and what makes your business unique. ...
            Lenders and investors should see how your business has a place in
            the market, as well as its benefits to future customers.
          </p>
          <div className="row info-control">
            <div className="col-8">Total</div>
            <div className="col-4">{`${price}$`}</div>
          </div>
          <div className="info-control title">Color: </div>
          <div className="info-control title">
            Rating:
            <br />
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </Content>
      </Wrapper>
    </>
  );
}
