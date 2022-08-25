import React from "react";
import { Box } from "@mui/material";
import { MenuButton } from "./MenuButton";
import SearchBar from "./SearchBar";
import classes from "../Style/SearchBar.module.css";
import { useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();

  return (
    <Box
      display={"flex"}
      position={"sticky"}
      top={0}
      backgroundColor={"white"}
      pl={3}
      pr={3}
      zIndex={2}
      maxHeight={100}
      height={100}
      justifyContent={"space-between"}
    >
      {/* <div className={classes.Logo}>
        <img
          src="https://images.unsplash.com/photo-1597742800947-e17e915b8d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
          alt="logo"
          height="60px"
          style={{ margin: "auto", justifySelf: "center", marginLeft: 0 }}
        />
      </div> */}

      <h1
        style={{
          margin: "auto",
          justifySelf: "center",
          marginLeft: 0,
          marginTop: "25px",
          fontFamily: "urbanist",
        }}
      >
        {props.name}
      </h1>

      {!props.hidden && (
        <MenuButton sx={{ fontSize: "Large" }} fontSize="Large" />
      )}
    </Box>
  );
}

export default Navbar;
