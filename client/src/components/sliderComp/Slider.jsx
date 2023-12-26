import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      //   image: "images/slider/Revanta_group.jpg",
      image: "https://i.ibb.co/RTQpx6k/Revanta-group.jpg",
      writeup: "Revanta Family",
    },
    {
      //   image: "images/slider/mech.jpg",
      image: "https://i.ibb.co/27p81Qz/mech.jpg",
      writeup: "Mechanical",
    },
    {
      //   image: "images/slider/Pie.jpg",
      image: "https://i.ibb.co/Wc145wp/Pie.jpg",
      writeup: "Pie&Ecm",
    },
    {
      //   image: "images/slider/Elec.jpg",
      image: "https://i.ibb.co/W2Z0RQ4/Elec.jpg",
      writeup: "Electrical",
    },
    {
      //   image: "images/slider/Sen.jpg",
      image: "https://i.ibb.co/Cm0DYpw/Sen.jpg",
      writeup: "Batch 2k20 & 2k21",
    },
    {
      //   image: "images/slider/female.jpg",
      image: "https://i.ibb.co/hKTrTDX/female.jpg",
      writeup: "Revanta Girls",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 7000); // Change the interval duration as needed (in milliseconds)

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
