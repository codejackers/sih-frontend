import React, { useState, ReactDOM ,useEffect,useCallback} from "react";
import classes from "../Style/otp.module.css";
import MenuButton from "../../UserFacing/utils/MenuButton";


export default function Otp(props) {
  const initialstate = {
    value: "",
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    disable: true,
  };

  const [otp, setotp] = useState(initialstate);

  const handleChange = (value1, event) => {
    setotp({ [value1]: event.target.value });
  };

  const handleSubmit = (event) => {
    const data = new FormData(event.target);
    console.log(otp);
    event.preventDefault();
  };

  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 4) {
        elmnt.target.form.elements[next].focus();
      }
    }
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
            <input
              name="otp1"
              type="text"
              autoComplete="off"
              className={classes.otpInput}
              value={otp.otp1}
              
              onChange={(e) => handleChange("otp1", e)}
              tabIndex="1"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp2"
              type="text"
              autoComplete="off"
              className={classes.otpInput}
              value={otp.otp2}
              onChange={(e) => handleChange("otp2", e)}
              tabIndex="2"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp3"
              type="text"
              autoComplete="off"
              className={classes.otpInput}
              value={Option.otp3}
              onChange={(e) => handleChange("otp3", e)}
              tabIndex="3"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp4"
              type="text"
              autoComplete="off"
              className={classes.otpInput}
              value={otp.otp4}
              onChange={(e) => handleChange("otp4", e)}
              tabIndex="4"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
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
