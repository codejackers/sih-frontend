import React, { useState } from "react";
import NavBar from "../../UserFacing/utils/Navbar";
import classes from "../Style/ForgetPass.module.css";
import { useDispatch } from "react-redux";
import { sendOtp } from "../../../actions/auth";
import Otp from "./Otp";

function ForgetPass() {
  const [email, setEmail] = useState("");
  const [verify, setVerify] = useState(false);
  const dispatch = useDispatch();
  const handleSendOtp = () => {
    if (email.length != 0) {
      dispatch(sendOtp(email));
      setVerify(true);
    }
  };
  return (
    <div>
      {verify ? (
        <Otp />
      ) : (
        <div className={classes.mainDiv}>
          <NavBar name="Reset Password" />
          <div className={classes.formBody}>
            <center>
              <form>
                <h2 className={classes.title}>Forgot Password?</h2>
                <p className={classes.info}>
                  Don't worry! It occurs. Please enter the email address linked
                  with your Institute
                </p>
                <br />
                <input
                  className={classes.inpEmail}
                  placeholder="Enter your email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button
                  type="button"
                  className={classes.btn}
                  onClick={handleSendOtp}
                >
                  Send OTP
                </button>
              </form>
            </center>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgetPass;
