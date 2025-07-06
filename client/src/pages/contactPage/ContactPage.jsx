import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Contact from "../../components/contact/Contact";
import styles from "./ContactPage.module.css";
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
    <div className={styles['contact-page']}>
      {/* Hero Section */}
      <section className={styles['hero-section']}>
        <div className={styles['hero-overlay']}>
          <Container>
            <div className={`${styles['hero-content']} text-center`}>
              <h1 className={styles['hero-title']}>Contact Us</h1>
              <p className={styles['hero-subtitle']}>Get in touch with our team leaders</p>
              <div className={styles['hero-divider']}></div>
            </div>
          </Container>
        </div>
      </section>
      
      {/* Team Contacts Section */}
      <section className={`${styles['contacts-section']} py-5 px-4`}>
      
          <Row className="justify-content-center mb-5">
            <Col xs={12} className="text-center">
              <h2 className={styles['section-title']}>
                Our <span>Team Contacts</span>
              </h2>
              <div className={styles['section-divider']}></div>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
            {teamContacts.map((contact, index) => (
              <Col key={index} xl={4} lg={4} md={6} sm={12}>
                <Card className={`${styles['contact-card']} h-100 shadow`}>
                  <div className={styles['contact-image-container']}>
                    <Card.Img
                      src={contact.image}
                      alt={contact.name}
                      className="img-fluid"
                    />
                  </div>
                  <Card.Body className={`${styles['contact-info']} text-center d-flex flex-column`}>
                    <Card.Title className={styles['contact-name']}>{contact.name}</Card.Title>
                    <Card.Subtitle className={`${styles['contact-role']} mb-3`}>{contact.role}</Card.Subtitle>
                    <Card.Text className={styles['contact-department']}>
                      <EngineeringIcon className="me-2" />
                      {contact.department}
                    </Card.Text>
                    <Card.Text className={styles['contact-email']}>
                      <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
                        <EmailIcon className="me-2" />
                      </a>
                      {contact.email}
                    </Card.Text>
                    {contact.whatsapp && (
                      <Card.Text className={styles['contact-whatsapp']}>
                        <a href={`https://wa.me/${contact.whatsapp.replace(/\s+/g, '')}`} target="_blank" rel="noreferrer">
                          <WhatsAppIcon className="me-2" />
                        </a>
                        {contact.whatsapp}
                      </Card.Text>
                    )}
                    <div className={styles['contact-links']}>
                      <a href={contact.linkedin} target="_blank" rel="noreferrer">
                        <LinkedIn className={styles['social-icon']} />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        
      </section>
      {/* Contact Form Section */}
      <section className={`${styles['form-section']} py-5`}>
          <Contact />
      </section>
    </div>
  );
};

export default ContactPage;