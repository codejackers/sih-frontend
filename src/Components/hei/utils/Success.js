import React from "react";
import successImg from "../Img/successVector.png";
import classes from "../Style/Success.module.css";
import NavBar from "../../UserFacing/utils/Navbar";

function Success() {
  return (
    <div className={classes.mainDiv}>
      <NavBar name="Reset Password" />
      <din className={classes.successMessage}>
        <center>
          <img className={classes.successImg} src={successImg} />
          <h2 className={classes.title}>Password Changed!</h2>
          <p className={classes.info}>
            Your password has been changed successfully.
          </p>
          <button
            type="button"
            className={classes.btn}
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Back to Login
          </button>
        </center>
      </din>
    </div>
  );
}

export default Success;
