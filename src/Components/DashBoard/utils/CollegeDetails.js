import React from "react";
import classes from "../Style/CollegeDetails.module.css";
import ShareIcon from "@mui/icons-material/Share";
import LanguageIcon from "@mui/icons-material/Language";
import CallIcon from "@mui/icons-material/Call";
import EditIcon from "@mui/icons-material/Edit";
function CollegeDetails(props) {
  return (
    <div className={classes.CollegeDetails}>
      <div className={classes.heading}>
        <img src={props.clgLogo} alt="University logo" />
        <div className={classes.desc}>
          <h1>{props.clgName}</h1>
          <p>{props.shortDesc}</p>
        </div>
        {props.verified && (
          <EditIcon
            onClick={() => {
              props.onEdit(1);
            }}
            sx={{ ml: "7px" }}
          />
        )}
      </div>
      <div className={classes.btns}>
        <button
          onClick={() => {
            navigator.clipboard.writeText(props.share);
          }}
        >
          <ShareIcon fontSize="small" />
          <p>Share</p>
        </button>
        <button
          onClick={() => {
            window.location.href = props.Site;
          }}
        >
          <LanguageIcon fontSize="small" />
          <p>College Website</p>
        </button>
        <button
          onClick={() => {
            window.location.href = `tel:+91${props.Contact}`;
          }}
        >
          <CallIcon fontSize="small" />
          <p>Call</p>
        </button>
      </div>
    </div>
  );
}

export default CollegeDetails;
