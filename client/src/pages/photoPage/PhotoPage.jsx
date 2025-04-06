import { useState } from "react";
import { Dropdown, Container, Row, Col, Card } from "react-bootstrap";
import "./photoPage.css";
import { members2k21, members2k19, members2k20, members2k22 } from "./data";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Email from "@mui/icons-material/Email";

const PhotoPage = () => {
  const [selectedBatch, setSelectedBatch] = useState("Present Team (2022)");

  const handleBatchSelect = (batch) => {
    setSelectedBatch(batch);
  };

  const renderBatch = (batchData) => (
    <Row className="g-4 justify-content-center px-3">
      {batchData.map((member) => (
        <Col key={member.id} xl={3} lg={4} md={6} sm={6} xs={12}>
          <Card className="h-100 shadow member-card">
            <div className="member-image-container ratio ratio-1x1">
              <Card.Img
                variant="top"
                src={member.img}
                alt={member.name}
                className="img-fluid"
              />
            </div>
            <Card.Body className="text-center d-flex flex-column">
              <Card.Title className="fw-bold mb-2">{member.name}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                {member.post}
              </Card.Subtitle>
              <div className="social-links mt-auto">
                {member.linkedinLink && (
                  <a
                    href={member.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none mx-2"
                  >
                    <LinkedIn style={{ color: "#da7426", fontSize: "1.8rem" }} />
                  </a>
                )}
                {member.githubLink && (
                  <a
                    href={member.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none mx-2"
                  >
                    <GitHub style={{ color: "#da7426", fontSize: "1.8rem" }} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-decoration-none mx-2"
                  >
                    <Email style={{ color: "#da7426", fontSize: "1.8rem" }} />
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
    <Container className="py-5 gallery-container">
      <Row className="mb-5 justify-content-center">
        <Col xl={8} lg={10} md={12} className="text-center px-4">
          <h1 className="display-5 fw-bold mb-4">Meet Our Team</h1>
          <Dropdown className="d-inline-block">
            <Dropdown.Toggle variant="orange" size="lg" id="batch-dropdown">
              {selectedBatch}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
              <Dropdown.Item
                onClick={() => handleBatchSelect("Present Team (2022)")}
                active={selectedBatch === "Present Team (2022)"}
              >
                Present Team (2022)
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleBatchSelect("Batch 2021")}
                active={selectedBatch === "Batch 2021"}
              >
                Batch 2021
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleBatchSelect("Batch 2020")}
                active={selectedBatch === "Batch 2020"}
              >
                Batch 2020
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleBatchSelect("Batch 2019")}
                active={selectedBatch === "Batch 2019"}
              >
                Batch 2019
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <div className="image-gallery">
        {selectedBatch === "Present Team (2022)" && renderBatch(members2k22)}
        {selectedBatch === "Batch 2021" && renderBatch(members2k21)}
        {selectedBatch === "Batch 2020" && renderBatch(members2k20)}
        {selectedBatch === "Batch 2019" && renderBatch(members2k19)}
      </div>
    </Container>
  );
};

export default PhotoPage;