import React from "react";
import classes from "../Style/CollegeNotifications.module.css";
import { Link } from "react-router-dom";

const datas = [
  {
    heading: "this is my heading",
    doc: "this is my desc",
  },
  {
    heading: "this is my heading",
    desc: "this is my desc",
  },
  {
    heading: "this is my heading",
    desc: "this is my desc",
  },
  {
    heading: "this is my heading",
    desc: "this is my desc",
  },
  {
    heading: "this is my heading",
    desc: "this is my desc",
  },
  {
    heading: "this is my heading",
    desc: "this is my desc",
  },
  {
    heading: "this is my heading",
    desc: "this is my desc",
  },
];

function CollegeNotifications() {
  return (
    <div className={classes.CollegeNotifications}>
      {datas.map((data) => {
        return (
          <Link
            to="https://codejackers1.s3.ap-south-1.amazonaws.com/photos/Final_Schedule_for_SIH_2022_Software_25_to_26th_August_2022_2.pdf"
            target="_blank"
            download
          >
            <div className={classes.Notification}>
              <h3> {data.heading}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CollegeNotifications;
