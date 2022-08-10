import * as React from "react";
import Dialog from "@mui/material/Dialog";

export default function SlotPopup(props) {
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
          style={{ width: "200px", padding: "5px", textAlign: "center" }}
          onClick={() => {
            props.handleSlot("10:30-11:10 AM");
            props.handleClose();
          }}
        >
          <h3>10:30-11:10 AM</h3>
          <hr />
        </div>
        <div
          style={{ width: "200px", padding: "5px", textAlign: "center" }}
          onClick={() => {
            props.handleSlot("1:30-2:10 PM");
            props.handleClose();
          }}
        >
          <h3>1:30-2:10 PM</h3>
          <hr />
        </div>
        <div
          style={{ width: "200px", padding: "5px", textAlign: "center" }}
          onClick={() => {
            props.handleSlot("4:30-5:10 PM");
            props.handleClose();
          }}
        >
          <h3>4:30-5:10 PM</h3>
          <hr />
        </div>
      </Dialog>
    </div>
  );
}
