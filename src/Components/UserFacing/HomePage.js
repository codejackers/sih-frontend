import React from "react";
import { MenuButton } from "./utils/MenuButton";
import classes from "./Style/HomePage.module.css";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
function HomePage() {
  return (
    <div className={classes.HomePage}>
      <Box
        display={"flex"}
        position={"sticky"}
        top={0}
        backgroundColor={"#0077B6"}
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
        <MenuButton />
      </Box>
      <div className={classes.searchbar}>
        <TextField
          fullWidth
          id="standard-bare"
          variant="outlined"
          placeholder="Search Query"
          InputProps={{
            className: classes.input,
            startAdornment: (
              <IconButton sx={{ width: "60px", height: "32px" }}>
                <Search sx={{ fontSize: "40px" }} />
              </IconButton>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default HomePage;
