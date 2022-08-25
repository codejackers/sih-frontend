import NavBar from "../UserFacing/utils/Navbar";
import React, { useState } from "react";
import classes from "../Report/style/report.module.css";

function report(props) {
    return (
        <div className={classes.mainDiv}>
            <NavBar name="Report" />
            <div className={classes.formBody}>
                <center>
                    <form>
                        <h2 className={classes.title}>Report Suspicious Institution</h2>
                        <p className={classes.info}>
                            You can always report suspicious colleges you come accross in real life or when You find something Suspicious
                        </p>
                        
                        
                        <input
                            type="text"
                            placeholder="Suspicious College Name"
                            className={classes.inpId}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className={classes.inpId}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Suspicious College’s Email (optional)"
                            className={classes.inpId}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Suspicious College’s Website
                            (optional)"
                            className={classes.inpId}
                            required
                        />
                        <textarea
                            type="text"
                            placeholder="Suspicious College details"
                            className={classes.inpId}
                            required
                        />
                        <div className={classes.uploadDocFlex}>
                            <p className={classes.infoDoc}>Supporting
                                Photos/Documents
                                (Optional)</p>
                            <label htmlFor="files" className={classes.label}>
                                Upload Files
                            </label>
                            <input
                                accept="application/pdf"
                                id="files"
                                className={classes.fileUpload}

                                type="file"
                                required
                            />
                        </div>
                        <button type="button" className={classes.btn}>
                            Submit Report
                        </button>
                    </form>
                </center>
            </div>
        </div>
    );
}

export default report;
