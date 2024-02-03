
import './contact.css'
import contact from "../../assets/treatment.jpg";
import React, {  useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../footer/footer';

import Header from '../header/header';

const Contact = () => {
  // const form = useRef();
  // const [formData, setFormData] = useState({

  //   name: '',
  //   email: '',
  //   message: '',
  // });

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [message , setMessage] = useState('');



  const YOUR_SERVICE_ID = 'service_l8w5m7i';
  const YOUR_TEMPLATE_ID = 'template_08mhg2d';
  const YOUR_PUBLIC_KEY = 'MiGuFxRlcWeXWvWiL';

  const formtemp = {
    from_name : name,
    from_email : email,
    to_name : 'abhishek',
    message : message
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
 
    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formtemp, YOUR_PUBLIC_KEY)
      .then((response) => {
        console.log("Email sent successfully ", response);
        window.alert(" Form submited successfully");
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log("Error sending email:" , error);
      });
    
  }

  return (
    <>
    
    <Header />
    <div id="contact">
      <div className='contact_wrap' >
      <div className='image_wrap'>
        <img src={contact} alt="ContactUs" />
      </div>
      <div className='contactform'>
        <h2>Contact Us</h2>
        <p className="contactpara"> Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
        <form  onSubmit={handleSubmit} >
          <div>
            {/* <label>Name</label> */}
            <input type='text' required  value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
          </div>
          <div>
            <input type='email' required  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          </div>
          <div>
            < textarea  value={message} onChange={(e) => setMessage(e.target.value)} required  placeholder="Dear Doctor"/>
          </div>
          <button type='submit' className='submit_button'>Submit </button>
        </form>
        
      </div>

      </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact