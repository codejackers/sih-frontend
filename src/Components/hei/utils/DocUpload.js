import NavBar from "../../UserFacing/utils/Navbar";
import React, { useState, useRef } from "react";
import classes from "../Style/DocUpload.module.css";
import { useDispatch } from "react-redux";
import {
  addFile,
  captchaVerify,
  registerCollege,
  registerUID,
} from "../../../actions/auth";
import SucccessPopup from "./SucccessPopup";
import { useNavigate } from "react-router-dom";
import { PinDropSharp } from "@mui/icons-material";
import S3FileUpload from "react-s3";
import ReCAPTCHA from "react-google-recaptcha";
import { APIUrls } from "../../../helpers/urls";
// import Captcha from "./Captcha";
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

function DocUpload(props) {
  const [UID, setUID] = useState("");
  const [uCity, setUCity] = useState("");
  const [VerificationToken, setVerificationToken] = useState("");
  const [open, setOpen] = useState(false);
  const [doc, setDoc] = useState("");
  const [dis, setDis] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNext = () => {
    if (UID != "") {
      dispatch(
        registerUID({
          uid: UID,
          doc: doc,
          UCity: uCity,
        })
      );
      console.log("clicked handleNext");
      setTimeout(() => {
        dispatch(registerCollege());
      }, 100);
      setOpen(true);
    }
  };
  const handleClose = () => {
    navigate("/");
  };
  const handleDis = () => {
    console.log("clicked handledis");
    setDis(false);
  };
  const handleCaptcha = (e) => {
    const url = APIUrls.captchaVerify();
    let body = JSON.stringify({ captcha: e });
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response.status;
        }
      })
      .then((data) => {
        if (data.success) {
          console.log(data.success);
          setDis(true);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleUpload = async (file) => {
    S3FileUpload.uploadFile(file, config)
      .then((data) => {
        setDoc(data.location);
      })
      .catch((err) => console.error(err));
  };
  let captchaRef = useRef(null);
  return (
    <div className={classes.mainDiv}>
      <NavBar name="Registration" />
      <SucccessPopup open={open} handleClose={handleClose} />
      <div className={classes.formBody}>
        <center>
          <form>
            <h2 className={classes.title}>Details Upload</h2>
            <p className={classes.info}>
              Upload supporting documents here to verify the authenticity of
              your registration
            </p>
            <input
              type="text"
              onChange={(e) => {
                setUID(e.target.value);
              }}
              placeholder="University ID"
              className={classes.inpId}
              required
            />
            <input
              type="text"
              onChange={(e) => {
                setUCity(e.target.value);
              }}
              placeholder="City"
              className={classes.inpId}
              required
            />
            {/* <input
              type="text"
              onChange={(e) => {
                setVerificationToken(e.target.value);
              }}
              placeholder="Verification Token"
              className={classes.inpId}
              required
            /> */}
            <div className={classes.uploadDocFlex}>
              <p className={classes.infoDoc}>Supporting Documents</p>
              <label htmlFor="files" className={classes.label}>
                Upload Files
              </label>
              <input
                accept="application/pdf"
                id="files"
                className={classes.fileUpload}
                onChange={(e) => {
                  handleUpload(e.target.files[0]);
                }}
                type="file"
                required
              />
            </div>

            <ReCAPTCHA
              sitekey="6LfSr6ghAAAAANogFLUTTs_1M3Y7LwwQ_Ki9U0jI"
              onChange={(e) => {
                handleCaptcha(e);
              }}
            />
            <button
              type="button"
              className={classes.btn}
              disabled={!dis}
              style={{ backgroundColor: dis ? "black" : "grey" }}
              onClick={handleNext}
            >
              Send Registration Request
            </button>
            <button
              type="button"
              onClick={props.back}
              className={classes.btn2nd}
            >
              Back
            </button>
          </form>
        </center>
      </div>
    </div>
  );
}

export default DocUpload;
