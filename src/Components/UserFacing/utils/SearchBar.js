import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import classes from "../Style/SearchBar.module.css";
import { changeSearchBar } from "../../../actions/auth";
import { throttle } from "lodash";
import { getCollege } from "../../../actions/college";

function SearchBar(props) {
  const changes = useSelector((state) => state.changes);
  const dispatch = useDispatch();
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    props.onClick();
    dispatch(getCollege(e.target.value));
  };
  return (
    <TextField
      fullWidth
      id="standard-bare"
      variant="outlined"
      onChange={handleChange}
      placeholder={props.placeholder}
      sx={{ mr: "1rem" }}
      InputProps={{
        className: props.val == 1 ? classes.input : classes.input1,
        startAdornment: (
          <IconButton sx={{ width: "60px", height: "32px" }}>
            <Search sx={{ fontSize: "40px", color: "#223959" }} />
          </IconButton>
        ),
      }}
    />
  );
}

export default SearchBar;
