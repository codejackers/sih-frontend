import React from "react";
import classes from "./Style/HomePage.module.css";
import Navbar from "./utils/Navbar";
import SearchBar from "./utils/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { changeSearchBar } from "../../actions/auth";

function HomePage() {
  const changes = useSelector((state) => state.changes);
  const [city, setCity] = React.useState("All");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className={classes.HomePage}>
      <Navbar color="#0077B6" />
      {!changes.searchbar ? (
        <div className={classes.searchbar}>
          <SearchBar placeholder="Search Query" val={1} />
        </div>
      ) : (
        <div className={classes.customSearch}>
          <div className={classes.searchbar1}>
            {" "}
            <SearchBar placeholder="Enter Institute Name" val={2} />
            <br />
            <hr />
            <h3>Select Your City</h3>
            <Box sx={{ minWidth: "100px" }}>
              <FormControl
                sx={{
                  width: "255px",
                  mt: "2em",
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={city}
                  label="City"
                  onChange={handleChange}
                >
                  <MenuItem value={"All"}>All</MenuItem>
                  <MenuItem value={"Raipur"}>Raipur</MenuItem>
                  <MenuItem value={"Durg"}>Durg</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>{" "}
          <Box
            sx={{
              position: "fixed",
              bottom: "1em",
              right: "2em",
              p: 3,
            }}
          >
            <IconButton
              aria-label="close-drawer"
              onClick={() => {
                dispatch(changeSearchBar(false));
              }}
            >
              <Close sx={{ fontSize: "46px" }} />
            </IconButton>
          </Box>
        </div>
      )}
    </div>
  );
}

export default HomePage;
