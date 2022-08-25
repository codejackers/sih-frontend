import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import classes from "../Style/Filter.module.css";
import { States, Cities } from "../../../helpers/StatesAndCities";
import { useDispatch } from "react-redux";
import { filterCollege } from "../../../actions/college";
function Filter(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const handleApply = () => {
    dispatch(filterCollege(city));
    props.setFilter();
  };
  return (
    <div className={classes.Filter}>
      <h1>Filter Results</h1>
      <br></br>
      {/* <TextField
        id="outlined-select-currency"
        select
        label="Filter by State"
        sx={{ width: "332px", margin: "auto", mt: "1rem" }}
        onChange={(e) => {
          setState(e.target.value);
        }}
      >
        {States.map((option) => (
          <MenuItem key={option.key} value={option.key}>
            {option.name}
          </MenuItem>
        ))}
      </TextField> */}
      <br />
      <TextField
        id="outlined-select-currency"
        select
        label="Filter by City"
        sx={{
          width: "332px",
          margin: "auto",
          mt: "1rem",
        }}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      >
        {Cities.map((option, id) => (
          <MenuItem key={id} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <div className={classes.buttons}>
        <button
          className={classes.back}
          onClick={() => {
            props.setFilter();
          }}
        >
          Back
        </button>
        <button className={classes.apply} onClick={handleApply}>
          Apply
        </button>
      </div>
    </div>
  );
}

export default Filter;
