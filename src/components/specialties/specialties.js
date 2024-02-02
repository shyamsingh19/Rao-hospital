import React from "react";
import "./spealties.css";
import specialvector from "../../assets/specialvector.png";
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
          <div className="special">
            <div className="first_cell">
          <GiMedicines className="special_Icon" />
            <h6 className="specialimgtext">Internal medicine </h6>
            </div>
            <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
          <div className="special">
          <div className="first_cell">
          <FaBaby  className="special_Icon" />
            <h6 className="specialimgtext">Paeditrics</h6>
            </div>
            <p> Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
          <div className="special">
          <div className="first_cell">
          <GiStomach  className="special_Icon" />
            <h6 className="specialimgtext">Gynae and obs</h6>
            </div>
            <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
        
          <div className="special">
          <div className="first_cell">
          <GiCrossedBones  className="special_Icon" />
            <h6 className="specialimgtext">Ortho </h6>
            </div>
            <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
          <div className="special">
          <div className="first_cell">
          <FaUserDoctor className="special_Icon"  />
            <h6 className="specialimgtext">Laproscopic surgeries </h6>
            </div>
            <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>
          <div className="special">
          <div className="first_cell">
          <TbEmergencyBed className="special_Icon"  />
            <h6 className="specialimgtext">
                       Emergency and Trauma </h6>
                       </div>
                       <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>

          <div className="special">
          <div className="first_cell">
          <FaSyringe className="special_Icon"  />
            <h6 className="specialimgtext">
            Diabetology </h6>
            </div>
            <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>

          <div className="special">
          <div className="first_cell">
             <GiTestTubes className="special_Icon"  />
            <h6 className="specialimgtext">laboratory </h6>
            </div>
            <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
          </div>


        </div>
      </div>
</div>

    </section>
    <Footer />
    </>
  );
};

export default Specialties;
