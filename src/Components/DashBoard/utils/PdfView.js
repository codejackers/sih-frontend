import React, { useState } from 'react';
//import { Document, Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import classes from '../Style/PdfView.module.css';
import file from "./cs.pdf";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { autocompleteClasses } from '@mui/material';

function PdfView(props) {

    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    console.log("numPages");
    setNumPages(numPages);
  }

  const handleBack=()=>{
    if(pageNumber>1){
        setPageNumber(pageNumber-1)
    }
  }
  const handleFront=()=>{
    if(numPages>pageNumber){
        setPageNumber(pageNumber+1)
    }
  }

  return (
    <div className={classes.mainDiv} >
      <Document 
      className={classes.view}
      style={{
        margin: "auto"
      }}
      file={props.file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className={classes.controller}>
        <button onClick={handleBack}>
        <ArrowBackIosIcon/>
        </button>
        <button onClick={handleFront}>
        <ArrowForwardIosIcon/>
        </button>
      </div>
      
    </div>
  );
}

export default PdfView;