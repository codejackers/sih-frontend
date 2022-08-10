import React, { Component } from "react";
import NavBar from "../UserFacing/utils/Navbar";
import { useState } from "react";
import classes from "./Style/login.module.css";
import logo from "./Img/collegeImgSVG.svg";
import Registration from "./utils/Registration";
import TimeSlot from "./utils/TimeSlot";
import eye from "./Img/eyeVector.png";
import DocUpload from "./utils/DocUpload";
import { set } from "lodash";

function Login() {
  const [pass, setPwd] = useState("");
  const [show_pass, setIsRevealPwd] = useState(false);
  const [register, setRegister] = useState(false);
  const [timeSlot, setTimeSlot] = useState(false);
  const [doc, setDoc] = useState(false);
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
    if (!doc) {
      setDoc(true);
    } else {
      setDoc(false);
    }
  };
  return (
    <>
      {register ? (
        timeSlot ? (
          doc ? (
            <DocUpload back={handleDoc} />
          ) : (
            <TimeSlot setDoc={handleDoc} back={handleSlot} />
          )
        ) : (
          <Registration setSlot={handleSlot} back={handleRegister} />
        )
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
              <a className={classes.frgtPass} href="#">
                Forgot Password?
              </a>
              <br />
              <button type="submit" className={classes.btn}>
                Login
              </button>
              <br />
              <button
                type="submit"
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
}

export default Login;
