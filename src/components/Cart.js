import React from "react";
import Card from "./Card/Card";

export default function Cart() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>Shopping Cart</h1>
            <Card />
            <Card />
            <Card />
          </div>
          <div className="col-4">
            <h1>Total</h1>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-4 ">Total</div>
                <div className="col-2 text-right">Price</div>
              </div>
              <br />
              <div className="row justify-content-between">
                <div className="col-4">Delivery</div>
                <div className="col-2 text-right">Price</div>
              </div>
              <select className="form-control">
                <option>Large select</option>
              </select>
              <br />
              <div className="row justify-content-between">
                <div className="col-4">Discount</div>
                <div className="col-2 text-right">Price</div>
              </div>
              <select className="form-control">
                <option>Large select</option>
              </select>
              <br />
              <hr />
              <div className="row justify-content-between">
                <div className="col-4">Total</div>
                <div className="col-2 text-right">Price</div>
              </div>
              <div className="row justify-content-between">
                <button type="button" class="btn btn-outline-success">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
