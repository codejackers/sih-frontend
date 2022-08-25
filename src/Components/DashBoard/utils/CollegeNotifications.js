import React from "react";
import classes from "../Style/CollegeNotifications.module.css";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";

function CollegeNotifications(props) {
  console.log(props.datas);
  return (
    <>
      {(props.verified || props.datas.length != 0) && (
        <div className={classes.CollegeNotifications}>
          <div className={classes.heading}>
            <h3>Notifications</h3>
            {props.verified && (
              <EditIcon
                onClick={() => {
                  props.onEdit(2);
                }}
                sx={{ ml: "7px" }}
              />
            )}
          </div>
          {props.datas.map((data) => {
            return (
              <Link to={data.Doc} target="_blank" download>
                <div className={classes.Notification}>
                  <h3> {data.Title}</h3>
                  {props.verified && (
                    <button
                      className={classes.remove}
                      onClick={() => {
                        props.onDelete({ _id: data._id });
                      }}
                    >
                      <RemoveIcon />
                    </button>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default CollegeNotifications;
