import React from "react";
import classes from "../Style/ResultCard.module.css";
import CallIcon from "@mui/icons-material/Call";
import { useNavigate } from "react-router-dom";
import { PeopleSharp } from "@mui/icons-material";
import { Player } from "@lottiefiles/react-lottie-player";
import ToolTipComponent from "../../../helpers/ToolTipComponent";
import { useSpring, animated as A } from "react-spring";
function ResultCard(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/college/${props.id}`);
  };
  const animatedProps = useSpring({
    from: { marginLeft: -200, opacity: 0 },
    opacity: 1,
    marginLeft: 200,
    config: { mass: 1, tension: 140, friction: 42 },
  });
  return (
    <A.div
      className={classes.ResultCard + " cursor-pointer"}
      style={{ ...animatedProps }}
      onClick={handleClick}
    >
      <div className={classes.title}>
        <img src={props.Clglogo} />
        <h1>{props.name}</h1>
        {props.verified ? (
          <Player
            src="https://assets7.lottiefiles.com/packages/lf20_6LimOm.json"
            style={{ height: "40px" }}
            autoplay
            loop
          />
        ) : (
          <ToolTipComponent
            content={`Number of reports are ${props.ReportCount}`}
          />
        )}
      </div>
      <div className={classes.desc}>
        <p>{props.shortDesc}</p>
      </div>
      <div className={classes.details}>
        <div className={classes.contact}>
          <p>
            <a href={`mailto:${props.email}`}>{props.email}</a>
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
    </A.div>
  );
}

export default ResultCard;
