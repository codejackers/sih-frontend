import React, { useEffect, useState } from "react";
import classes from "./Style/HomePage.module.css";
import Navbar from "./utils/Navbar";
import SearchBar from "./utils/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./utils/Filter";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ResultCard from "./utils/ResultCard";
import { Player } from "@lottiefiles/react-lottie-player";
import { getAllCollege } from "../../actions/college";

function HomePage() {
  const changes = useSelector((state) => state.changes);
  const [clg, setClg] = useState([]);
  const [filter, setFilter] = useState(false);
  const dispatch = useDispatch();

  // dispatch(getAllCollege());

  const handleFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllCollege());
    }, 5000);
    setClg(changes.colleges);
  }, []);

  useEffect(() => {
    // if (changes.colleges.length == 0) {
    //   setTimeout(() => {
    //     dispatch(getAllCollege());
    //   }, 5000);
    //   setClg(changes.colleges);
    // } else {
    setClg(changes.colleges);
  }, [changes.colleges]);
  return (
    <div className={classes.HomePage}>
      <Navbar color="#fff" />
      <div className={classes.container}>
        {!filter && (
          <button className={classes.Filter} onClick={handleFilter}>
            <h4>Filter Results </h4>
            <FilterAltIcon sx={{ alignSelf: "center" }} />
          </button>
        )}

        {filter ? (
          <Filter setFilter={handleFilter} />
        ) : changes.colleges.length == 0 ? (
          <Player
            style={{ height: "400px" }}
            src="https://assets9.lottiefiles.com/packages/lf20_i8mmfrht.json"
            autoplay
            loop
          />
        ) : (
          clg.map((data) => (
            <ResultCard key={data._id} id={data._id} name={data.Uname} />
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
