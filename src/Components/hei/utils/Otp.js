import React, { useState, ReactDOM, useEffect, useCallback } from "react";
import classes from "../Style/otp.module.css";
import MenuButton from "../../UserFacing/utils/MenuButton";
import { useSelector } from "react-redux";
import OtpInput from "react-otp-input-rc-17";

export default function Otp(props) {
  const [otp, setOtp] = useState("");
  const handleChange = (ent) => {
    setOtp(ent);
    if (otp.length == 4) {
      console.log(otp);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={classes.flexbox}>
        <p className={classes.Reset}>Reset Password</p>
        <div className={classes.menusize}>
          <MenuButton />
        </div>
      </div>
      <div className={classes.flexcol}>
        <h1 className={classes.OTPVeri}>OTP Verification</h1>

        <p className={classes.enterThe}>
          Enter the verification code we just sent on your email address.
        </p>

        <form onSubmit={handleSubmit}>
          <div className={classes.otpContainer}>
            <OtpInput
              onChange={handleChange}
              numInputs={4}
              value={otp}
              separator="       "
              inputStyle={{
                margin: "3rem 15px",
                borderRadius: "8px",
                fontSize: "3rem",
                border: "1.2px solid #33ff00",
              }}
            />
          </div>
          <button type="submit" className={classes.verify} color="black">
            Verify
          </button>
        </form>
      </div>
    </>
  );
}
