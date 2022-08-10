import React from 'react'
import NavBar from "../../UserFacing/utils/Navbar";
import classes from "../Style/DocUpload.module.css";

function DocUpload() {
  return (
    <div className={classes.mainDiv}>
      <NavBar name="Registration" />
      <div className={classes.formBody}>
        <center>
          <form>
            <h2 className={classes.title}>Documet Upload</h2>
            <p className={classes.info}>
              Upload supporting documents here to verify the authenticity of your registration
            </p>
            <input placeholder="University ID" className={classes.inpId} />
            <div className={classes.uploadDocFlex}>
              <p className={classes.infoDoc}>
                Supporting Documents
              </p>
              <label for='files' className={classes.label}>Upload Files</label>
              <input id='files' className={classes.fileUpload} type="file"/>
            </div>
            <button
              type="button"
              className={classes.btn}>
              Send Registration Request
            </button>
            <button
              type="button"
              className={classes.btn2nd}>
              Back
            </button>
          </form>
        </center>
      </div>
    </div>
    )
}

export default DocUpload;