
import './contact.css'
import contact from "../../assets/contact.png";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({

    name: '',
    gender: '',
    email: '',
    phone: '',
    message: '',
  });
  const YOUR_SERVICE_ID = 'your_service_id';
  const YOUR_TEMPLATE_ID = 'your_template_id';
  const YOUR_PUBLIC_KEY = 'your_public_key';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    setFormData({
      name: '',
      gender: '',
      email: '',
      phone: '',
      message: '',
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className='contact_wrap' id="contact">
      <div className='image_wrap'>
        <img src={contact} alt="ContactUs" />
      </div>
      <div className='contactform'>
        <form method="submit" ref={form} >
          <div>
            <label>Name</label>
            <input type='text' required name='name' value={formData.name} onChange={handleInputChange} />
          </div>

          <div>
            <label>Gender</label>
            <input type='text' required name='gender' value={formData.gender} onChange={handleInputChange} />
          </div>

          <div>
            <label>Email</label>
            <input type='email' required name='email' value={formData.email} onChange={handleInputChange} />
          </div>

          <div>
            <label>Phone</label>
            <input type='number' name='phone' value={formData.phone} onChange={handleInputChange} required />
          </div>
          <div>
            <label>Message</label>
            < textarea name='message' value={formData.message} onChange={handleInputChange} required />
          </div>
        </form>
        <button type='submit' className='submit_button' onClick={handleSubmit}>Submit </button>
      </div>


    </div>
  )
}

export default Contact