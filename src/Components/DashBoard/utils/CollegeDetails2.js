import React from "react";
import classes from "../Style/CollegeDetails2.module.css";
import PinDropIcon from "@mui/icons-material/PinDrop";
function CollegeDetails(props) {
  return (
    <div className={classes.CollegeDetails}>
      <div className={classes.desc}>
        <div className={classes.desc}>
          <p>{props.longDesc}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          <h5>{props.clgAddr}</h5>
        </div>
      </div>
      <div className={classes.btns}>
        <button>
          <PinDropIcon/>
          <span>Locate on Maps</span>
        </button>
        <p className={classes.clgAddr}>
        -College Address-
        </p>
      </div>
    </div>
  );
}

export default CollegeDetails;
