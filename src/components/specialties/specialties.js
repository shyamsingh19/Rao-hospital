import React from "react";
import "./spealties.css";

import { GiMedicines } from "react-icons/gi";
import { FaBaby } from "react-icons/fa6";
import { GiStomach } from "react-icons/gi";
import { GiCrossedBones } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { TbEmergencyBed } from "react-icons/tb";
import { FaSyringe } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";

import Footer from "../footer/footer";
import Header from "../header/header";
import { Link } from "react-router-dom";

const Specialties = () => {

  return (
    <>
      <Header />
      <section id="specialties">

        <div className="speciality_wrap">
          <div className="specialheading">
            <h3 className="specialsmallhead">Award winning patient care</h3>
            <p className="red_bar"></p>
            <p className="speciallargehead">Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt <br /> molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
          </div>

          <div className="allspecial">
            <div className="special1">
              <Link to='/specialities/Internalmedicine'>
                <div className="special">

                  <div className="first_cell">
                    <GiMedicines className="special_Icon" />
                    <h6 className="specialimgtext">Internal medicine </h6>
                  </div>
                  <p> Internal medicine is a broad field of medicine that focuses on the prevention, diagnosis,</p>

                </div>
              </Link>

              <Link to="/specialities/paeditrics">
                <div className="special">

                  <div className="first_cell">
                    <FaBaby className="special_Icon" />
                    <h6 className="specialimgtext">Paeditrics</h6>
                  </div>
                  <p> The World of Caring for Children</p>

                </div>
              </Link>


              <Link to="/specialities/gyna" >  <div className="special">
                <div className="first_cell">
                  <GiStomach className="special_Icon" />
                  <h6 className="specialimgtext">Gynae and obs</h6>
                </div>
                <p>Gynaecology and obstetrics are two closely related fields of medicine that focus on women's health.</p>
              </div>    </Link>


              <Link to="/specialities/ortho">

                <div className="special">
                  <div className="first_cell">
                    <GiCrossedBones className="special_Icon" />
                    <h6 className="specialimgtext">Ortho </h6>
                  </div>
                  <p>This is a branch of medicine that focuses on the musculoskeletal system, which includes bones, joints, muscles, ligaments, tendons, and nerves.</p>
                </div>
              </Link>

              <Link to="/specialities/labroscopic">

                <div className="special">
                  <div className="first_cell">
                    <FaUserDoctor className="special_Icon" />
                    <h6 className="specialimgtext">Laproscopic surgeries </h6>
                  </div>
                  <p>It's a popular alternative to traditional open surgery</p>
                </div>


              </Link>


              <Link to="/specialities/trauma">

                <div className="special">
                  <div className="first_cell">
                    <TbEmergencyBed className="special_Icon" />
                    <h6 className="specialimgtext">
                      Emergency and Trauma </h6>
                  </div>
                  <p> Emergency medicine and trauma care are closely related fields, both dealing with urgent and life-threatening situations. </p>
                </div>
              </Link>

              <Link to="/specialities/diabetology">
                <div className="special">
                  <div className="first_cell">
                    <FaSyringe className="special_Icon" />
                    <h6 className="specialimgtext">
                      Diabetology </h6>
                  </div>
                  <p>
                    Diabetology is a branch of medicine that specializes in the diagnosis, management, and treatment of diabetes mellitus. </p>
                </div>
              </Link>

              <Link to="/specialities/laboratory">

                <div className="special">
                  <div className="first_cell">
                    <GiTestTubes className="special_Icon" />
                    <h6 className="specialimgtext">laboratory </h6>
                  </div>
                  <p>
A laboratory, also known as a lab, is a facility designed for conducting scientific experiments, research, and measurement</p>
                </div>

              </Link>


            </div>
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
};

export default Specialties;
