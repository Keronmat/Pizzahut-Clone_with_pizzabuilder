import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

import facebook from "../../assets/images/facebook-icon.png";
import instagram from "../../assets/images/insta-icon.png";
import twitter from "../../assets/images/twitter-icon.png";
import youtube from "../../assets/images/youtube-icon.png";
import visacard from "../../assets/images/vissa_crd.png";
import hbl from "../../assets/images/HBL_logo.png";

function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <div className={[classes.FooterDiv, "row"].join(" ")}>
          {/*column one*/}
          <div
            className={[
              classes.FooterItem,
              "col-sm-3 col-md-3 d-none d-sm-block"
            ].join(" ")}
          >
            <h3>About us</h3>
            <ul>
              <li>
                <Link to="/">Our Story</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
            </ul>
            <h3>Policies</h3>
            <ul>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms of use</Link>
              </li>
            </ul>
          </div>
          {/*column two*/}
          <div
            className={[
              classes.FooterItem,
              " col-sm-3 col-md-3 d-none d-sm-block"
            ].join(" ")}
          >
            <h3>Customer Service</h3>
            <ul>
              <li>
                <Link to="/">Contact us</Link>
              </li>
              <li>
                <Link to="/">find Pizzahut</Link>
              </li>
              <li>
                <Link to="/">Track your order</Link>
              </li>
              <li>
                <Link to="/" style={{ textTransform: "upperCase" }}>
                  FAQS
                </Link>
              </li>
              <li>
                <Link to="/">Sitemap</Link>
              </li>
              <li>
                <Link to="/">Become a franchisee</Link>
              </li>
            </ul>
          </div>
          {/*column three*/}
          <div
            className={[classes.FooterItem, "col-sm-4 col-md-4 col-12"].join(
              " "
            )}
          >
            <h3>Connect with Pizzahut</h3>
            <div style={{ float: "left", display: "block" }}>
              <Link to="https://www.facebook.com/PizzaHutPak" target="_blank">
                <img
                  alt="facebook"
                  src={facebook}
                  style={{ maxWidth: "40px", margin: "2px" }}
                />
              </Link>
              <Link to="https://twitter.com/pizzahutpak" target="_blank">
                <img
                  alt="twitter"
                  src={twitter}
                  style={{ maxWidth: "40px", margin: "2px" }}
                />
              </Link>
              <Link
                to="https://www.youtube.com/channel/UCuwq19_5uzip-rUTsxXmAJg"
                target="_blank"
              >
                <img
                  alt="youtube"
                  src={youtube}
                  style={{ maxWidth: "40px", margin: "2px" }}
                />
              </Link>
              <Link to="https://www.instagram.com/pizzahutpak" target="_blank">
                <img
                  alt="instagram"
                  src={instagram}
                  style={{ maxWidth: "40px", margin: "2px" }}
                />
              </Link>
            </div>
          </div>

          {/*column four*/}
          <div
            className={[
              classes.FooterItem,
              "col-sm-2 col-md-2 d-none d-sm-block"
            ].join(" ")}
          >
            <ul>
              <li style={{ margin: "5px" }}>
                <img
                  alt="visacard"
                  src={visacard}
                  width="90%"
                  className="logo-responsive"
                />
              </li>

              <li style={{ margin: "5px" }}>
                <img
                  alt="hbl"
                  src={hbl}
                  width="90%"
                  className="logo-responsive"
                />
              </li>
            </ul>

            <p style={{ textAlign: "left", color: "#ed1c24" }}>
              Please note that our prices are inclusive of tax{" "}
            </p>
          </div>
        </div>
        {/*Address row*/}
        <div className={[classes.Address, "row"].join(" ")}>
          <div className="col-12">
            <p>
              © 2018 Pizza Hut, Pakistan Inc. All rights reserved. Powered by{" "}
              <Link href="http://www.pizzahut.com.pk/" target="_blank">
                Pizza Hut, Pakistan.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
