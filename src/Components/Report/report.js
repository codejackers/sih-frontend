import NavBar from "../UserFacing/utils/Navbar";
import React, { useState } from "react";
import classes from "../Report/style/report.module.css";
import { APIUrls } from "../../helpers/urls";
import S3FileUpload from "react-s3";
import ReCAPTCHA from "react-google-recaptcha";

function Report(props) {
  const [email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [UserName, setUserName] = useState("");
  const [CollegeName, setCollegeName] = useState("");
  const [CollegeContact, setCollegeContact] = useState("");
  const [CollegeWebsite, setCollegeWebsite] = useState("");
  const [Doc, setDoc] = useState("");
  const [report, setReport] = useState(false);

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
  const handleUpload = async (file) => {
    S3FileUpload.uploadFile(file, config)
      .then((data) => {
        setDoc(data.location);
      })
      .catch((err) => console.error(err));
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
          setReport(true);
        }
      })
      .catch((error) => console.log(error));
  };
  const handleReport = () => {
    console.log("not Disabled");
    const url = APIUrls.reportQuery();
    let body = JSON.stringify({
      UserContact: email,
      Message: Message,
      UserName: UserName,
      CollegeName: CollegeName,
      CollegeContact: CollegeContact,
      CollegeWebsite: CollegeWebsite,
      Doc: Doc,
    });
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
        if (data.status === "Success") {
          alert("Your Query is registered successfully");
          window.location = "/";
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={classes.mainDiv}>
      <NavBar name="Report" />
      <div className={classes.formBody}>
        <center>
          <form>
            <h2 className={classes.title}>Report Suspicious Institution</h2>
            <p className={classes.info}>
              You can always report suspicious colleges you come accross in real
              life or when You find something Suspicious
            </p>

            <input
              type="text"
              placeholder="Suspicious College Name"
              className={classes.inpId}
              onChange={(e) => {
                setCollegeName(e.target.value);
              }}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className={classes.inpId}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="Your Name"
              className={classes.inpId}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
            <input
              type="email"
              placeholder="Suspicious College’s Email (optional)"
              className={classes.inpId}
              onChange={(e) => {
                setCollegeContact(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Suspicious College’s Website
                            (optional)"
              className={classes.inpId}
              onChange={(e) => {
                setCollegeWebsite(e.target.value);
              }}
            />
            <textarea
              type="text"
              placeholder="Suspicious College details"
              className={classes.inpId}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            />
            <div className={classes.uploadDocFlex}>
              <p className={classes.infoDoc}>
                Supporting Photos/Documents (Optional)
              </p>
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
            <ReCAPTCHA
              sitekey="6LfSr6ghAAAAANogFLUTTs_1M3Y7LwwQ_Ki9U0jI"
              onChange={(e) => {
                handleCaptcha(e);
              }}
            />
            <button
              type="button"
              style={{ backgroundColor: report ? "black" : "grey" }}
              className={classes.btn}
              disabled={!report}
              onClick={handleReport}
            >
              Submit Report
            </button>
          </form>
        </center>
      </div>
    </div>
  );
}

export default Report;
