import React from "react";
import "./home.css";
import doctor from "../../assets/doctor.png"
import doctormbob from "../../assets/doctormob.png"

const Home = () => {
  return (
    <section id="home">
      <img src={doctor} alt="" className="doctor" />
      <img src={doctormbob} alt="" className="mobdoctor" />

      <span className="doctorText">
        <p className="smallText">Caring for Life</p>
        <p className="largeText">Leading the Way in <br />Medical Excellence</p>

        <button className="ourservices">
          <p className="btntext">Our Services</p></button>
      </span>
    </section>
  );



};

export default Home;
