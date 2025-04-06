import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Contact from "../../components/contact/Contact";
import "./ContactPage.css";
import LinkedIn from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import EngineeringIcon from "@mui/icons-material/Engineering";

const ContactPage = () => {
  const teamContacts = [
    {
      name: "Amit",
      role: "Captain",
      image: "images/members2k22/Amit.jpg",
      department: "Civil Engineering",
      email: "2022ugce093@nitjsr.ac.in",
      whatsapp: "+91 8210839665",
      linkedin: "https://www.linkedin.com/in/amit-a0997924a/",
    },
    {
      name: "Ritesh Kumar Bharti",
      role: "Vice Captain",
      image: "images/members2k22/Ritesh kumar Bharti.jpeg",
      department: "Engineering and Computational Mechanics",
      email: "2022ugcm023@nitjsr.ac.in",
      whatsapp: "+91 6200926745",
      linkedin: "https://www.linkedin.com/in/ritesh-kumar-bharti-5701a6253/",
    },
    {
      name: "Rathlavath Lokesh",
      role: "Team Manager",
      image: "images/members2k22/Rathlavath.jpg",
      department: "Mechanical Engineering",
      email: "2022ugme110@nitjsr.ac.in",
      whatsapp: "+91 8897825453",
      linkedin: "https://www.linkedin.com/in/rathlavath-lokesh-5b32bb268/",
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <Container>
            <div className="hero-content text-center">
              <h1 className="hero-title">Contact Us</h1>
              <p className="hero-subtitle">Get in touch with our team leaders</p>
              <div className="hero-divider"></div>
            </div>
          </Container>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="form-section py-5">
        <Container>
          <Contact />
        </Container>
      </section>

      {/* Team Contacts Section */}
      <section className="contacts-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col xs={12} className="text-center">
              <h2 className="section-title">
                Our <span>Team Contacts</span>
              </h2>
              <div className="section-divider"></div>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
            {teamContacts.map((contact, index) => (
              <Col key={index} xl={4} lg={4} md={6} sm={12}>
                <Card className="contact-card h-100 shadow">
                  <div className="contact-image-container">
                    <Card.Img
                      src={contact.image}
                      alt={contact.name}
                      className="img-fluid"
                    />
                  </div>
                  <Card.Body className="contact-info text-center d-flex flex-column">
                    <Card.Title className="contact-name">{contact.name}</Card.Title>
                    <Card.Subtitle className="contact-role mb-3">{contact.role}</Card.Subtitle>
                    <Card.Text className="contact-department">
                      <EngineeringIcon className="me-2" />
                      {contact.department}
                    </Card.Text>
                    <Card.Text className="contact-email">
                      <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
                        <EmailIcon className="me-2" />
                      </a>
                      {contact.email}
                    </Card.Text>
                    {contact.whatsapp && (
                      <Card.Text className="contact-whatsapp">
                        <a href={`https://wa.me/${contact.whatsapp.replace(/\s+/g, '')}`} target="_blank" rel="noreferrer">
                          <WhatsAppIcon className="me-2" />
                        </a>
                        {contact.whatsapp}
                      </Card.Text>
                    )}
                    <div className="contact-links mt-auto">
                      <a href={contact.linkedin} target="_blank" rel="noreferrer">
                        <LinkedIn className="social-icon" />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;