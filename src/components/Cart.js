import React from "react";
import Card from "./Card/Card";
import Listcard from "./listcard";
import "../../src/style.css";
export default function Cart() {
  return (
    <>
      <div className="container content">
        <div className="row">
          <div className="col-8">
            <h1 class="letter">Shopping Cart</h1>
            <hr />
            {/* <Card />
            <Card />
            <Card /> */}
           <div><Listcard /></div>
            <br />
            <a style={{color: '#097B7B'}}> back to previous </a>
          </div>
          <div className="col-4 cright">
          <h1 class="letter">Total</h1>
          <hr />
            <div className="container total">
              <div className="row justify-content-between">
                <div className="col-4 i ">Items</div>
                <div className="col-2 text-right i">3</div>
              </div>
              <br />
              <div className="row justify-content-between">
                <div className="col-4 i">Delivery</div>
                <div className="col-2 text-right i">20$</div>
              </div>
              <select className="form-control">
                <option>Large select</option>
              </select>
              <br />
              <div className="row justify-content-between">
                <div className="col-4 i">Discount</div>
                <div className="col-2 text-right i">2$</div>
              </div>
              <select className="form-control">
                <option>Large select</option>
              </select>
              <br />
              <hr />
              <div className="row justify-content-between">
                <div className="col-4 i">Total</div>
                <div className="col-2 text-right i">120$</div>
              </div>
              <div className="row justify-content-between" style={{marginTop: 20+'px'}}>
                <button type="button" class="btn btncheckout">
                  <span class="i"  style={{color: 'white'}}> Checkout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
