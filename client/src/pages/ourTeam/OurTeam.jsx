import React from "react";
import "./OurTeam.css";
import PhotoPage from "../photoPage/PhotoPage";

const OurTeam = () => {
  return (
    <div>
      {/* <img
        // src="./images/events/Revanta_group.jpg"
        src="https://i.ibb.co/jTstbH6/Revanta-group.jpg"
        alt="O"
        style={{
          width: "45%",
          height: "45%",
          marginLeft: "25%",
          border: "3px solid #0d6efd",
          borderRadius: "10px",
        }}
      /> */}
      <PhotoPage />
    </div>
  );
};

export default OurTeam;
