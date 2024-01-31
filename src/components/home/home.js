import React from "react";
import "./home.css";
import doctor from "../../assets/doctor.jpg"
import doctormbob from "../../assets/doctormob.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";

const Home = () => {
  return (
    <section id="home" >
      <div className="home_parent">
      <div className="home_wrap">


        <div className="doctor">

          <div className="banner_wrap">
            <div className="divider"></div>
            <p className="total_health">Total Health care solution</p>
            <h1> Your most trusted health partner</h1>
            <p className="parab"> A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.  </p>

            <div class="btn-container ">
              <a href="/" target="_blank" className="btn" > <span>  Contact Us  </span> <MdKeyboardArrowRight className="arrowcolor" /> <span>   </span>  </a>
            </div>

          </div>

        </div>


       

      </div>
      </div>

      <div className="card_section">
          <div className="card_item"> <FaRegClock className="cardIcon" />
            <p>Timing schedule</p>
            <h5> Working Hours</h5>
            <ul className="time_listing">

              <li><span> Sun - Wed :  </span>  <span>  24:00  </span></li>
              <li><span> Thu - Fri : </span>  <span>  24:00  </span></li>
              <li><span> Sat - sun :  </span>  <span>  24:00  </span></li>


            </ul>
          </div>
          <div className="card_item"> <HiUserGroup className="cardIcon" />

            <p>Emergency Cases</p>
            <h5> 9818548492, 7042328047 </h5>

            <p className="paracard"> Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
          </div>

        </div>
    </section>



  );



};

export default Home;
