import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'

import "./gyne.css"
const Gyne = () => {
  return (
    <>
      <Header />
      <section className='gyne_wrap'>
        <p> Gynaecology deals with the health of the female reproductive system, including the vagina, uterus, ovaries, and breasts. It covers a wide range of conditions, from common issues like menstrual problems and birth control to more serious concerns like endometriosis, ovarian cancer, and uterine fibroids. </p>


        <p>Obstetrics focuses on pregnancy, childbirth, and the postpartum period. It includes prenatal care, monitoring the baby's development, managing labor and delivery, and caring for the mother and baby after childbirth. </p>

        <p>Some of the common procedures performed by gynaecologists and obstetricians include</p>
        <ul>
          <li>


            <p>Gynaecologists</p>

            <ul>  <li>
              Pap smears and pelvic exams
            </li>
              <li>IUD insertion and removal  </li>
              <li> Colposcopy (examination of the cervix)</li>
              <li> Hysteroscopy (examination of the uterus) </li>
              <li> Laparoscopy (examination of the abdomen) </li>
              <li> Surgery for endometriosis, ovarian cysts, and uterine fibroids
              </li>
            </ul>



          </li>
          <li> <p> Obstetricians </p>
            <ul>
              <li> Prenatal ultrasounds </li>
              <li> Amniocentesis (withdrawal of amniotic fluid for testing) </li>
              <li> Induction of labor </li>
              <li>  Cesarean sections</li>
              <li> Vaginal deliveries </li>
            </ul>
          </li>
        </ul>

      </section>

      <Footer />
    </>
  )
}

export default Gyne
