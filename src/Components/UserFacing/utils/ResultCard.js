import React from "react";
import classes from "../Style/ResultCard.module.css";
import CallIcon from "@mui/icons-material/Call";
function ResultCard(props) {
  return (
    <div className={classes.ResultCard}>
      <div className={classes.title}>
        <img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80" />
        <h1>{props.name}</h1>
      </div>
      <div className={classes.desc}>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor ...
        </p>
      </div>
      <div className={classes.details}>
        <h4>Contact Details:</h4>
        <div className={classes.contact}>
          <p>
            <span>Email:</span>unic@gmail.com
          </p>
          <button href="tel:7697674313">
            <CallIcon fontSize="small" sx={{ alignSelf: "center" }} />{" "}
            <p>Call</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
