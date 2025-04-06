import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Col} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
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
          toast.success("Message sent successfully", {
            position: "top-right",
            autoClose: 5000, // 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Please try later", {
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
    <div>
      <section className="contact_section ">
        <div className="container">
          <div className="heading_container heading_center">
             <Col xs={12} className="text-center">
                         <h2 className="section-title">
                           Get <span>In Touch</span>
                         </h2>
                         <div className="section-divider"></div>
              </Col>
          </div>
          <div className="form-row">
            <div className="col-md-6 px-0">
              <div className="form_container">
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="user_name"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="user_phone"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <select
                        name="user_choice"
                        id=""
                        className="form-control wide"
                      >
                        <option value="">Select Service</option>
                        <option value="Sponsorship">Sponsorship</option>
                        <option value="Advertisement">Advertisement</option>
                        <option value="Message">Message</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="user_email"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <input
                        type="text"
                        className="message-box form-control"
                        placeholder="Message"
                        name="message"
                      />
                    </div>
                  </div>
                  <div className="btn_box">
                    <button>SEND</button>
                  </div>
                  {done && <ToastContainer />}
                </form>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.6863766624465!2d86.144116!3d22.777017399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1698064838121!5m2!1sen!2sin"
                      width="600"
                      height="530"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="hi"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
