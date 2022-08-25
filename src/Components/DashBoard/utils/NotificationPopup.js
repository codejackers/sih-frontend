import React from "react";
import Dialog from "@mui/material/Dialog";
import classes from "../Style/NotificationPopup.module.css"
function NotificationPopup(props) {
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
        <div
          style={{
            width: "360px",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <p className={classes.title}>
          Add new Notification / Event
          </p>
          <textarea
              type="text"              
              placeholder="Title"
              className={classes.inpId}
              required
            />
          <div className={classes.uploadDocFlex}>
              <p className={classes.infoDoc}>Upload File here 
               (max 10MB)</p>
              <label htmlFor="files" className={classes.label}>
                Upload Files
              </label>
              <input
                accept="application/pdf"
                id="files"
                className={classes.fileUpload}
                
                type="file"
                required
              />
            </div>
        </div>
      </Dialog>
    </div>
  );
}

export default NotificationPopup;
