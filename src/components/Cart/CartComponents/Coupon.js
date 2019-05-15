import React from "react";
import classes from "./CartItems.module.css";

export default function Coupon() {
  return (
    <div className={classes.Table}>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Coupon </th>
          </tr>
        </thead>
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
                  maxlength="20"
                />
                <input
                  type="submit"
                  id="submit-coupon"
                  name="submit-coupin"
                  value="Submit"
                  style={{
                    backgroundColor: "red",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    color: "white"
                  }}
                />
              </div>
              <p>Terms and Conditions apply. </p>
            </form>
          </td>
        </tr>
      </table>
    </div>
  );
}
