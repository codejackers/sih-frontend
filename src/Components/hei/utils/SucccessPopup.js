import React from "react";
import Successimg from "../Img/successVector.png";
import Dialog from "@mui/material/Dialog";
function SucccessPopup(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => {
          props.handleClose();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div
          style={{
            height: "300px",
            width: "300px",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <img
            style={{
              height: "82px",
              width: "82px",
              margin: "auto",
              marginTop: "1rem",
            }}
            src={Successimg}
            alt="success"
          />
          <p style={{ color: "#A3A3A3", maxWidth: "250px", marginTop: "1rem" }}>
            An Email has been sent to you with meeting link with preffered time
            slot.
          </p>
          <button
            style={{
              marginTop: "1.5rem",
              width: "270px",
              height: "45px",
              color: "#fff",
              backgroundColor: "#000",
              borderRadius: "8px",
              border: 0,
            }}
            onClick={props.handleClose}
          >
            Ok
          </button>
        </div>
      </Dialog>
    </div>
  );
}

export default SucccessPopup;
