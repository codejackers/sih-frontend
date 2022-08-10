import React from 'react'
import NavBar from "../../UserFacing/utils/Navbar";
import classes from "../Style/ForgetPass.module.css";

function ForgetPass() {
  return (
    <div className={classes.mainDiv}>
        <NavBar name="Reset Password" />
        <div className={classes.formBody}>
        <center>
          <form>
            <h2 className={classes.title}>Forgot Password?</h2>
            <p className={classes.info}>
                Don't worry! It occurs. Please enter the email address linked with your Institute
            </p>
            <br/>
            <input
                className={classes.inpEmail}
                placeholder="Enter your email"
                type="email"
              />
            <button
              type="button"
              className={classes.btn}>
               Send Code
            </button>

          </form>
        </center>
      </div>
    </div>
  )
}

export default ForgetPass