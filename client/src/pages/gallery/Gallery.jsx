import { useState } from "react";
import { Dropdown } from "react-bootstrap";

import "./Gallery.css";

import {
  members2k21,
  members2k19,
  members2k20,
  members2k22,
  events,
} from "./data";
import LinkedIn from "@mui/icons-material/LinkedIn";

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
            {/* <Dropdown.Item onClick={() => handleBatchSelect("Events")}>
              Events
            </Dropdown.Item> */}
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
            {/* <Dropdown.Item onClick={() => handleBatchSelect("Batch 2k23")}>
              Batch 2k23
            </Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="image-gallery">
        {/* Images for Events */}
        {selectedBatch === "Events" && (
          <div className="batch-list">
            {members2k20.map((batch) => (
              <div key={batch.id} className="batch-item">
                <img src={batch.img} alt={batch.name} />
                <h2>{batch.name}</h2>
                <p>{batch.post}</p>

                <a
                  href={batch.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Images for Manufacturing */}
        {selectedBatch === "Manufacturing" && (
          <div className="batch-list">
            {members2k21.map((batch) => (
              <div key={batch.id} className="batch-item">
                <img src={batch.img} alt={batch.name} />
                <h2>{batch.name}</h2>
                <p>{batch.post}</p>

                <a
                  href={batch.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Images for Our Participation */}
        {selectedBatch === "Our Participation" && (
          <div className="batch-list">
            {members2k22.map((batch) => (
              <div key={batch.id} className="batch-item">
                <img src={batch.img} alt={batch.name} />
                <h2>{batch.name}</h2>
                <p>{batch.post}</p>

                <a
                  href={batch.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </a>
              </div>
            ))}
          </div>
        )}
        {/* Images for Our Participation */}
        {selectedBatch === "Celebration" && (
          <div className="batch-list">
            {members2k19.map((batch) => (
              <div key={batch.id} className="batch-item">
                <img src={batch.img} alt={batch.name} />
                <h2>{batch.name}</h2>
                <p>{batch.post}</p>

                <a
                  href={batch.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Images for Batch 2k23 */}
        {/* {selectedBatch === "Batch 2k23" && (
          <div className="batch-list">
            {members2k23.map((batch) => (
              <div key={batch.id} className="batch-item">
                <img src={batch.img} alt={batch.name} />
                <h2>{batch.name}</h2>
                <p>{batch.post}</p>

                <a
                  href={batch.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </a>
              </div>
            ))}
          </div>
        )} */}

        {/* Images for Events */}
        {selectedBatch === "Events" && (
          <div className="batch-list">
            {events.map((batch) => (
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
