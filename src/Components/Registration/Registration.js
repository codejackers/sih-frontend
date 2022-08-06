import React from 'react'
import MenuButton from "../UserFacing/utils/MenuButton";
import classes from "./Style/Registration.module.css";

function Registration() {
  return (

    <div className={classes.mainDiv}>
      <div className={classes.titleMenu}>
        <div>
          <h2 className={classes.heading}>Registration</h2>
        </div>
        <div className={classes.menuSize}>
          <MenuButton/>
        </div>
        
      </div>
      <div className={classes.formBody}>
        <center>

          <form>
            <h2 className={classes.title}>Fill in the details</h2>
            <p className={classes.info}>We'll get back to you via e-mail once we verify your registration Request.</p>
            
            <input className={classes.inpUnivName} placeholder='University Name' type="email"/> <br/>
            <input 
            placeholder='Email'
            className={classes.inpEmail} 
            />
            <br/>
            <button type="submit" className={classes.btn}>Proceed to next step</button>
          </form>
            </center>
      </div>
    </div>
  )    
}


export default Registration;