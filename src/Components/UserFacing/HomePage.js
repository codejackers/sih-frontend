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
  const [gif, setGif] = useState(true);
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
      setGif(false);
    }, 5000);
    setClg(changes.colleges);
  }, []);

  useEffect(() => {
    setClg(changes.colleges);
    console.log(clg);
  }, [changes.colleges]);

  return (
    <div className={classes.HomePage}>
      <Navbar color="#fff" />
      <div className={classes.container}>
        {!filter && (
          <div className={classes.contain}>
            <div className={classes.FilterContainer}>
              <SearchBar placeholder="Search Query" val={2} />
              <div className={classes.flexOptions}>
                <button className={classes.Filter} onClick={handleFilter}>
                  <h4>Filter Results </h4>
                  <FilterAltIcon sx={{ alignSelf: "center" }} />
                </button>
                <div
                  id="google_translate_element"
                  class="goog-te-gadget Filter marginSet"
                ></div>
              </div>
            </div>
          </div>
        )}

        {filter ? (
          <Filter setFilter={handleFilter} />
        ) : gif ? (
          <Player
            style={{ height: "400px" }}
            src="https://assets9.lottiefiles.com/packages/lf20_i8mmfrht.json"
            autoplay
            loop
          />
        ) : changes.colleges.length == 0 ? (
          <p className={classes.message}>
            There is either no such university on the genuine list, or it has not been registered yet.
          </p>
        ) : (
          clg.map((data) => (
            <ResultCard
              key={data._id}
              id={data._id}
              name={data.Uname}
              shortDesc={
                data.ShortDesc != ""
                  ? data.ShortDesc
                  : " Lorem Ipsum es simplemente el texto de relleno de las imprentas yarchivos de texto. Lorem Ipsum ha sido el texto de relleno estándar delas industrias desde el año 1500, cuando un impresor ..."
              }
              ReportCount={data.ReportCount}
              email={data.Uemail}
              contact={data.Contact}
              Clglogo={
                data.Clglogo === "" || data.Clglogo === undefined
                  ? "https://codejackers1.s3.ap-south-1.amazonaws.com/photos/HolderUniv.svg"
                  : data.Clglogo
              }
            />
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
