import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <section className="contact_section ">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Get In <span>Touch</span>
            </h2>
          </div>

          <div className="col-md-12 px-0">
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
                {done && "Thank You..."}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
