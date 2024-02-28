import React from 'react'
import './gallery.css'
import Logo from "../../assets/logo.png";
import bed1 from "../../assets/bed1.jpg"
import beds from "../../assets/beds.jpg"
import bed3 from "../../assets/bed3.jpg"
import bed4 from "../../assets/bed4.jpg"
import bed5 from "../../assets/bed5.jpg"
import bed6 from "../../assets/bed6.jpg"
import bed7 from "../../assets/bed7.jpg"

import doctor from "../../assets/doctor.jpg"
import lab from "../../assets/bed4.jpg"
import lab2 from "../../assets/lab2.jpg"
import lab3 from "../../assets/lab3.jpg"



import treatment from "../../assets/treatment.jpg"
import treatment2 from "../../assets/treatment2.jpg"
import treatment3 from "../../assets/treatment3.jpg"
import maindoctor from "../../assets/maindoctor.jpg"
import banner from "../../assets/banner.jpg"
import druma from "../../assets/druma.png"

import Footer from '../footer/footer';
import Header from '../header/header';

import Kishan from "../../assets/kishan.jpg"


const Gallery = () => {
    return (

        <>
    
      <Header />
        <section id="gallery">

            <div className='gallery_wrap'>
           
                <div className="row">
                    <div className="column">

                        

                        <img src={bed1} alt=''/>
                        <img src={lab} alt=''/>
                        <img src={treatment3}alt='' />
                        <img src={bed3} alt=''/>

                    </div>

                    <div className="column">

                        <img src={beds} alt=''/>
                        <img src={ Kishan } alt='' />
                        <img src={lab3} alt=''/>
                        <img src={lab}alt='' />
                        <img src={treatment2}alt='' />
                        <img src={bed6} alt=''/>

                    </div>


                    <div className="column">

                        <img src={treatment} />

                        <img src={bed4} alt=''/>
                        <img src={bed5} alt=''/>
                        <img src={lab2} alt=''/>
                        <img src={bed7} alt=''/>


                    </div>
                    <div className="column">

                        <img src={maindoctor} alt=''/>

                        <img src={doctor} alt=''/>
                        <img src={banner} alt=''/>
< img src={druma} />


                    </div>


                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Gallery
