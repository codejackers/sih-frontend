import React from "react";
import classes from "../Style/HorizontalScroller.module.css";
import AddIcon from "@mui/icons-material/Add";
function HorizontalScroller(props) {
  return (
    <div className={classes.HorizontalScroller}>
      {props.courses.map((data) => {
        <div className={classes.Card}>
          <div className={classes.heading}>
            <h1>{data.heading}</h1>
          </div>
          <p>{data.Desc}</p>
        </div>;
      })}
      {props.verified && (
        <div
          className={classes.Card}
          onClick={() => {
            props.onEdit(3);
          }}
        >
          <img
            src="https://codejackers1.s3.amazonaws.com/photos/plus.png"
            alt="add more"
            style={{ marginTop: "200px", marginLeft: "65px" }}
          />
        </div>
      )}
    </div>
  );
}

export default HorizontalScroller;
