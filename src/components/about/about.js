import React from "react";
import "./about.css";

import treatment from "../../assets/treatment.jpg";
import bed5 from "../../assets/bed5.jpg";
import lab3 from "../../assets/lab3.jpg";
import Footer from "../footer/footer";
import Header from "../header/header";




const About = () => {
  return (
    <>
    
<Header />
  
    <section id="about">
     <div className="aboutuswrap">
      
<div className="aboutsecondfirst">
<section>
<img src={lab3 } />
</section>

<section>
<img src={bed5 } />
</section>
</div>
<div >
<section className="aboutsecondimage"> 
  <img src={treatment } />
</section>
</div>
<div className="aboutcontent">

  <h2>Personal care
& healthy living</h2>

<p> We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>
<button type="button"> About us</button>
</div>

     </div>
    </section>
    <Footer />
    </>
  );
};

export default About;
