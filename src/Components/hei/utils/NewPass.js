import React from 'react'
import NavBar from "../../UserFacing/utils/Navbar";
import classes from "../Style/NewPass.module.css";

function NewPass() {
  return (
    <div className={classes.mainDiv}>
        <NavBar name="Reset Password" />
        <div className={classes.formBody}>
        <center>
          <form>
            <h2 className={classes.title}>Create new password</h2>
            <p className={classes.info}>
                Your new password must be unique from those previously used.
            </p>
            <br/>
            <input placeholder="New Password" className={classes.inpNewpass} />
            <input placeholder="Confirm Password" className={classes.inpNewpass} />
            <button
              type="button"
              className={classes.btn}>
               Reset Password
            </button>

          </form>
        </center>
      </div>
    </div>
  )
}

export default NewPass