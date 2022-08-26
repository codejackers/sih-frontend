import NavBar from "../../UserFacing/utils/Navbar";
import React, { useState } from "react";
import validator from "validator";

import { useDispatch } from "react-redux";
import { registerEmailNamePass } from "../../../actions/auth";
import MenuButton from "../../UserFacing/utils/MenuButton";
import classes from "../Style/Registration.module.css";
import eye from "../Img/eyeVector.png";
function Registration(props) {
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [confPassError, setConfPassError] = useState(false);
  const [data, setData] = useState({
    email: "",
    name: "",
    pass: "",
  });
  const [confPass, setConfPass] = useState("");
  const [show_pass, setIsRevealPwd] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.name);
    let attr = e.target.name;

    switch (attr) {
      case "name":
        setData({
          ...data,
          name: e.target.value,
        });
        break;
      case "email":
        if (e.target.value && !validator.isEmail(e.target.value)) {
          setEmailError(true);
        } else {
          setEmailError(false);
          setData({
            ...data,
            email: e.target.value,
          });
        }
        break;
      case "pass":
        if (e.target.value && !validator.isStrongPassword(e.target.value)) {
          setPassError(true);
        } else {
          setPassError(false);
          setData({
            ...data,
            pass: e.target.value,
          });
        }
      case "confpass":
        if (
          e.target.value &&
          data.pass &&
          !validator.equals(e.target.value, data.pass)
        ) {
          setConfPassError(true);
        } else {
          setConfPassError(false);
          setConfPass(e.target.value);
        }
      default:
        break;
    }
  };

  const handleNext = () => {
    if (!data.email) setEmailError(true);
    if (!data.pass) setPassError(true);
    if (!data.name) setNameError(true);
    if (!confPass) setConfPassError(true);

    if (data.pass && confPass && data.pass == confPass) {
      dispatch(registerEmailNamePass(data));
      props.setSlot();
    }
  };
  return (
    <div className={classes.mainDiv}>
      <NavBar name="Registration" />
      <div className={classes.formBody}>
        <center>
          <form>
            <h2 className={classes.title}>Fill in the details</h2>
            <p className={classes.info}>
              We'll get back to you via e-mail once we verify your registration
              Request.
            </p>
            <input
              placeholder="Email"
              name="email"
              onChange={handleChange}
              className={classes.inpEmail}
            />
            {emailError && (
              <p className={classes.errorMessage}>
                Your Email should be valid.
              </p>
            )}
            <input
              className={classes.inpUnivName}
              placeholder="University Name"
              type="text"
              name="name"
              onChange={handleChange}
            />
            {emailError && (
              <p className={classes.errorMessage}>
                University Name cannot be empty.
              </p>
            )}
            <br />
            <br />
            <h2 className={classes.title}>Create new password</h2>
            <input
              placeholder="New Password"
              className={classes.inpNewpass}
              type={show_pass ? "text" : "password"}
              name="pass"
              onChange={handleChange}
            />

            <img
              className={classes.viewPass}
              title={show_pass ? "Hide password" : "Show password"}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
              src={eye}
            />
            {passError && (
              <p className={classes.errorMessage}>
                Your Password must be 8 letters long and include atleast 1
                capital letter, a number and a special character.
              </p>
            )}

            <input
              type="password"
              placeholder="Confirm Password"
              className={classes.inpNewpass}
              name="confpass"
              onChange={handleChange}
            />

            {confPassError && (
              <p className={classes.errorMessage}>Both Password must match .</p>
            )}

            <div className={classes.btns}>
              <button
                type="button"
                className={classes.btn1}
                onClick={props.back}
              >
                Back
              </button>
              <button
                type="button"
                className={classes.btn}
                onClick={handleNext}
              >
                Next step
              </button>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
}

export default Registration;
