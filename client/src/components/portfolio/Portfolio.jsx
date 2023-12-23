import React, { useState } from "react";
import images from "./data"; // Import images from data.js
import "./portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [filter, setFilter] = useState("Events");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const filters = ["ALL", "Events", "Our Participation", "Manufacturing"];

  const filteredImages =
    filter === "ALL"
      ? images
      : images.filter((image) => image.category === filter);

  return (
    <div className="sub_page">
      <section className="portfolio_section">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Work Portfolio</h2>
          </div>
          <div className="carousel-wrap">
            <div className="filter_box">
              <nav className="owl-filter-bar">
                {filters.map((filterItem) => (
                  <Link
                    key={filterItem}
                    to="/Reva_web/"
                    className={`item ${filter === filterItem ? "active" : ""}`}
                    onClick={() => handleFilterClick(filterItem)}
                  >
                    {filterItem.toUpperCase()}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      <div className="gallery">
        {filteredImages.map((image, index) => (
          <div
            className="gallery_item"
            key={index}
            onClick={() => handleImageClick(image)}
          >
            <img src={image.url} alt="" />
          </div>
        ))}

        {selectedImage && (
          <div className="modals" onClick={handleCloseModal}>
            <div className="modals_content">
              <img src={selectedImage.url} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
