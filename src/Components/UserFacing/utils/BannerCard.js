import React from "react";
import classes from "../Style/ResultCard.module.css";
import { useNavigate } from "react-router-dom";
import ToolTipComponent from "../../../helpers/ToolTipComponent";

function BannerCard({ data: props }) {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("clicked");
    // navigate(`/college/${props.id}`);
  };
  console.log(props);

  return (
    <div
      className={classes.BannerCard + " cursor-pointer"}
      onClick={handleClick}
    >
      <div className={classes.title}>
        <h1>{props.Uname}</h1>
        {props.ReportCount > 5 && (
          <ToolTipComponent
            content={`Number of reports are ${props.ReportCount}`}
          />
        )}
      </div>
    </div>
  );
}

export default BannerCard;
