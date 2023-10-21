import React, { useState } from "react";
import images from "./data"; // Import images from data.js
import "./portfolio.css";
const Portfolio = () => {
  const [filter, setFilter] = useState("*");

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredImages =
    filter === "*"
      ? images
      : images.filter((image) => image.category === filter);

  return (
    <div className="sub_page">
      <section className="portfolio_section ">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Work Portfolio</h2>
          </div>
          <div className="carousel-wrap ">
            <div className="filter_box">
              <nav className="owl-filter-bar">
                <a
                  href="#"
                  className={`item ${filter === "*" ? "active" : ""}`}
                  onClick={() => handleFilterClick("*")}
                >
                  All
                </a>
                <a
                  href="#"
                  className={`item ${
                    filter === "achievements" ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick("achievements")}
                >
                  Achievements
                </a>
                <a
                  href="#"
                  className={`item ${
                    filter === "manufacturing" ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick("manufacturing")}
                >
                  MANUFACTURING
                </a>
                <a
                  href="#"
                  className={`item ${filter === "events" ? "active" : ""}`}
                  onClick={() => handleFilterClick("events")}
                >
                  EVENTS
                </a>

                {/* Add more filter options as needed */}
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="gallery">
        {filteredImages.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.url} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
