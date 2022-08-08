import { Button } from "@mui/material";
import React, { useState } from "react";
import NavBar from "../../UserFacing/utils/Navbar";
import classes from "../Style/TimeSlot.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Style/Calander.css";
function TimeSlot() {
  const [value, onChange] = useState(new Date());
  return (
    <div className={classes.TimeSlot}>
      <NavBar name="Registration" />
      <div className={classes.Calender}>
        <h1 className={classes.Title}>Slots Available</h1>
        <p className={classes.subTitle}>
          Select a preffered slot for verification
        </p>
        <Calendar
          minDate={new Date()}
          className="newCalander"
          onChange={onChange}
          value={value}
        />
        <div className={classes.btn}>
          <button>Proceed to next step</button>
        </div>
      </div>
    </div>
  );
}

export default TimeSlot;
