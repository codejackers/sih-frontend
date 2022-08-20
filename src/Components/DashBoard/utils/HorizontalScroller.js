import React from "react";
import classes from "../Style/HorizontalScroller.module.css";
import RemoveIcon from "@mui/icons-material/Remove";
function HorizontalScroller(props) {
  return (
    <div className={classes.HorizontalScroller}>
      {props.courses.map((data) => (
        <div className={classes.Card}>
          <div className={classes.heading}>
            <h1>{data.CourseName}</h1>
            {console.log(data._id)}
            {props.verified && (
              <button
                className={classes.remove}
                onClick={() => {
                  props.onDelete({ CID: data._id });
                }}
              >
                <RemoveIcon />
              </button>
            )}
          </div>
          <p className={classes.Cap}>Intake capacity: {data.CourseIntakeCap}</p>
          <p>{data.CourseDesc}</p>
        </div>
      ))}
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
