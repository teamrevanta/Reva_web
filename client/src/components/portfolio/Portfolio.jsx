import React, { useState } from "react";
import images from "./data"; // Import images from data.js
import "./portfolio.css";
import { Link } from "react-router-dom";
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
                <Link
                  to="/gallery"
                  className={`item ${filter === "*" ? "active" : ""}`}
                  onClick={() => handleFilterClick("*")}
                >
                  All
                </Link>
                <Link
                  to="/gallery"
                  className={`item ${
                    filter === "achievements" ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick("achievements")}
                >
                  Achievements
                </Link>
                <Link
                  to="/Reva_web/gallery"
                  className={`item ${
                    filter === "manufacturing" ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick("manufacturing")}
                >
                  MANUFACTURING
                </Link>
                <Link
                  to="/gallery"
                  className={`item ${filter === "events" ? "active" : ""}`}
                  onClick={() => handleFilterClick("events")}
                >
                  EVENTS
                </Link>

                {/* Add more filter options as needed */}
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="gallery">
        {filteredImages.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.url} alt=" " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
