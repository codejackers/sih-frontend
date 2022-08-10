import React, { Component } from "react";
import MenuButton from "../UserFacing/utils/MenuButton";
import { useState } from "react";
import classes from "./Style/login.module.css";
import logo from "./Img/collegeImgSVG.svg";
import Registration from "./utils/Registration";
import TimeSlot from "./utils/TimeSlot";
import eye from './Img/eyeVector.png';

function Login() {
  const [pass, setPwd] = useState("");
  const [show_pass, setIsRevealPwd] = useState(false);
  const [register, setRegister] = useState(false);
  const [timeSlot, setTimeSlot] = useState(false);
  const handleRegister = () => {
    if (!register) {
      setRegister(true);
    }
  };
  const handleSlot = () => {
    if (!timeSlot) {
      setTimeSlot(true);
    }
  };
  return (
    <>
      {register ? (
        timeSlot ? (
          <TimeSlot />
        ) : (
          <Registration setSlot={handleSlot} />
        )
      ) : (
        <div className={classes.mainDiv}>
          <div className={classes.titleMenu}>
            <div>
              <h2 className={classes.heading}>University Login</h2>
            </div>
            <div className={classes.menuSize}>
              <MenuButton />
            </div>
          </div>
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
