import React from "react";
import "./about.css";
import about from "../../assets/about.jpg";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header />
      <section id="about">
        <div className="aboutuswrap">
          <div >
            <h2>Personal care
              & healthy living</h2>
            <h5> We provide best leading medicle service  in Gurgaon </h5>
            <p>
              Rao Lokram Charitabletrust   is a 25 bedded multispeciality hospital located near rockford convent school, shakti Park sec 10 A , Gurugram </p>
            <p>To provide efficient and effective services affordable and desirable to patients and referring clinicians.</p>
            <ul>
              <li> <p>To provide additional services for the local population.</p></li>
              <li>  <p>To support the principle of local access wherever possible.</p>  </li>
              <li>  <p>To provide services which are quick and easy to access and provide an excellent patient experience.</p></li>
              <li>
                <p>To educate people regarding early treatment and late rehabilitation for diseases</p> </li>

            </ul>
            <section className="aboutsecondimage">
              <img src={about} />
            </section>
            <div className="aboutcontent">
              <ul>

                <li>
                  <p>   OPD services are available  in general medicing , Gynaecology and obstetics , Pulmonology and physiotherapy  </p>
                </li>
                <li><p>  24*7 Facilities</p></li>
                <li><p>  24*7  Admission and  Emergency services  with fully  computed result   </p></li>
                <li><p> 24*7 Pharmacy   </p></li>
                <li><p>  24* 7 Ambulance services are provided by the hospital   </p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
