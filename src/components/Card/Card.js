import React from "react";
import { Image } from "./Card.styles";
const Card = () => {
  return (
    <div className="container">
      <div className="row">
        <div class="col-sm">
          <Image
            src="https://order.tokago.vn/uploads/2021/2/6/11/9/ed522ead3745b1c0709f76081662ab8b.jpg"
            width="178px"
            height="178px"
          />
        </div>
        <div className="col-sm">
          <h2>HiFi T-shirt</h2>
        </div>
        <div className="col-sm">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <span>Price</span>
                <br />
                <span>120$</span>
              </div>

              <div className="col-sm">
                <span>Price</span>
                <br />
                <span>120$</span>
              </div>

              <div className="col-sm">
                <span>Price</span>
                <br />
                <span>120$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
