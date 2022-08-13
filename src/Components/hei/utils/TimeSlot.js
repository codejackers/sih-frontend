import { Button } from "@mui/material";
import React, { useState } from "react";
import NavBar from "../../UserFacing/utils/Navbar";
import classes from "../Style/TimeSlot.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Style/Calander.css";
import SlotPopup from "./SlotPopup";
import { useDispatch } from "react-redux";
import { registerSlot } from "../../../actions/auth";
function TimeSlot(props) {
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [timing, setTiming] = useState("");
  const dispatch = useDispatch();
  const handleSlot = (slot) => {
    setTiming(slot);
  };
  const handleNext = () => {
    if (timing != "") {
      dispatch(
        registerSlot({
          slot: timing + "@#@" + String(value).split("2 ")[0] + "2",
        })
      );
      props.setDoc();
    }
  };
  return (
    <div className={classes.TimeSlot}>
      <NavBar name="Registration" />
      <div className={classes.Calender}>
        <h1 className={classes.Title}>Slots Available</h1>
        <p className={classes.subTitle}>
          Select a preffered slot for verification
        </p>
        <SlotPopup
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
          handleSlot={handleSlot}
        />
        <Calendar
          minDate={new Date()}
          className="newCalander"
          onChange={onChange}
          value={value}
          onClickDay={() => {
            setOpen(true);
          }}
        />
        <div className={classes.btn}>
          <button className={classes.btn1} onClick={props.back}>
            Back
          </button>
          <button className={classes.btn2} onClick={handleNext}>
            next step
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimeSlot;
