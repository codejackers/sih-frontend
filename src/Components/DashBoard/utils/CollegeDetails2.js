import React from "react";
import classes from "../Style/CollegeDetails2.module.css";
import PinDropIcon from "@mui/icons-material/PinDrop";
import EditIcon from "@mui/icons-material/Edit";
function CollegeDetails2(props) {
  return (
    <div className={classes.CollegeDetails}>
      <div className={classes.desc}>
        <p>{props.longDesc}</p>

        {props.verified && (
          <EditIcon
            onClick={() => {
              props.onEdit(2);
            }}
            sx={{ ml: "7px" }}
          />
        )}
      </div>
      <div className={classes.btns}>
        <button
          onClick={() => {
            window.location.href = props.Gmap;
          }}
        >
          <PinDropIcon fontSize="small" />
          <p>Locate on Maps</p>

        </button>
        <p>{props.clgAddress}</p>
      </div>
    </div>
  );
}

export default CollegeDetails2;
