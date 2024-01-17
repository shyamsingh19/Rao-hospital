import React from "react";
import "./doctors.css";
import doctor1 from "../../assets/doctor1.png";
import doctor2 from "../../assets/doctor2.png";
import doctor3 from "../../assets/doctor3.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import fb from "../../assets/fb.png";

const Doctors = () => {
  return (
    <section id="doctors">
      <div className="docheading">
        <h4 className="smalldocheading">Trusted Care</h4>
        <h2 className="largedocheading">Our Doctors</h2>
      </div>

      <div className="docimages">
        <span className="firstdoctor">
          <img src={doctor1} alt="" className="firstdoc" />
          <h5 className="docname">Doctor’s Name</h5>
          <h4 className="docfield">Neurology</h4>
          <span className="socialmedia">
            <a href="">
              <img src={insta} alt="" className="insta" />
            </a>
            <a href="">
              <img src={fb} alt="" className="fb" />
            </a>
            <a href="">
              <img src={linkedin} alt="" className="linkedin" />
            </a>
          </span>
          <span className="viewprofilecontainer">
            <a href="">
              <h4 className="viewprofile">View Profile</h4>
            </a>
          </span>
        </span>

        <span className="seconddoctor">
          <img src={doctor2} alt="" className="firstdoc" />
          <h5 className="docname">Doctor’s Name</h5>
          <h4 className="docfield">Neurology</h4>
          <span className="socialmedia">
            <a href="">
              <img src={insta} alt="" className="insta" />
            </a>
            <a href="">
              <img src={fb} alt="" className="fb" />
            </a>
            <a href="">
              <img src={linkedin} alt="" className="linkedin" />
            </a>
          </span>
          <span className="viewprofilecontainer">
            <a href="">
              <h4 className="viewprofile">View Profile</h4>
            </a>
          </span>
        </span>

        <span className="thirddoctor">
          <img src={doctor3} alt="" className="firstdoc" />
          <h5 className="docname">Doctor’s Name</h5>
          <h4 className="docfield">Neurology</h4>
          <span className="socialmedia">
            <a href="">
              <img src={insta} alt="" className="insta" />
            </a>
            <a href="">
              <img src={fb} alt="" className="fb" />
            </a>
            <a href="">
              <img src={linkedin} alt="" className="linkedin" />
            </a>
          </span>
          <span className="viewprofilecontainer">
            <a href="">
              <h4 className="viewprofile">View Profile</h4>
            </a>
          </span>
        </span>
      </div>
    </section>
  );
};

export default Doctors;
