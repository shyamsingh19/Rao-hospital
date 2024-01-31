import React from 'react'
import './footer.css'

import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagrame.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import Logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className='footer_background'>
            <div className='footer'>
                <div className='footer_parent'>
                    <div>
                        <section className="Logo_warap">  

                        <img src={Logo}  alt="logoImage" />
                        
                          </section>
                        <p className='para'>Leading the Way in Medical <br />
                            Execellence, Trusted Care.</p>

                            <section className='social_wrap'>
                        <h5>STAY IN TOUCH</h5>
                        <section class="footer-social">
                            <a href="https://www.instagram.com/raolokramcharitable?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">  <img src={instagram} /> </a>
                            <a href="https://www.facebook.com/profile.php?id=100093212060201&mibextid=ZbWKwL" target="_blank">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="https://youtube.com/@raolokramcharitabletrust?si=Ch8CIy1tSlPYoGO0" target="_blank">
                                <img src={youtube} alt="youtube" />
                            </a>
                        </section>
                    </section>

                    
                    </div>
                    <div className='secondcell'>
                        <h6>Important Links</h6>
                        <ul>
                            <li> Appointment</li>
                            <li> Doctor </li>
                            <li> Service</li>
                            <li> About us</li>
                        </ul>
                    </div>
                    <div>
                        <h6>Contact Us</h6>
                        <ul>
                            <li> Call: 9818548492 , 7042328047</li>
                            <li> Email: raolokramcharitabletrust@gmail.com </li>
                            <li> Address: Near Rockfort  School  Shakti Park, sector 10 A Gurugram </li>

                        </ul>
                    </div>
                    <div className='last_cell'>
                        <h6>Newsletter</h6>
                        <ul>
                            <li> Appointment</li>
                            <li> Doctor </li>
                            <li> Service</li>
                            <li> About us</li>
                        </ul>
                    </div>
                </div>
                <hr className='line'></hr>
                <div className='copywright'>
                    <div>
                        <span> Copyright © 2024 CyberCoder Technology  Pvt. Ltd. All rights reserved. </span>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer