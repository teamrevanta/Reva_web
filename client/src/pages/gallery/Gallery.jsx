import { useState } from "react";
import { Dropdown } from "react-bootstrap";

import "./Gallery.css";

import { Manufacturing, Celebration, Events } from "./data";

const Gallery = () => {
  const [selectedBatch, setSelectedBatch] = useState("Manufacturing");

  const handleBatchSelect = (batch) => {
    setSelectedBatch(batch);
  };

  return (
    <div className="gallery-container">
      <div className="batch-dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {selectedBatch}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleBatchSelect("Manufacturing")}>
              Manufacturing
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleBatchSelect("Our Participation")}
            >
              Our Participation
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleBatchSelect("Events")}>
              Events
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleBatchSelect("Celebration")}>
              Celebration
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="image-gallery">
        {/* Images for Events */}
        {selectedBatch === "Celebration" && (
          <div className="batch-list">
            {Celebration.map((batch) => (
              <div key={batch.id} className="batch-item">
                <img src={batch.img} alt={batch.name} />
              </div>
            ))}
          </div>
        )}

        {/* Images for Manufacturing */}
        {selectedBatch === "Manufacturing" && (
          <div className="batch-list">
            {Manufacturing.map((batch) => (
              <div key={batch.id} className="batch-item">
                <img src={batch.img} alt={batch.name} />
              </div>
            ))}
          </div>
        )}

        {/* Images for Our Participation */}
        {/* {selectedBatch === "Celebration" && (
          <div className="batch-list">
            {members2k19.map((batch) => (
              <div key={batch.id} className="batch-item">
                <img src={batch.img} alt={batch.name} />
               
              </div>
            ))}
          </div>
        )} */}

        {/* Images for Events */}
        {selectedBatch === "Events" && (
          <div className="batch-list">
            {Events.map((batch) => (
              <div key={batch.id} className="batch-item">
                <img src={batch.img} alt={batch.name} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
