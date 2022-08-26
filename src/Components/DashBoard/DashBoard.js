import React, { useEffect, useState } from "react";
import CollegeDetails from "./utils/CollegeDetails";
import CollegeDetails2 from "./utils/CollegeDetails2";
import PdfView from "./utils/PdfView";
import { useParams } from "react-router-dom";
import { APIUrls } from "../../helpers/urls";
import { reverse, set } from "lodash";
import HorizontalScroller from "./utils/HorizontalScroller";
import { useSelector } from "react-redux";
import EditDetails from "./utils/EditDetails";
import { useDispatch } from "react-redux";
import {
  createCourse,
  deleteCourse,
  saveCollegeData,
  updateCollege,
  deleteCollegeData,
} from "../../actions/college";
import classes from "./Style/DashBoard.module.css";
import Navbar from "../UserFacing/utils/Navbar";
import CollegeNotifications from "./utils/CollegeNotifications";
import NotificationPopup from "./utils/NotificationPopup";
import { deleteNotification, saveNotification } from "../../actions/auth";
function DashBoard(props) {
  const { id } = useParams();
  const [popUpType, setPopUpType] = useState(1);
  const [open, setOpen] = useState(false);
  const [verified, setVerified] = useState(false);
  const auth = useSelector((state) => state.auth);
  const [notify, setNotify] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.Login?.Verified && auth.Login?.Id === id) {
      setVerified(true);
    }
  }, []);
  const handleType = (val) => {
    setPopUpType(val);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleNotify = () => {
    setNotify(!notify);
  };
  const handleAddConstNotify = (data) => {
    dispatch(saveNotification({ UID: details.UID, ...data }));
    setNotify(false);
  };
  const handleDeleteConstNotify = (data) => {
    dispatch(deleteNotification({ UID: details.UID, ...data }));
    setNotify(false);
  };
  const handleSave = (data) => {
    if (popUpType === 1 || popUpType === 2) {
      dispatch(
        updateCollege({
          UID: details.UID,
          ...data,
        })
      );
    } else if (popUpType === 3) {
      dispatch(
        createCourse({
          UID: details.UID,
          CID: "edqweweq1234",
          AdmissionDOC: "sdsdadssd",
          ...data,
        })
      );
    }
  };
  const handleDeleteCourse = (data) => {
    dispatch(
      deleteCourse({
        UID: details.UID,
        ...data,
      })
    );
  };
  const [details, setDetails] = useState({
    Doc: "https://codejackers1.s3.amazonaws.com/photos/Final_Schedule_for_SIH_2022_Software_25_to_26th_August_2022_2.pdf",
    Pass: "",
    UCity: "",
    UID: "",
    Uemail: "",
    Uname: "",
    _id: "",

    Clglogo:
      "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80",
    Courses: [],
    Contact: null,
    Gmap: "",
    LongDesc: "",
    ShortDesc: "",
    Prospectus: "",
    Site: "",
    Notifications: [],
  });
  useEffect(() => {
    const url = APIUrls.CollegeDetails();
    fetch(`${url}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((resp) => {
        setDetails((prev) => {
          return {
            ...prev,
            ...resp.college,
          };
        });
        console.log(details);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar name={verified ? "Dashboard" : details.Uname} color="#fff" />
      <div
        className={classes.DashBoard}
        style={{ margin: "auto", padding: "0 1rem" }}
      >
        <div className={classes.UpperLayer}>
          <div className={classes.UppperLeft}>
            <CollegeDetails
              clgName={details.Uname}
              clgLogo={
                details.Clglogo != ""
                  ? details.Clglogo
                  : "https://codejackers1.s3.ap-south-1.amazonaws.com/photos/HolderUniv.svg"
              }
              share={`http://localhost:3002/college/${id}`}
              shortDesc={
                details.ShortDesc != ""
                  ? details.ShortDesc
                  : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              }
              onEdit={handleType}
              Site={details.Site}
              verified={verified}
              Contact={details.Contact}
            />
            <EditDetails
              open={open}
              type={popUpType}
              handleClose={handleClose}
              handleSave={handleSave}
              details={details}
            />
            <CollegeDetails2
              longDesc={
                details.LongDesc != ""
                  ? details.LongDesc
                  : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              }
              clgAddress={details.UCity != "" ? details.UCity : "--Address--"}
              onEdit={handleType}
              Gmap={details.Gmap}
              verified={verified}
            />
          </div>
          <NotificationPopup
            open={notify}
            handleClose={handleNotify}
            handleSave={handleAddConstNotify}
          />
          <CollegeNotifications
            datas={details.Notifications}
            verified={verified}
            onEdit={handleNotify}
            onDelete={handleDeleteConstNotify}
          />
        </div>
        <HorizontalScroller
          courses={details.Courses}
          verified={verified}
          onEdit={handleType}
          onDelete={handleDeleteCourse}
        />
        <PdfView
          file={
            details.Prospectus != ""
              ? details.Prospectus
              : "https://codejackers1.s3.amazonaws.com/photos/Final_Schedule_for_SIH_2022_Software_25_to_26th_August_2022_2.pdf"
          }
        />
      </div>
    </>
  );
}

export default DashBoard;
