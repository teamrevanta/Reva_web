// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Col } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Contact.css"; // We'll create this CSS file

// const Contact = () => {
//   const formRef = useRef();
//   const [done, setDone] = useState(false);
//   const [formData, setFormData] = useState({
//     user_name: "",
//     user_phone: "",
//     user_email: "",
//     user_choice: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_7w841jd",
//         "template_hemrtah",
//         formRef.current,
//         "ExwroEWj4VehoSrcj"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true);
//           setFormData({
//             user_name: "",
//             user_phone: "",
//             user_email: "",
//             user_choice: "",
//             message: ""
//           });
//           toast.success("Message sent successfully!", {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//           });
//         },
//         (error) => {
//           console.log(error.text);
//           toast.error("Failed to send message. Please try later.", {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//           });
//         }
//       );
//   };

//   return (
//     <div className="contact-page">
//       <section className="contact-section">
//         <div className="container">
//           <div className="section-header mb-5">
//             <Col xs={12} className="text-center">
//               <h2 className="section-title">
//                 Get <span className="highlight">In Touch</span>
//               </h2>
//               <div className="section-divider"></div>
//               <p className="section-subtitle">
//                 Have questions or want to work together? Send us a message!
//               </p>
//             </Col>
//           </div>
          
//           <div className="row contact-content">
//             <div className="col-lg-6">
//               <div className="contact-form-container">
//                 <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Your Name"
//                       name="user_name"
//                       value={formData.user_name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
                  
//                   <div className="row">
//                     <div className="col-md-6 form-group">
//                       <input
//                         type="tel"
//                         className="form-control"
//                         placeholder="Phone Number"
//                         name="user_phone"
//                         value={formData.user_phone}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="col-md-6 form-group">
//                       <select
//                         name="user_choice"
//                         className="form-control"
//                         value={formData.user_choice}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="">Select Service</option>
//                         <option value="Sponsorship">Sponsorship</option>
//                         <option value="Advertisement">Advertisement</option>
//                         <option value="Message">Message</option>
//                       </select>
//                     </div>
//                   </div>
                  
//                   <div className="form-group">
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="Email"
//                       name="user_email"
//                       value={formData.user_email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
                  
//                   <div className="form-group">
//                     <textarea
//                       className="form-control message-box"
//                       placeholder="Your Message"
//                       name="message"
//                       rows="5"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                     ></textarea>
//                   </div>
                  
//                   <div className="text-center">
//                     <button className="btn btn-primary btn-send">
//                       <span>SEND MESSAGE</span>
//                       <i className="fas fa-paper-plane ml-2"></i>
//                     </button>
//                   </div>
//                 </form>
//                 <ToastContainer />
//               </div>
//             </div>
            
//             {/* <div className="col-lg-6">
//               <div className="contact-info-container">
//                 <div className="contact-map">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.6863766624465!2d86.144116!3d22.777017399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1698064838121!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     title="Location Map"
//                   ></iframe>
//                 </div>
                
//                 <div className="contact-details mt-4">
//                   <div className="detail-item">
//                     <i className="fas fa-map-marker-alt"></i>
//                     <div>
//                       <h5>Location</h5>
//                       <p>National Institute of Technology, Jamshedpur</p>
//                     </div>
//                   </div>
//                   <div className="detail-item">
//                     <i className="fas fa-envelope"></i>
//                     <div>
//                       <h5>Email</h5>
//                       <p>contact@example.com</p>
//                     </div>
//                   </div>
//                   <div className="detail-item">
//                     <i className="fas fa-phone"></i>
//                     <div>
//                       <h5>Phone</h5>
//                       <p>+1 234 567 890</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiSend } from "react-icons/fi"; // Importing from react-icons
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    user_choice: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7w841jd",
        "template_hemrtah",
        formRef.current,
        "ExwroEWj4VehoSrcj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setFormData({
            user_name: "",
            user_phone: "",
            user_email: "",
            user_choice: "",
            message: ""
          });
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try later.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };

  return (
      <section className="contact-section">
        <div className="container">
          <div className="section-header mb-5">
            <Col xs={12} className="text-center">
              <h2 className="section-title">
                Get <span className="highlight">In Touch</span>
              </h2>
              <div className="section-divider"></div>
             
            </Col>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="contact-form-container">
                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        name="user_phone"
                        value={formData.user_phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <select
                        name="user_choice"
                        className="form-control"
                        value={formData.user_choice}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Service</option>
                        <option value="Sponsorship">Sponsorship</option>
                        <option value="Advertisement">Advertisement</option>
                        <option value="Message">Message</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      className="form-control message-box"
                      placeholder="Your Message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button className="btn btn-primary btn-send">
                      <span>SEND MESSAGE</span>
                      <FiSend className="ml-2" />
                    </button>
                  </div>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;