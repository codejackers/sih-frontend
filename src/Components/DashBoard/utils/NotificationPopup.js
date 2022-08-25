import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import classes from "../Style/NotificationPopup.module.css";
import S3FileUpload from "react-s3";
function NotificationPopup(props) {
  const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
  const REGION = process.env.REACT_APP_REGION;
  const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
  const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  const [doc, setDoc] = useState("");
  const [heading, setHeading] = useState("");
  const handleSave = () => {
    props.handleSave({ Title: heading, Doc: doc });
  };
  const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
    dirName: "photos",
  };
  const handleUpload = async (file) => {
    S3FileUpload.uploadFile(file, config)
      .then((data) => {
        setDoc(data.location);
      })
      .catch((err) => console.error(err));
  };
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
          <p className={classes.title}>Add new Notification / Event</p>
          <textarea
            type="text"
            placeholder="Title"
            className={classes.inpId}
            onChange={(e) => {
              setHeading(e.target.value);
              console.log();
            }}
            required
          />
          <div className={classes.uploadDocFlex}>
            <p className={classes.infoDoc}>Upload File here (max 10MB)</p>
            <label htmlFor="files" className={classes.label}>
              Upload Files
            </label>
            <input
              accept="application/pdf"
              id="files"
              className={classes.fileUpload}
              type="file"
              onChange={(e) => {
                handleUpload(e.target.files[0]);
              }}
              required
            />
          </div>
          <div className={classes.btns}>
            <button
              type="button"
              onClick={() => {
                props.handleClose();
              }}
              className={classes.btn1}
            >
              Cancel
            </button>
            <button type="button" className={classes.btn} onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default NotificationPopup;
