import React from "react";
import classes from "../Style/CollegeDetails.module.css";
import ShareIcon from "@mui/icons-material/Share";
import LanguageIcon from "@mui/icons-material/Language";
import CallIcon from "@mui/icons-material/Call";
function CollegeDetails(props) {
  return (
    <div className={classes.CollegeDetails}>
      <div className={classes.heading}>
        <img src={props.clgLogo} alt="University logo" />
        <div className={classes.desc}>
          <h1>{props.clgName}</h1>
          <p>{props.shortDesc}</p>
        </div>
      </div>
      <div className={classes.btns}>
        <button
          onClick={() => {
            navigator.clipboard.writeText(props.share);
          }}
        >
          <ShareIcon />
          <span>Share</span>
        </button>
        <button>
          <LanguageIcon />
          <span>College Website</span>
        </button>
        <button>
          <CallIcon />
          <span>Call</span>
        </button>
      </div>
    </div>
  );
}

export default CollegeDetails;
