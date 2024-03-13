import "./contact.css";
import axios from "axios";
import React, { useState } from "react";
// import emailjs from 'emailjs-com';
import Footer from "../footer/footer";
import Header from "../header/header";
import contactImage from "../../assets/treatment.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the form data
    const formData = new FormData();
    formData.append("service_id", "service_5o82xdp");
    formData.append("template_id", "template_08mhg2d");
    formData.append("user_id", "MiGuFxRlcWeXWvWiL");
    formData.append("from_name", name);
    formData.append("from_email", email);
    formData.append("message", message);

    // Send the email using Axios
    axios
      .post("https://api.emailjs.com/api/v1.0/email/send-form", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Email sent successfully", response);

        toast.success("Form submitted successfully!", {
          position: "top-center",
        });

        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <Header />
      <div id="contact">
        <div className="contact_wrap">
          <div className="image_wrap">
            <img src={contactImage} alt="Contact Us" />
          </div>
          <div className="contactform">
            <h2>Contact Us</h2>
            <p className="contactpara">
              {" "}
              Health Care Services Don’t Hesitate, Contact Us For Better Help &
              Services.
            </p>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Dear Doctor"
                ></textarea>
              </div>
              <button type="submit" className="submit_button">
                Submit
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
