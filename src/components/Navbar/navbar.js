import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import searchicon from "../../assets/searchicon.png";
import openvector from "../../assets/Vector-open.png";
import Logo from "../../assets/logo.png";
import { MdMarkEmailRead } from "react-icons/md";
import { MdAddLocationAlt } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>

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
        <nav id="Navbar">
          <div className="Logo_warap"> <img src={Logo} alt="Loakram" /> </div>

          <div className="textBtnContainer">

            <Link activeClass="active" to='home' spy={true} smooth={true} offset={-100} duration={500} className="deskMenuListItem">Home</Link>
            <Link activeClass="active" to='about' spy={true} smooth={true} offset={-100} duration={500} className="deskMenuListItem">About</Link>
            <Link activeClass="active" to='specialties' spy={true} smooth={true} offset={-100} duration={500} className="deskMenuListItem">Specialties</Link>
            <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="deskMenuListItem">Contact</Link>
            <Link activeClass="active" to='gallery' spy={true} smooth={true} offset={-100} duration={500} className="deskMenuListItem">gallery</Link>

          </div>
          <div className="mobmenu">
            <div className="searchmob">

              <img src={openvector} alt="" className="openvector" onClick={() => setShowMenu(!showMenu)} />
            </div>

            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
              <Link activeClass="active" to='home' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
              <Link activeClass="active" to='about' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
              <Link activeClass="active" to='specialties' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Specialties</Link>
              <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
              <Link activeClass="active" to='gallery' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Gallery</Link>

            </div>

          </div>

        </nav>
      </div>
    </>
  );
};

export default Navbar;
