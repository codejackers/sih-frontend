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
                University Grants Commission is a statutory body set up by the
                Department of Higher Education, Ministry of Education,
                Government of India in accordance to the UGC Act 1956 and is
                charged with coordination, determination and maintenance of
                standards of higher education in India. It provides recognition
                to universities in India, and disbursements of funds to such
                recognized universities and colleges. The headquarters are in
                New Delhi, and it has six regional centres in Pune, Bhopal,
                Kolkata, Hyderabad, Guwahati and Bangalore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;