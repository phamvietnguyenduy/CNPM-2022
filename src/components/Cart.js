import React, { useState } from "react";
import Card, { ITEMS } from "./Card/Card";
const FAKEDATA = [
  { id: 1, name: "T-shirt", price: 20 },
  { id: 2, name: "Shirt", price: 50 },
];

export default function Cart() {
  return (
    <>
      <div className="container content">
        <div className="row">
          <div className="col-8">
            <h1>Shopping Cart</h1>
            {FAKEDATA.map((data) => {
              return (
                <Card
                  id={data.id}
                  key={data.id}
                  name={data.name}
                  price={data.price}
                />
              );
            })}
          </div>
          <div className="col-4 cright">
            <h1>Total</h1>
            <div className="container total">
              <div className="row justify-content-between">
                <div className="col-4 ">Total</div>
                <div className="col-2 text-right i"></div>
              </div>
              <br />
              <div className="row justify-content-between">
                <div className="col-4">Delivery</div>
                <div className="col-2 text-right i">Price</div>
              </div>
              <select className="form-control">
                <option>Large select</option>
              </select>
              <br />
              <div className="row justify-content-between">
                <div className="col-4">Discount</div>
                <div className="col-2 text-right i">Price</div>
              </div>
              <select className="form-control">
                <option>Large select</option>
              </select>
              <br />
              <hr />
              <div className="row justify-content-between">
                <div className="col-4">Total</div>
                <div className="col-2 text-right i">Price</div>
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
