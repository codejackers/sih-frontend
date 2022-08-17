import React from "react";
import classes from "../Style/HorizontalScroller.module.css";
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
    </div>
  );
}

export default HorizontalScroller;
