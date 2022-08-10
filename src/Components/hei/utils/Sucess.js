import React from 'react';
import sucessImg from "../Img/sucessVector.png";
import classes from "../Style/Sucess.module.css";
import NavBar from "../../UserFacing/utils/Navbar";

function Sucess() {
  return (
    <div className={classes.mainDiv}>
        <NavBar name="Reset Password" />
        <din className={classes.sucessMessage}>
            <center>
                <img className={classes.sucessImg} src={sucessImg}/>
                <h2 className={classes.title}>Password Changed!</h2>
                <p className={classes.info}>
                Your password has been changed successfully.
                </p>
                <button
                type="button"
                className={classes.btn}>
                Back to Login
                </button>
            </center>

        </din>
    </div>
  )
}

export default Sucess