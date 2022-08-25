import React, { useState } from "react";
import NavBar from "../../UserFacing/utils/Navbar";
import classes from "../Style/NewPass.module.css";
import { useDispatch } from "react-redux";
import { updatePass } from "../../../actions/auth";
import Success from "./Success";

function NewPass(props) {
  const [newPass, setNewPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const handleUpdate = () => {
    if (newPass === confPass) {
      dispatch(updatePass(props.email, confPass));
      setSuccess(true);
    }
  };
  return (
    <>
      {success ? (
        <Success />
      ) : (
        <div className={classes.mainDiv}>
          <NavBar name="Reset Password" />
          <div className={classes.formBody}>
            <center>
              <form>
                <h2 className={classes.title}>Create new password</h2>
                <p className={classes.info}>
                  Your new password must be unique from those previously used.
                </p>
                <br />
                <input
                  type="password"
                  placeholder="New Password"
                  className={classes.inpNewpass}
                  onChange={(e) => {
                    setNewPass(e.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className={classes.inpNewpass}
                  onChange={(e) => {
                    setConfPass(e.target.value);
                  }}
                />
                <p className={classes.infoMssg}>Password dont match !</p>
                <button
                  type="button"
                  className={classes.btn}
                  onClick={handleUpdate}
                >
                  Reset Password
                </button>
                <button
                  type="button"
                  className={classes.btn2nd}
                >
                  Back
                </button>
              </form>
            </center>
          </div>
        </div>
      )}
    </>
  );
}

export default NewPass;
