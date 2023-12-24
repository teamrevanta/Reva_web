import React, { useState, useEffect } from "react";
import "./Slider.css"; // Assuming you save the CSS in a file named Slider.css

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "images/slider/Revanta_group.jpg",
      writeup: "Revanta Family",
    },
    {
      image: "images/slider/mech.jpg",
      writeup: "Mechanical",
    },
    {
      image: "images/slider/Pie.jpg",
      writeup: "Pie&Ecm",
    },
    {
      image: "images/slider/Elec.jpg",
      writeup: "Electrical",
    },
    {
      image: "images/slider/Sen.jpg",
      writeup: "Batch 2k20&Batch 2k21",
    },
    {
      image: "images/slider/female.jpg",
      writeup: "Female",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [totalSlides]);

  return (
    <div className="slider-container">
      <img
        src={slides[currentSlide].image}
        alt={`Slide ${currentSlide + 1}`}
        className="slide-image"
      />
      <div className="writeup-container">
        <p className="writeup-text">{slides[currentSlide].writeup}</p>
      </div>
    </div>
  );
};

export default Slider;
