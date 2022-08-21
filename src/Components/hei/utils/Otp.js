import React, { useState, ReactDOM, useEffect, useCallback } from "react";
import classes from "../Style/otp.module.css";
import MenuButton from "../../UserFacing/utils/MenuButton";
import { useSelector } from "react-redux";
import OtpInput from "react-otp-input-rc-17";
import { APIUrls } from "../../../helpers/urls";
import NewPass from "./NewPass";
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

  const [otp, setOtp] = useState("");
  const [btn, setBtn] = useState(true);
  const [newPass, setNewPass] = useState(false);
  const handleChange = (ent) => {
    setOtp(ent);
    if (otp.length >= 4) {
      console.log("making api call");
      const url = APIUrls.verifyOtp();
      const body = JSON.stringify({
        Uemail: props.email,
        OTP: otp,
      });
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw response.status;
          }
        })
        .then((resp) => {
          if (resp.message === "success") {
            setBtn(false);
          }
        })
        .catch((error) => console.log(error));

    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewPass(true);
  };

  return (
    <>
      {newPass ? (
        <NewPass email={props.email} />
      ) : (
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
              <button
                type="submit"
                className={classes.verify}
                color="black"
                disabled={btn ? "" : "disabled"}
              >
                Verify
              </button>
              <button
                  type="button"
                  className={classes.btn2nd}
                >
                  Back
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
      )}

    </>
  );
}
