import React from "react";
import Tooltip from "react-simple-tooltip";
function ToolTipComponent(props) {
  return (
    <div>
      <Tooltip
        arrow={15}
        background="#000"
        border="#000"
        color="#fff"
        fadeDuration={0}
        fadeEasing="linear"
        fixed={false}
        fontFamily="inherit"
        fontSize="inherit"
        offset={0}
        padding={16}
        placement="top"
        radius={0}
        zIndex={1}
        content={props.content}
      >
        <button>!</button>
      </Tooltip>
    </div>
  );
}

export default ToolTipComponent;
