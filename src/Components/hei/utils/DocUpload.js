import NavBar from "../../UserFacing/utils/Navbar";
import React, { useState } from "react";
import MenuButton from "../../UserFacing/utils/MenuButton";
import classes from "../Style/DocUpload.module.css";
import { useDispatch } from "react-redux";
import { registerCollege, registerUID } from "../../../actions/auth";
import SucccessPopup from "./SucccessPopup";
import { useNavigate } from "react-router-dom";
import { PinDropSharp } from "@mui/icons-material";
function DocUpload(props) {
  const [UID, setUID] = useState("");
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNext = () => {
    if (UID != "") {
      dispatch(registerUID({ uid: UID, doc: "ssd" }));
      setTimeout(() => {
        dispatch(registerCollege());
      }, 100);
      setOpen(true);
    }
  };
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div className={classes.mainDiv}>
      <NavBar name="Registration" />
      <SucccessPopup open={open} handleClose={handleClose} />
      <div className={classes.formBody}>
        <center>
          <form>
            <h2 className={classes.title}>Document Upload</h2>
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
            />
            <div className={classes.uploadDocFlex}>
              <p className={classes.infoDoc}>Supporting Documents</p>
              <label htmlFor="files" className={classes.label}>
                Upload Files
              </label>
              <input id="files" className={classes.fileUpload} type="file" />
            </div>
            <button type="button" className={classes.btn} onClick={handleNext}>
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
