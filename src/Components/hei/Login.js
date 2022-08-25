import React, { Component } from "react";
import NavBar from "../UserFacing/utils/Navbar";
import { useState } from "react";
import classes from "./Style/login.module.css";
import logo from "./Img/collegeImgSVG.svg";
import Registration from "./utils/Registration";
import TimeSlot from "./utils/TimeSlot";
import eye from "./Img/eyeVector.png";
import DocUpload from "./utils/DocUpload";
import { useDispatch } from "react-redux";
import { loginCollege } from "../../actions/auth";
import ForgetPass from "./utils/ForgetPass";
import { useNavigate } from "react-router-dom";
import { SettingsSystemDaydreamTwoTone } from "@mui/icons-material";
import { set } from "lodash";

function Login(props) {
  const [pass, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [show_pass, setIsRevealPwd] = useState(false);
  const [register, setRegister] = useState(false);
  const [timeSlot, setTimeSlot] = useState();
  const [doc, setDoc] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [checkCreds, setCheckCreds] = useState(false);
  const [val, setVal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = () => {
    if (!register) {
      setRegister(true);
    } else {
      setRegister(false);
    }
    console.log();
  };
  const handleSlot = () => {
    if (!timeSlot) {
      setTimeSlot(true);
    } else {
      setTimeSlot(false);
    }
  };
  const handleDoc = () => {
    console.log("handeling doc", doc);
    if (!doc) {
      setDoc(true);
    } else {
      setDoc(false);
    }
  };
  const handleForgot = () => {
    if (!forgot) {
      setForgot(true);
    } else {
      setForgot(false);
    }
  };
  const handleCred = (data) => {
    if (data) {
      setCheckCreds(true);
    } else {
      setCheckCreds(false);
    }
  };

  const handleLogin = () => {
    if (email != "" && pass != "") {
      dispatch(loginCollege(email, pass, navigate, handleCred));
    } else {
      setCheckCreds(true);
    }

    if (email != "" && pass != "")
      dispatch(loginCollege(email, pass, navigate));
  };

  return (
    <>
      {register ? (
        doc ? (
          <DocUpload back={handleDoc} />
        ) : (
          <Registration setSlot={handleDoc} back={handleRegister} />
        )
      ) : forgot ? (
        <ForgetPass back={handleForgot} />
      ) : (
        <div className={classes.mainDiv}>
          <NavBar name="University Login" />
          <center>
            <img className={classes.loginImage} src={logo} />
            <form>
              <input
                className={classes.inpEmail}
                placeholder="Enter your email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />{" "}
              <br />
              <input
                placeholder="Enter your password"
                className={classes.inpPass}
                type={show_pass ? "text" : "password"}
                value={pass}
                onChange={(e) => setPwd(e.target.value)}
              />
              <img
                className={classes.viewPass}
                title={show_pass ? "Hide password" : "Show password"}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
                src={eye}
              />
              <br />
              <div className={classes.mssg}>
                {checkCreds && (
                  <p className={classes.credentialDifferent}>
                    Bad Credentials !!
                  </p>
                )}
                <a className={classes.frgtPass} onClick={handleForgot}>
                  Forgot Password?
                </a>
              </div>
              <br />
              <button
                type="button"
                className={classes.btn}
                onClick={handleLogin}
              >
                Login
              </button>
              <br />
              <button
                type="button"
                onClick={handleRegister}
                className={classes.newBtn}
              >
                Register
              </button>
            </form>
          </center>
        </div>
      )}
    </>
  );
}}

export default Login;
