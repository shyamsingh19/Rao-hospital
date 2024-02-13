import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import "./paeditrics.css"

const Paeditrics = () => {
  return (
    <>
      <Header />
      <section className='paeditric_wrap'>
        <p> The Department of Paediatrics at Rao Lokram Charitable Trust Hospital is the most sophisticated set up in Gurgaon with specialized pediatric doctors who provides technically excellent and highly personalized medical care to children upto 14 years of age. Out-Patient Clinics (OPD) are conducted by highly qualified and experienced Consultants. OPD facilities are available from Monday to Saturday both in the morning and evening and on Sunday in the morning.</p>

        <ul>
          <li>
            <p> Babies with respiratory distress in the early stages are managed with nasal CPAP (continuous positive airway pressure) and in advanced stages with positive pressure ventilation. Patients with HMD (Hyaline Membrane Disease) are administered surfactants.
            </p>

          </li>
          <li> <p> Facilities for exchange blood transfusion and total parenteral nutrition are available in the hospital.</p></li>
        </ul>

      </section>
      <Footer />
    </>
  )
}

export default Paeditrics
