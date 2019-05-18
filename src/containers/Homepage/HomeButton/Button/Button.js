import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  const styles = {
    backgroundColor: "#fed75f ",
    color: "#000000",
    fontSize: "16px",
    display: "block",
    textTransform: "uppercase",
    marginTop: "10px"
  };
  return (
    <div className="col-md-6 col-sm-6 col-xs-6 col-6">
      <Link to={props.link}>
        <button style={styles} className="btn btn-block">
          {props.children}
        </button>
      </Link>
    </div>
  );
}

export default Button;
