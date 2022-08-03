import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import classes from "../Style/SearchBar.module.css";
import { changeSearchBar } from "../../../actions/auth";

function SearchBar(props) {
  const changes = useSelector((state) => state.changes);
  const dispatch = useDispatch();

  const handleClick = () => {
    // if (!changes.searchbar) {
    //   dispatch(changeSearchBar(true));
    // }
  };
  return (
    <TextField
      fullWidth
      id="standard-bare"
      variant="outlined"
      onClick={handleClick}
      placeholder={props.placeholder}
      InputProps={{
        className: props.val == 1 ? classes.input : classes.input1,
        startAdornment: (
          <IconButton sx={{ width: "60px", height: "32px" }}>
            <Search sx={{ fontSize: "40px" }} />
          </IconButton>
        ),
      }}
    />
  );
}

export default SearchBar;
