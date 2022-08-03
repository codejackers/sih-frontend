import React, { useEffect } from "react";
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
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ResultCard from "./utils/ResultCard";
import { Player } from "@lottiefiles/react-lottie-player";
import { getAllCollege } from "../../actions/college";

function HomePage() {
  const changes = useSelector((state) => state.changes);
  const [city, setCity] = React.useState("All");
  const dispatch = useDispatch();
  // dispatch(getAllCollege());
  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllCollege());
    }, 5000);
  }, []);

  return (
    <div className={classes.HomePage}>
      <Navbar color="#fff" />
      <div className={classes.Filter}>
        <h4>Filter Results </h4>
        <FilterAltIcon sx={{ alignSelf: "center" }} />
      </div>

      {changes.colleges.length == 0 ? (
        <Player
          style={{ height: "400px" }}
          src="https://assets9.lottiefiles.com/packages/lf20_i8mmfrht.json"
          autoplay
          loop
        />
      ) : (
        changes.colleges.map((data) => (
          <ResultCard key={data._id} name={data.Uname} />
        ))
      )}
    </div>
  );
}

export default HomePage;
