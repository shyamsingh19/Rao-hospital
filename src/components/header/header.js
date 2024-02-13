import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./header.css";
import Logo from "../../assets/logo.png";

import { MdAddLocationAlt } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailRead } from "react-icons/md";
import openvector from '../../assets/Vector-open.png'

import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
  
 <>

  
<div className="header_wrap">   
  
      <div className="upper_head">
        <div className="upper_head_wrap">
          <div className="dflex">
            <MdMarkEmailRead className="icon_color" />
            < p>  raolokramcharitabletrust@gmail.com  </p>
          </div>

          <div className="dflex">
            <MdAddLocationAlt className="icon_color" />
            <p>   sector 10 A Gurugram</p>
          </div>


          <div className="dflex" s>
            <FiPhoneCall className="icon_color" />
            <p> 9818548492 , 7042328047</p>

          </div>

        </div>
      </div>
      <div className="navbar_wrap">
        <nav className="Navbar">
          <div className="Logo_warap"> <img src={Logo} alt="Loakram" /> </div>

          <div className="textBtnContainer">

            <Link  to='/' className="deskMenuListItem">Home</Link>
            <Link  to ='/specialities'  className="deskMenuListItem">Specialties</Link>
            <Link  to='/about' className="deskMenuListItem">About</Link>
          
            <Link  to='/contact'  className="deskMenuListItem" >Contact</Link>
            <Link  to='/gallery' className="deskMenuListItem">gallery</Link>
            <Link  to='/doctors' className="deskMenuListItem">Doctors</Link>

          </div>
          <div className="mobmenu">
            <div className="searchmob">
            <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} className="openvector" />
              
            </div>

            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>

              <Link  to="/"  activeClass="active" onClick={() => setShowMenu(false)}>Home</Link>
              <Link to="/about"   activeClass="active"  onClick={() => setShowMenu(false)}>About</Link>
              <Link  to="/specialities"  activeClass="active"  onClick={() => setShowMenu(false)}>Specialties</Link>
              <Link  to="/contact"  activeClass="active"  onClick={() => setShowMenu(false)}>contact</Link>
              <Link  to="/gallery"  activeClass="active"  onClick={() => setShowMenu(false)}>Gallery</Link>
              <Link  to="/doctors"  activeClass="active"  onClick={() => setShowMenu(false)}>Doctor</Link>
              


            </div>

          </div>

        </nav>
      </div>
      </div> 
    </>
  );
};

export default Header;
