import React from "react";
import "./spealties.css";
import specialvector from '../../assets/specialvector.png'

const Specialties = () => {
  return (
    <section id="specialties">
      <div className="heading">
        <h3 className="smallheading">Always Caring</h3>
        <h2 className="largeheading">Our Specialties</h2>
      </div>

      <span className="special">
        <img src={specialvector} alt="" className="specialimg" />
        <h6 className="specialimgtext">Neurology</h6>
      </span>
    </section>
  );
};

export default Specialties;
