import React from "react";
import "./about.css";
import learnmore from "../../assets/learnmore.png";
import doctors from "../../assets/doctors.png";
// import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <div className="aboutcontent">
        <h3 className="smallheading">Welcome to Meddical</h3>
        <h2 className="largeheading">A Great Place to Receive Care</h2>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>

        <span className="learnmore">
          <a href="www" className="learntext">
            Learn more
            <img src={learnmore} alt="learnmore" className="learnarrow" />
          </a>
        </span>

        <img src={doctors} alt="" className="doctors" />
      </div>
    </section>
  );
};

export default About;
