import React from 'react'
import './footer.css'

import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagrame.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";



const Footer = () => {
    return (
     <div  className='footer_background'>   



        <div className='footer'>

            <div className='footer_parent'>
                <div>

                    <h6>Medical</h6>
                    <p className='para'>Leading the Way in Medical <br />
                        Execellence, Trusted Care.</p>

                </div>

                <div>
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
                        <li> Call: (237) 681-812-255</li>
                        <li> Email: fildineesoe@gmail.com </li>
                        <li> Address: 0123 Some place</li>
                        <li> Some country</li>
                    </ul>


                </div>
                <div>
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


                <div className='social_wrap'>
                    <h5>STAY IN TOUCH</h5>
                    
                        <div class="footer-social">

                            <a href="" target="_blank">  <img src={instagram} /> </a>
                            <a href="" target="_blank">
                                <img src={facebook} alt="facebook" />
                            </a>

                            <a href="" target="_blank">
                                <img src={twitter} alt="facebook" />
                            </a>

                            <a href="" target="_blank">
                                <img src={youtube} alt="facebook" />
                            </a>

                        </div>
                  
                </div>
            </div>
       
       
        </div>



    </div>



    )
}

export default Footer