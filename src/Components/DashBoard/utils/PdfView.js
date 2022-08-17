import { borderRadius } from "@mui/system";
import React, { useState, useEffect } from "react";

function PdfView(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  function onDocumentLoadSuccess({ numPages }) {
    console.log("numPages");
    setNumPages(numPages);
  }

  const handleBack = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  const handleFront = () => {
    if (numPages > pageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div
      style={{
        maxWidth: "730px",
        margin: "auto",
        marginTop: "1rem",
        borderRadius: "10px",
      }}
    >
      <object
        width="100%"
        height={width < 650 ? "400px" : "800px"}
        data={props.file}
        type="application/pdf"
      >
        {" "}
      </object>
    </div>
  );
}

export default PdfView;
