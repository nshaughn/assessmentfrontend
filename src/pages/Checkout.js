
import React from 'react';
import { Link } from 'react-router-dom';
import "../stylesheets/Group_checkout.css";

function Checkout({ total, checkOut }) {

  return (
    <div className="checkBody">
      <Link to="/">
        <button className="basket fixMeDaddy">Back</button>
      </Link>

      <div className="checkGroup">
        <div className="checkTitle">
          <h1>MONEY PLS</h1>
        </div>


        <div className="checkSplit">
          <div className="checkLeft">
            <div className="checkList">
              <p>{checkOut?.map((checkOutList, index) => {
                return (
                  <p key={index}>{checkOutList.name} £{checkOutList.price}</p>
                )
              })}</p>
            </div>
            <div className="checkTotal">
              <h2>£{total}</h2>
            </div>
          </div>
          <div className="checkRight">
            <form className="checkForm">
              <h2>Please confirm<br/>your details</h2>
              <div className="checkInputs">
                <label>
                  <input placeholder='Please Enter your Address' />
                </label>
                <br></br>

                <label>
                  <input placeholder='Please Enter your Postcode' />
                </label>
                <br></br>

                <label>
                  <input placeholder='Please Enter your card details' />
                </label>
                <br></br>
              </div>
              <button>Click here to place your order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout