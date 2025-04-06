// OurTeam.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
import { FaEnvelope, FaUser, FaLinkedin, FaUniversity } from "react-icons/fa";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Email from "@mui/icons-material/Email";
import "./OurTeam.css";
import { members2k21, members2k19, members2k20, members2k22 } from "./data";

const OurTeam = () => {
  const [selectedBatch, setSelectedBatch] = useState("Present Team (2022)");

  const advisors = [
    {
      id: 1,
      name: "Dr. Krishna Deo Prasad Singh",
      image: "./images/FacultyAdvisor/Dr. KDP Singh.jpg",
      designation: "Associate Professor",
      department: "Mechanical Engineering, NIT Jamshedpur",
      email: "kdpsingh.me@nitjsr.ac.in",
      profileLink: "https://www.nitjsr.ac.in/people/profile/ME106",
      linkedinLink: "#",
    },
    {
      id: 2,
      name: "Dr. Madhu Singh",
      image: "./images/FacultyAdvisor/Dr MADHU SINGH.jpg",
      designation: "Associate Professor",
      department: "Electrical Engineering, NIT Jamshedpur",
      email: "madhu.ee@nitjsr.ac.in",
      profileLink: "https://www.nitjsr.ac.in/people/profile/EE105",
      linkedinLink: "#",
    },
  ];

  const handleBatchSelect = (batch) => {
    setSelectedBatch(batch);
  };

  const renderBatch = (batchData) => (
    <Row className="g-4 justify-content-center">
      {batchData.map((member) => (
        <Col key={member.id} xl={3} lg={4} md={6} sm={12}>
          <Card className="team-card h-100 shadow">
            <div className="team-image-container ratio ratio-1x1">
              <Card.Img
                src={member.img}
                alt={member.name}
                className="img-fluid"
              />
            </div>
            <Card.Body className="text-center d-flex flex-column">
              <Card.Title className="team-name">{member.name}</Card.Title>
              <Card.Subtitle className="team-post mb-3">
                {member.post}
              </Card.Subtitle>
              <div className="social-links mt-auto">
                {member.linkedinLink && (
                  <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
                    <LinkedIn className="social-icon" />
                  </a>
                )}
                {member.githubLink && (
                  <a href={member.githubLink} target="_blank" rel="noopener noreferrer">
                    <GitHub className="social-icon" />
                  </a>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`}>
                    <Email className="social-icon" />
                  </a>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <div className="our-team-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <Container>
            <div className="hero-content text-center">
              <h1 className="hero-title">Our Team</h1>
              <p className="hero-subtitle">Meet the brilliant minds behind our success</p>
              <div className="hero-divider"></div>
            </div>
          </Container>
        </div>
      </section>

      {/* Faculty Advisors Section */}
      <section className="faculty-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col xs={12} className="text-center">
              <h2 className="section-title">
                Faculty <span>Advisors</span>
              </h2>
              <div className="section-divider"></div>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
            {advisors.map((advisor) => (
              <Col key={advisor.id} xl={6} lg={6} md={12} sm={12}>
                <Card className="faculty-card h-100 shadow">
                  <Row className="g-0 h-100">
                    <Col md={4} className="d-flex align-items-center justify-content-center p-3">
                      <div className="faculty-image-container ratio ratio-1x1">
                        <Card.Img
                          src={advisor.image}
                          alt={advisor.name}
                          className="img-fluid rounded-circle"
                        />
                      </div>
                    </Col>
                    <Col md={8}>
                      <Card.Body className="faculty-info d-flex flex-column">
                        <Card.Title className="faculty-name">{advisor.name}</Card.Title>
                        <Card.Subtitle className="faculty-designation mb-2">
                          {advisor.designation}
                        </Card.Subtitle>
                        <Card.Text className="faculty-department">
                          <FaUniversity className="me-2" />
                          {advisor.department}
                        </Card.Text>
                        <Card.Text className="faculty-email">
                          <FaEnvelope className="me-2" />
                          <a href={`mailto:${advisor.email}`}>{advisor.email}</a>
                        </Card.Text>
                        <div className="faculty-links mt-auto">
                          <a
                            href={advisor.profileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-orange btn-sm me-2"
                          >
                            <FaUser className="me-1" /> Profile
                          </a>
                          {advisor.linkedinLink && (
                            <a
                              href={advisor.linkedinLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline-orange btn-sm"
                            >
                              <FaLinkedin className="me-1" /> LinkedIn
                            </a>
                          )}
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Members Section */}
      <section className="team-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col xs={12} className="text-center">
              <h2 className="section-title">
                Our <span>Team</span>
              </h2>
              <div className="section-divider"></div>
              <Dropdown className="d-inline-block mt-3">
                <Dropdown.Toggle variant="orange" id="batch-dropdown">
                  {selectedBatch}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleBatchSelect("Present Team (2022)")}>
                    Present Team (2022)
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleBatchSelect("Batch 2021")}>
                    Batch 2021
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleBatchSelect("Batch 2020")}>
                    Batch 2020
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleBatchSelect("Batch 2019")}>
                    Batch 2019
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          {selectedBatch === "Present Team (2022)" && renderBatch(members2k22)}
          {selectedBatch === "Batch 2021" && renderBatch(members2k21)}
          {selectedBatch === "Batch 2020" && renderBatch(members2k20)}
          {selectedBatch === "Batch 2019" && renderBatch(members2k19)}
        </Container>
      </section>
    </div>
  );
};

export default OurTeam;