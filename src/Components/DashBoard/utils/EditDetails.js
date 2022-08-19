import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import classes from "../Style/EditDetails.module.css";

function EditDetails(props) {
  const [type, setType] = useState(3);
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
          {type == 1 && <div>
            <label for="image">
              <input className={classes.imgUpload} type="file" id="image" />
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
              className={classes.inpField}
              required
            />
            <p className={classes.lables}>Website</p>
            <input
              type="text"
              placeholder="Enter the website link"
              className={classes.inpField}
              required
            />
            <p className={classes.lables}>Contact</p>
            <input
              type="number"
              placeholder="Enter your phone number"
              className={classes.inpField}
              required
            />
            <p className={classes.lables}>Short description</p>
            <textarea
              type="text"
              maxlength="100"
              placeholder="Enter short description about college"
              className={classes.inpField}
              required
            />
          </div>}
          {type == 2 && <div>
            <p className={classes.lables}>Description</p>
            <textarea
              type="text"
              maxlength="150"
              placeholder="Enter description about the college"
              className={classes.inpField}
              required
            />
            <p className={classes.lables}>Maps</p>
            <input
              type="text"
              placeholder="Enter the maps location "
              className={classes.inpField}
              required
            />
            <p className={classes.lables}>Address</p>
            <input
              type="text"
              placeholder="Enter the college address"
              className={classes.inpField}
              required
            />
            <div className={classes.btns}>
              <p className={classes.lables}>Prospectus</p>
              <label className={classes.docUploadBTN}>
                Upload File
              </label>
            </div>
            <input
              id="files"
              className={classes.fileUpload}
              type="file"
              required
            />
          </div>}
          {type == 3 && <div>
            <p className={classes.lables}>Course name</p>
            <input
              type="text"
              placeholder="Enter the course name"
              className={classes.inpField}
              required
            />
            <p className={classes.lables}>Course Details</p>
            <textarea
              type="text"
              maxlength="150"
              placeholder="Enter details about the course"
              className={classes.inpField}
              required
            />
          </div>}
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