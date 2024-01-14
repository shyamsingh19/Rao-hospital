
import './contact.css'
import contact from "../../assets/contact.png";
import React, { useState } from 'react';


const Contactus = () => {

    const [formData, setFormData] = useState({

        name: '',
        gender: '',
        email: '',
        phone: '',
        message: '',
      });
    
   
      const handleSubmit = (e) => {

        console.log('Form submitted:', formData);

        e.preventDefault();
      
        console.log('Form submitted:', formData);
      
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
    <div className='contact_wrap'>
        <div className='image_wrap'>
           <img src={contact}  alt="ContactUs"/> 
        </div>


        <div className='contactform'>
   <form method="submit" onSubmit={handleSubmit}> 
            <div>
            <label>Name</label>  
            <input type='text' required  name='name' value={formData.name} onChange={handleInputChange}  />  
             </div>

             <div>
            <label>Gender</label>  
            <input type='text' required  name='gender' value={formData.gender} onChange={handleInputChange}  />  
             </div>

             <div>
            <label>Email</label>  
            <input type='email' required  name='email' value={formData.email} onChange={handleInputChange} />  
             </div>

             <div>
            <label>Phone</label>  
            <input type='number'  name='phone' value={formData.phone} onChange={handleInputChange}   required/>  
             </div>
                
                
                <div>
             <label>Message</label>  
            < textarea  name='message' value={formData.message} onChange={handleInputChange}  required/>  
            </div>

            </form>

            <button type='submit' className='submit_button'>Submit </button>
        </div>

      
    </div>
  )
}

export default Contactus
