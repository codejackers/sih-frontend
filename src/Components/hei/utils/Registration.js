import React from "react";
import NavBar from "../../UserFacing/utils/Navbar";
import classes from "../Style/Registration.module.css";

function Registration(props) {
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
            <input placeholder="Email" className={classes.inpEmail} />
            <input
              className={classes.inpUnivName}
              placeholder="University Name"
              type="text"
            />{" "}
            <br />
            <br />
            <h2 className={classes.title}>Create new password</h2>
            <input placeholder="New Password" className={classes.inpNewpass} />
            <input placeholder="Confirm Password" className={classes.inpNewpass} />
            <button
              type="button"
              className={classes.btn}
              onClick={() => {
                props.setSlot();
              }}
            >
               Next step
            </button>

          </form>
        </center>
      </div>
    </div>
  );
}

export default Registration;
