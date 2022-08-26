import classes from "../Style/About.module.css";
import MenuButton from "../utils/MenuButton";
import ICON from "../Img/ICON.png";
import GROUP1 from "../Img/group 1.png";
import Navbar from "./Navbar";

const About = () => {
  let phone_no = "930XXXXXXX";
  let email = "xyz@mail.com";
  let address = "xyz street,xyz city,xyz state,India";

  return (
    <>
      <Navbar name="Raise query" color="#fff" />
      <div className={classes.raisequery}>
        <div className={classes.flexcol}>
          <div className={classes.contact}>
            <h2 className={classes.Hcontact}>Contact Us</h2>
            <img className={classes.icon} src={ICON} alt="Contact us" />
            <div className={classes.contactdetails}>
              <p>Phone.no:{phone_no}</p>
              <p>Email : {email}</p>
              <p>Address : {address}</p>
            </div>
          </div>
          <div className={classes.about}>
            <h2 className={classes.Habout}>About us</h2>

            <img className={classes.group1} src={GROUP1} alt="About us" />
            <div className={classes.aboutdetails}>
              <p>
                CodeJackers is a team of students from chhastigarh which has
                come together to solve the problem of fake universities pursuing
                students for admissions. Looking towards the large count of Govt
                Universities, State universities, Private universities and
                Deemed to be universities, we provide a system / portal that
                clearly shows affiliation of universities, authentic recognition
                status and programmes being offered. This also clearly highlight
                fake universities from time to time and on query based. We aim to make this data available to as many people
                as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
