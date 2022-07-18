import React from "react";
import { Box } from "@mui/material";
import { MenuButton } from "./MenuButton";
function Navbar(props) {
  return (
    <Box
      display={"flex"}
      position={"sticky"}
      top={0}
      backgroundColor={props.color}
      pl={3}
      pr={3}
      zIndex={2}
      maxHeight={100}
      height={100}
    >
      <img
        src="https://images.unsplash.com/photo-1597742800947-e17e915b8d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
        alt="logo"
        height="60px"
        style={{ margin: "auto", justifySelf: "center", marginLeft: 0 }}
      />
      {!props.hidden && <MenuButton />}
    </Box>
  );
}

export default Navbar;
