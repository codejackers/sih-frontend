import React from "react";
import Dialog from "@mui/material/Dialog";
import classes from "../Style/EditDetails.module.css";

function EditDetails(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => {
          props.handleClose();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.ContentDiv}
          style={{
            padding: "1rem",
            textAlign: "center",
            borderRadius: "10px",
            fontFamily: "urbanist"
          }}
        >


        <label for="image">
          <input className={classes.imgUpload} type="file" id="image"/>
          <img          
            className={classes.newImg}
            sytle={{
            }}
            src="https://www.rubberstamps.net/Images/6-free-image-upload.svg"
            alt="image"
            />
        </label>
          <p className={classes.lables}>Share</p>
            <input
              type="text"
              placeholder="Enter new link to share"
              className={classes.inpId}
              required
            />
          <p className={classes.lables}>Website</p>
            <input
              type="text"
              placeholder="Enter the website link"
              className={classes.inpId}
              required
            />

          <p className={classes.lables}>Contact</p>
            <input
              type="text"
              placeholder="Enter your phone number"
              className={classes.inpId}
              required
            />

          <p className={classes.lables}>Short description</p>
            <textarea
              type="text"
              maxlength = "100" 
              placeholder="Enter short description about college"
              className={classes.inpId}
              required
            />

            <div className={classes.btns}>
              <button
                type="button"
                className={classes.btn1}
              >
                Cancel
              </button>
              <button
                type="button"
                className={classes.btn}
              >
                Save
              </button>
            </div>
          
        </div>
      </Dialog>
    </div>
  );
}

export default EditDetails;
