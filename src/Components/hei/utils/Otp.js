import React, { useState, useEffect, Fragment } from "react";
import classes from "../Style/otp.module.css";
import Navbar from "../../UserFacing/utils/Navbar";
const START_MINUTES = "01";
const START_SECOND = "30";
const START_DERATION = 10;

export default function Otp(props) {
  const [currentMinutes, setMinutes] = useState(START_MINUTES);
  const [currentSeconds, setSeconds] = useState(START_SECOND);
  const [isStop, setIsStop] = useState(false);
  const [duration, setDuration] = useState(START_DERATION);
  const [isRunning, setIsRunning] = useState(false);

  const startHandler = () => {
    setDuration(parseInt(START_SECOND, 10) + 60 * parseInt(START_MINUTES, 10));
    // setMinutes(60 * 5);
    // setSeconds(0);
    setIsRunning(true);
  };

  const resetHandler = () => {
    setMinutes(START_MINUTES);
    setSeconds(START_SECOND);
    setIsRunning(false);
    setIsStop(false);
    setDuration(START_DERATION);
  };

  useEffect(() => {
    if (isRunning === true) {
      let timer = duration;
      var minutes, seconds;
      const interval = setInterval(function () {
        if (--timer <= 0) {
          resetHandler();
        } else {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          setMinutes(minutes);
          setSeconds(seconds);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

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
    <Navbar name="Reset Password" color="#fff"/>
      
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

       
          <div className={classes.timer}>
            <div className={classes.time}>
              {currentMinutes}
              <span className="mx-3">:</span>
              {currentSeconds}
            </div>
            <button
              onClick={startHandler}
              className={classes.resendtbtn}
            >
              Resend OTP
            </button>
          </div>
        
      </div>
    </>
  );
}
