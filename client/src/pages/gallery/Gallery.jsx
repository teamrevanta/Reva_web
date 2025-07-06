// Gallery.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
import styles from "./Gallery.module.css";
import { Manufacturing, Celebration, Events, Participation, Group } from "./data";

const Gallery = () => {
  const [selectedBatch, setSelectedBatch] = useState("Manufacturing");

  const handleBatchSelect = (batch) => {
    setSelectedBatch(batch);
  };

  const renderGallery = (galleryData) => (
    <Row className="g-4 justify-content-center">
      {galleryData.map((item) => (
        <Col key={item.id} xl={3} lg={4} md={6} sm={12}>
          <Card className={`${styles['gallery-card']} shadow`}>
            <div className={`${styles['gallery-image-container']} ratio ratio-4x3`}>
              <Card.Img
                src={item.img}
                alt={item.name}
                className="img-fluid"
              />
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <div className={styles['gallery-page']}>
      {/* Hero Section */}
      <section className={styles['hero-section']}>
        <div className={styles['hero-overlay']}>
          <Container>
            <div className={`${styles['hero-content']} text-center`}>
              <h1 className={styles['hero-title']}>Our Gallery</h1>
              <p className={styles['hero-subtitle']}>Capturing our moments of innovation and celebration</p>
              <div className={styles['hero-divider']}></div>
            </div>
          </Container>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`${styles['gallery-section']} py-5`}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col xs={12} className="text-center">
              <h2 className={styles['section-title']}>
                Explore Our <span>Moments</span>
              </h2>
              <div className={styles['section-divider']}></div>
              <Dropdown className="d-inline-block mt-3">
                <Dropdown.Toggle variant="orange" id="batch-dropdown" className={styles['batch-dropdown']}>
                  {selectedBatch}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleBatchSelect("Manufacturing")}>
                    Manufacturing
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleBatchSelect("Our Participation")}>
                    Our Participation
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleBatchSelect("Events")}>
                    Events
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleBatchSelect("Celebration")}>
                    Celebration
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleBatchSelect("Group Photos")}>
                    Group Photos
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          {selectedBatch === "Manufacturing" && renderGallery(Manufacturing)}
          {selectedBatch === "Our Participation" && renderGallery(Participation)}
          {selectedBatch === "Events" && renderGallery(Events)}
          {selectedBatch === "Celebration" && renderGallery(Celebration)}
          {selectedBatch === "Group Photos" && renderGallery(Group)}
        </Container>
      </section>
    </div>
  );
};

export default Gallery;