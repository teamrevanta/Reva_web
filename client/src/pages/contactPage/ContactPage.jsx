import React from "react";
import Contact from "../../components/contact/Contact";
import "./ContactPage.css";
import LinkedIn from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import EngineeringIcon from "@mui/icons-material/Engineering";

const ContactPage = () => {
  return (
    <div>
      <Contact />
      <div className="contact-profiles">
        <div className="profile-card">
          <img src="images/members2k21/Priyanshu.jpg" alt="Captain" />
          <div className="profile-details">
            <h3>Priyanshu Raj</h3>
            <h5>Captain</h5>
            <p>
              <EngineeringIcon />
              :Electrical Engineering
            </p>
            <p>
              {" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=priyanshuraj2153@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <EmailIcon style={{ color: "brown", cursor: "pointer" }} />:
              </a>
              priyanshuraj2153@gmail.com
            </p>
            <p>
              <a
                href="https://wa.me/9155360718"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon style={{ color: "green", cursor: "pointer" }} />:
              </a>
              +91 9155360718
            </p>
            <a href="https://www.linkedin.com/in/priyanshu-raj-7049a522b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              {" "}
              <LinkedIn />
            </a>
          </div>
        </div>

        <div className="profile-card">
          <img src="images/members2k21/Ayushi.jpg" alt="Vice Captain" />
          <div className="profile-details">
            <h3>Ayushi Kumari</h3>
            <h5>Vice Captain</h5>
            <p>
              <EngineeringIcon />
              :Mechanical Engineering
            </p>
            <p>
              {" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ayushikumari0305@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <EmailIcon style={{ color: "brown", cursor: "pointer" }} />:
              </a>
              ayushikumari0305@gmail.com
            </p>
            <a href="https://www.linkedin.com/in/ayushi-kumari-366540246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              {" "}
              <LinkedIn />
            </a>
          </div>
        </div>

        <div className="profile-card">
          <img src="images/members2k21/Aditya.jpg" alt="Team Manager" />
          <div className="profile-details">
            <h3>Aditya Pal</h3>
            <h5>Team Manager</h5>
            <p>
              <EngineeringIcon />
              :Electrical Engineering
            </p>
            <p>
              {" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aditpal391@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <EmailIcon style={{ color: "brown", cursor: "pointer" }} />:
              </a>
              aditpal391@gmail.com
            </p>

            <p>
              <a
                href="https://wa.me/9760446768"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <WhatsAppIcon style={{ color: "green", cursor: "pointer" }} />:
              </a>
              +91 9760446768
            </p>

            <a href="https://www.linkedin.com/in/aditya-pal-1a0026229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              {" "}
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
