import React from "react";
import Tooltip from "react-simple-tooltip";
function ToolTipComponent(props) {
  return (
    <div>
      <Tooltip
        arrow={15}
        background="#000"
        border="red"
        color="#fff"
        fadeDuration={0}
        fadeEasing="linear"
        fixed={false}
        fontFamily="inherit"
        fontSize="12px"
        offset={0}
        padding={10}
        placement="top"
        radius={0}
        zIndex={1}
        width={100}
        content={props.content}
        className="tooltip-div"
        style={{ backgroundColor: "#ff0000" }}
      >
        <button>!</button>
      </Tooltip>
    </div>
  );
}

export default ToolTipComponent;
