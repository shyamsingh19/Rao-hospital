import React from "react";
import "./spealties.css";
import specialvector from "../../assets/specialvector.png";

const Specialties = () => {
  return (
    <section id="specialties">
      <div className="specialheading">
        <h3 className="specialsmallhead">Always Caring</h3>
        <h2 className="speciallargehead">Our Specialties</h2>
      </div>

      <div className="allspecial">
        <div className="special1">
          <span className="special">
            <img src={specialvector} alt="" className="specialimg" />
            <h6 className="specialimgtext">Neurology</h6>
          </span>
          <span className="special">
            <img src={specialvector} alt="" className="specialimg" />
            <h6 className="specialimgtext">Bones</h6>
          </span>
          <span className="special">
            <img src={specialvector} alt="" className="specialimg" />
            <h6 className="specialimgtext">Ophthalmology</h6>
          </span>
        </div>

        <div className="special2">
          <span className="special">
            <img src={specialvector} alt="" className="specialimg" />
            <h6 className="specialimgtext">Cardiovascular</h6>
          </span>
          <span className="special">
            <img src={specialvector} alt="" className="specialimg" />
            <h6 className="specialimgtext">Gastroenterology</h6>
          </span>
          <span className="special">
            <img src={specialvector} alt="" className="specialimg" />
            <h6 className="specialimgtext">Dermatology</h6>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
