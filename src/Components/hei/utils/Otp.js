import React, { useState, ReactDOM, useEffect, useCallback } from "react";
import classes from "../Style/otp.module.css";
import MenuButton from "../../UserFacing/utils/MenuButton";
import { useSelector } from "react-redux";
import OtpInput from "react-otp-input-rc-17";
import { APIUrls } from "../../../helpers/urls";
import NewPass from "./NewPass";
export default function Otp(props) {
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
            </form>
          </div>
        </>
      )}

    </>
  );
}
