import React from "react";
import "./OurTeam.css";
import PhotoPage from "../photoPage/PhotoPage";
import FacultyAdvisorDetails from "../../components/facultyAdvisorDetails/FacultyAdvisorDetails";

const OurTeam = () => {
  return (
    <div>
      <FacultyAdvisorDetails />
      <PhotoPage />
    </div>
  );
};

export default OurTeam;
