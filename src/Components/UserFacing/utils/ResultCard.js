import React from "react";
import classes from "../Style/ResultCard.module.css";
import CallIcon from "@mui/icons-material/Call";
import { useNavigate } from "react-router-dom";
import { PeopleSharp } from "@mui/icons-material";
import ToolTipComponent from "../../../helpers/ToolTipComponent";
function ResultCard(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/college/${props.id}`);
  };
  return (
    <div
      className={classes.ResultCard + " cursor-pointer"}
      onClick={handleClick}
    >
      <div className={classes.title}>
        <img src={props.Clglogo} />
        <h1>{props.name}</h1>
        {props.ReportCount > 5 && (
          <ToolTipComponent
            content={`Number of reports are ${props.ReportCount}`}
          />
        )}
      </div>
      <div className={classes.desc}>
        <p>{props.shortDesc}</p>
      </div>
      <div className={classes.details}>
        <h4>Contact Details:</h4>
        <div className={classes.contact}>
          <p>
            {props.email != "" ||
              (props.email == undefined && <span>Email:</span>)}
            {props.email}
          </p>
          <button
            onClick={() => {
              window.location.href = `tel:+91${props.contact}`;
            }}
          >
            <CallIcon fontSize="small" sx={{ alignSelf: "center" }} />{" "}
            <p>Call</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
