import React from "react";
import "./FacultyAdvisorDetails.css";

const FacultyAdvisorDetails = () => {
  return (
    <>
      <h2 className="faculty-advisor-heading">Faculty Advisors</h2>
      <div className="faculty-advisor-details">
        <div className="faculty-advisor">
          <img
            src="./images/FacultyAdvisor/Dr. KDP Singh.jpg"
            alt="Faculty 1"
          />
          <div>
            <h4>Dr KRISHNA DEO PRASAD SINGH</h4>
            <p>Designation: Associate Professor,</p>
            <p>Mechanical Engineering,NIT Jamshedpur</p>
            <p>
              {" "}
              <i class="fa fa-envelope" aria-hidden="true">
                {" "}
                Kdpsingh.me@nit jsr.ac.in
              </i>
            </p>

            <a
              href="https://www.nitjsr.ac.in/people/profile/ME106"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-user" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="faculty-advisor">
          <img
            src="./images/FacultyAdvisor/Dr MADHU SINGH.jpg"
            alt="Faculty 2"
          />
          <div>
            <h4>Dr MADHU SINGH</h4>
            <p>Designation: Associate Professor,</p>
            <p>Electrical Engineering,NIT Jamshedpur</p>
            <p>
              {" "}
              <i class="fa fa-envelope" aria-hidden="true">
                {" "}
                madhu.ee@nitjsr.ac.in
              </i>
            </p>

            <a
              href="https://www.nitjsr.ac.in/people/profile/EE105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-user" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyAdvisorDetails;
