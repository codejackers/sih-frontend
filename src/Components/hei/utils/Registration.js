import NavBar from "../../UserFacing/utils/Navbar";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerEmailNamePass } from "../../../actions/auth";
import MenuButton from "../../UserFacing/utils/MenuButton";
import classes from "../Style/Registration.module.css";

function Registration(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    name: "",
    pass: "",
  });
  const [confPass, setConfPass] = useState("");
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
        setData({
          ...data,
          email: e.target.value,
        });
        break;
      case "pass":
        setData({
          ...data,
          pass: e.target.value,
        });
      case "confpass":
        setConfPass(e.target.value);
      default:
        break;
    }
  };

  const handleNext = () => {
    if (data.pass == confPass) {
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
            <input
              className={classes.inpUnivName}
              placeholder="University Name"
              type="text"
              name="name"
              onChange={handleChange}
            />{" "}
            <br />
            <br />
            <h2 className={classes.title}>Create new password</h2>
            <input
              type="password"
              placeholder="New Password"
              className={classes.inpNewpass}
              name="pass"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className={classes.inpNewpass}
              name="confpass"
              onChange={handleChange}
            />
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
