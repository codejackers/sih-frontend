import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import classes from "../Style/EditDetails.module.css";
import S3FileUpload from "react-s3";
window.Buffer = window.Buffer || require("buffer").Buffer;

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
const REGION = process.env.REACT_APP_REGION;
const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;

const config = {
  bucketName: S3_BUCKET,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
  dirName: "photos",
};

function EditDetails(props) {
  const [doc, setDoc] = useState(props.details.Prospectus);
  const [pic, setPic] = useState(props.details.Clglogo);
  const [details, setDetails] = useState(props.details);
  const [course, setCourse] = useState({
    CourseName: "",
    CourseDesc: "",
    CourseIntakeCap: "",
  });
  // console.log(doc, pic, details);
  const handleDocUpload = async (file) => {
    S3FileUpload.uploadFile(file, config)
      .then((data) => {
        setDoc(data.location);
      })
      .catch((err) => console.error(err));
  };
  const handlePicUpload = async (file) => {
    S3FileUpload.uploadFile(file, config)
      .then((data) => {
        setPic(data.location);
      })
      .catch((err) => console.error(err));
  };

  const handleSave = () => {
    if (props.type === 1) {
      props.handleSave({
        Site: details.Site,
        Contact: details.Contact,
        ShortDesc: details.ShortDesc,
        Clglogo: pic,
      });
    } else if (props.type === 2) {
      props.handleSave({
        LongDesc: details.LongDesc,
        Gmap: details.Gmap,
        UCity: details.UCity,
        Prospectus: doc,
      });
    } else {
      props.handleSave(course);
    }
    props.handleClose();
    // window.location.reload();
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
          className={classes.ContentDiv}
          style={{
            padding: "1rem",
            textAlign: "center",
            borderRadius: "10px",
            fontFamily: "urbanist",
          }}
        >
          {props.type == 1 && (
            <div>
              <label for="image">
                <input
                  accept="image/*"
                  className={classes.imgUpload}
                  type="file"
                  id="image"
                  onChange={(e) => {
                    handlePicUpload(e.target.files[0]);
                  }}
                />
                <img
                  className={classes.newImg}
                  sytle={{}}
                  src={
                    pic != ""
                      ? pic
                      : "https://www.rubberstamps.net/Images/6-free-image-upload.svg"
                  }
                  alt="image"
                />
              </label>

              <p className={classes.lables}>Website</p>
              <input
                type="text"
                placeholder="Enter the website link"
                className={classes.inpField}
                onChange={(e) => {
                  setDetails((prev) => {
                    return { ...prev, Site: e.target.value };
                  });
                }}
              />
              <p className={classes.lables}>Contact</p>
              <input
                type="number"
                placeholder="Enter your phone number"
                className={classes.inpField}
                onChange={(e) => {
                  setDetails((prev) => {
                    return { ...prev, Contact: e.target.value };
                  });
                }}
              />
              <p className={classes.lables}>Short description</p>
              <textarea
                type="text"
                maxLength="150"
                placeholder="Enter short description about college"
                className={classes.inpField}
                onChange={(e) => {
                  setDetails((prev) => {
                    return { ...prev, ShortDesc: e.target.value };
                  });
                }}
              />
            </div>
          )}
          {props.type == 2 && (
            <div>
              <p className={classes.lables}>Description</p>
              <textarea
                type="text"
                maxLength="800"
                placeholder="Enter description about the college"
                className={classes.inpField}
                onChange={(e) => {
                  setDetails((prev) => {
                    return { ...prev, LongDesc: e.target.value };
                  });
                }}
              />
              <p className={classes.lables}>Maps</p>
              <input
                type="text"
                placeholder="Enter the maps location "
                className={classes.inpField}
                onChange={(e) => {
                  setDetails((prev) => {
                    return { ...prev, Gmap: e.target.value };
                  });
                }}
              />
              <p className={classes.lables}>Address</p>
              <input
                type="text"
                placeholder="Enter the college address"
                className={classes.inpField}
                onChange={(e) => {
                  setDetails((prev) => {
                    return { ...prev, UCity: e.target.value };
                  });
                }}
              />
              <div className={classes.btns}>
                <p className={classes.lables}>Prospectus</p>
                <label className={classes.docUploadBTN}>Upload File</label>
              </div>
              <input
                accept="application/pdf" 
                id="files"
                className={classes.fileUpload}
                type="file"
                onChange={(e) => {
                  handleDocUpload(e.target.files[0]);
                }}
              />
            </div>
          )}
          {props.type == 3 && (
            <div>
              <p className={classes.lables}>Course name</p>
              <input
                type="text"
                placeholder="Enter the course name"
                className={classes.inpField}
                onChange={(e) => {
                  setCourse((prev) => {
                    return { ...prev, CourseName: e.target.value };
                  });
                }}
              />
              <p className={classes.lables}>Intake Capacity</p>
              <input
                type="text"
                placeholder="Enter intake capacity"
                className={classes.inpField}
                onChange={(e) => {
                  setCourse((prev) => {
                    return { ...prev, CourseIntakeCap: e.target.value };
                  });
                }}
              />
              <p className={classes.lables}>Course Details</p>
              <textarea
                type="text"
                maxLength="700"
                placeholder="Enter details about the course"
                className={classes.inpField}
                onChange={(e) => {
                  setCourse((prev) => {
                    return { ...prev, CourseDesc: e.target.value };
                  });
                }}
              />
            </div>
          )}
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

export default EditDetails;
