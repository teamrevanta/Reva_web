import React from "react";
import "./Notice.css";

const Notice = () => {
  return (
    <div className="notice-head">
      <h1>Final Inductees 2K23 Batch</h1>

      <div className="notice">
        <div className="branch-container">
          <p className="branch-title">MECHANICAL </p>
          <ul className="branch-list">
            <li>PALLAB PRATIHAR - 2023UGME004</li>
            <li>DEEPAK KUMAR - 2023UGME015</li>
            <li>PANKAJ KUMAR - 2023UGME018</li>
            <li>PALAK SONY - 2023UGME020</li>
            <li>BANOTH YASWITHA - 2023UGME021</li>
            <li>SONAM KUMARI - 2023UGME023</li>
            <li>KIRAN KUMARI - 2023UGME026</li>
            <li>DADI SRI LINEESHA - 2023UGME040</li>
            <li>RITIKA RANI - 2023UGME051</li>
            <li>SATYAM KUMAR - 2023UGME057</li>
            <li>ANKIT RAJ - 2023UGME104</li>
            <li>KURUSENGA ESHWAR - 2023UGME114</li>
          </ul>
        </div>
        <div className="branch-container">
          <p className="branch-title">PIE </p>
          <ul className="branch-list">
            <li>Animesh Kumar - 2023UGPI016</li>
            <li>Tabish Ahmad - 2023UGPI021</li>
            <li>Aayush Kumar - 2023UGPI031</li>
            <li>Ashutosh Singh - 2023UGPI051</li>
            <li>Armaan Srivastava - 2023UGPI052</li>
            <li>Sunil Kumar - 2023UGPI053</li>
            <li>Chandan - 2023UGPI054</li>
          </ul>
        </div>
        <div className="branch-container">
          <p className="branch-title">ELECTRICAL </p>
          <ul className="branch-list">
            <li>Ayush Raghav - 2023UGEE007</li>
            <li>Hemant Sharma - 2023UGEE020</li>
            <li>Shristi Shree - 2023UGEE048</li>
            <li>Apoorva Jain - 2023UGEE085</li>
            <li>Ayush Sahu - 2023UGEE091</li>
            <li>Sidharth Kumar Singh - 2023UGEE092</li>
            <li>Sohan Kumar Pandit - 2023UGEE097</li>
            <li>Chandrakant Gorain - 2023UGEE098</li>
            <li>Priyanshu Tiwari - 2023UGEE105</li>
            <li>Malavatu Manikanta - 2023UGEE108</li>
          </ul>
        </div>

        <div className="branch-container chota">
          <p className="branch-title"> Civil</p>
          <ul className="branch-list">
            <li>Soumosish Sengupta - 2023UGCE025</li>
            <li>Saksham Sagar - 2023UGCE062</li>
          </ul>
        </div>
        <div className="branch-container chota">
          <p className="branch-title ">ECE</p>
          <ul className="branch-list ">
            <li>Krishna Agarwal - 2023UGEC051</li>
            <li>Amit Kumar - 2023UGEC102</li>
            <li>Abhay Toppo - 2023UGEC083</li>
          </ul>
        </div>
        <div className="branch-container chota">
          <p className="branch-title"> ECM </p>
          <ul className="branch-list">
            <li>RAVI RANJAN - 2023UGCM001</li>
            <li>PRAJAKTA SHIDORE - 2023UGCM005</li>
            <li>SONU HANSDA - 2023UGCM023</li>
          </ul>
        </div>

        {/* Include similar containers for other branches here */}
      </div>
      <h2>Welcome To Revanta Family!</h2>
    </div>
  );
};

export default Notice;
