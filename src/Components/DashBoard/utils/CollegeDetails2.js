import React from "react";
import classes from "../Style/CollegeDetails2.module.css";
import PinDropIcon from "@mui/icons-material/PinDrop";
import EditIcon from "@mui/icons-material/Edit";
function CollegeDetails2(props) {
  return (
    <div className={classes.CollegeDetails}>
      <div className={classes.desc}>
        <p>{props.longDesc}</p>
        {props.verified && <EditIcon sx={{ ml: "7px" }} />}
      </div>
      <div className={classes.btns}>
        <button>
          <PinDropIcon />
          <span>Locate on Maps</span>
        </button>
        <p>{props.clgAddress}</p>
      </div>
    </div>
  );
}

export default CollegeDetails2;
