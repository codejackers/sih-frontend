import React, { useEffect, useState } from "react";
import CollegeDetails from "./utils/CollegeDetails";
import CollegeDetails2 from "./utils/CollegeDetails2";
import PdfView from "./utils/PdfView";
import { useParams } from "react-router-dom";
import { APIUrls } from "../../helpers/urls";
import { reverse } from "lodash";
import HorizontalScroller from "./utils/HorizontalScroller";
function DashBoard() {
  const { id } = useParams();
  const [details, setDetails] = useState({
    Doc: "https://codejackers1.s3.amazonaws.com/photos/Final_Schedule_for_SIH_2022_Software_25_to_26th_August_2022_2.pdf",
    Pass: "",
    UCity: "",
    UID: "",
    Uemail: "",
    Uname: "",
    _id: "",
    Logo: "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80",
  });
  useEffect(() => {
    const url = APIUrls.CollegeDetails();
    console.log(`${url}/${id}`);
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
            ...resp,
          };
        });
        console.log(details);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "0 1rem" }}>
      <CollegeDetails
        clgName={details.Uname}
        clgLogo={
          details.Logo != ""
            ? details.Logo
            : "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80"
        }
        share={`http://localhost:3002/college/${id}`}
        shortDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <CollegeDetails2
        longDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        clgAddress="--Address--"
      />
      <HorizontalScroller courses={[]} />
      <PdfView
        file={
          details.Doc != ""
            ? details.Doc
            : "https://codejackers1.s3.amazonaws.com/photos/Final_Schedule_for_SIH_2022_Software_25_to_26th_August_2022_2.pdf"
        }
      />
    </div>
  );
}

export default DashBoard;
