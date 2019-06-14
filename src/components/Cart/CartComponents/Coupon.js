import React from "react";
import classes from "./CartItems.module.css";

export default function Coupon(props) {
  return (
    <div className={classes.Table}>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Coupon </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <form className={classes.cpnForm}>
                <p>Enter Your Coupon Code Here </p>
                <div>
                  <input
                    type="text"
                    name="coupon-code"
                    size="12"
                    id="coupon-code"
                    maxLength="20"
                    value={props.couponInput}
                    onChange={e => props.handleCouponInputChange(e)}
                  />
                  <button
                    type="button"
                    id="submit-coupon"
                    name="submit-coupon"
                    value="Submit"
                    style={{
                      backgroundColor: "red",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      color: "white",
                      textTransform: "capitalize"
                    }}
                    onClick={e => props.couponHandler(e)}
                  >
                    Submit
                  </button>
                </div>
                <p>Terms and Conditions apply. </p>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
