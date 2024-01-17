import React, { useState } from "react";
import { Link } from "react-scroll";

import "./navbar.css";
import searchicon from "../../assets/searchicon.png";
import openvector from "../../assets/Vector-open.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav id="Navbar">
        <p className="heading"> Medical</p>

        <div className="textBtnContainer">
          <Link activeClass="active" to='home' spy={true} smooth={true} offset={-100} diuration={500} className="deskMenuListItem">Home</Link>
          <Link activeClass="active" to='about' spy={true} smooth={true} offset={-100} diuration={500} className="deskMenuListItem">About</Link>
          <Link activeClass="active" to='specialties' spy={true} smooth={true} offset={-100} diuration={500} className="deskMenuListItem">Specialties</Link>
          <Link activeClass="active" to='doctors' spy={true} smooth={true} offset={-100} diuration={500} className="deskMenuListItem">Doctors</Link>
          <Link activeClass="active" to='' spy={true} smooth={true} offset={-100} diuration={500} className="deskMenuListItem">News</Link>
          <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} diuration={500} className="deskMenuListItem">Contact</Link>
        </div>


        <div className="searchapp">
          <div className="search">
            <img src={searchicon} alt="search" className="searchIcon" />
          </div>

          <button className="appointmentbtn">
            Appointment
          </button>

        </div>

        <div className="mobmenu">

          <div className="searchmob">
            <div className="search">
              <img src={searchicon} alt="search" className="searchIcon" />
            </div>
            <img src={openvector} alt="" className="openvector" onClick={() => setShowMenu(!showMenu)} />

          </div>

          <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
            <Link activeClass="active" to='home' spy={true} smooth={true} offset={-100} diuration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to='about' spy={true} smooth={true} offset={-100} diuration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass="active" to='specialties' spy={true} smooth={true} offset={-100} diuration={500} className="listItem" onClick={() => setShowMenu(false)}>Specialties</Link>
            <Link activeClass="active" to='doctors' spy={true} smooth={true} offset={-100} diuration={500} className="listItem" onClick={() => setShowMenu(false)}>Doctors</Link>
            <Link activeClass="active" to='con' spy={true} smooth={true} offset={-100} diuration={500} className="listItem" onClick={() => setShowMenu(false)}>News</Link>
            <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} diuration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            <Link activeClass="active" to='' spy={true} smooth={true} offset={-100} diuration={500} className="listItem" onClick={() => setShowMenu(false)}>
              <button className="appointmentbtnmob">
                Appointment
              </button>
            </Link>
          </div>

        </div>

      </nav>

    </>
  );
};

export default Navbar;
