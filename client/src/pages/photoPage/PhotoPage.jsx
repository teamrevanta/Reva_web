import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import batches from "./data";
import "./photoPage.css";

import {
  members2k21,
  members2k19,
  members2k20,
  members2k22,
  events,
} from "./data";
import LinkedIn from "@mui/icons-material/LinkedIn";

const PhotoPage = () => {
  const [selectedBatch, setSelectedBatch] = useState("Events");

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
            <Dropdown.Item onClick={() => handleBatchSelect("Events")}>
              Events
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleBatchSelect("Batch 2k21")}>
              Batch 2k21
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleBatchSelect("Batch 2k22")}>
              Batch 2k22
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleBatchSelect("Batch 2k20")}>
              Batch 2k20
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleBatchSelect("Batch 2k19")}>
              Batch 2k19
            </Dropdown.Item>
            {/* <Dropdown.Item onClick={() => handleBatchSelect("Batch 2k23")}>
              Batch 2k23
            </Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="image-gallery">
        {/* Images for Batch 2k20 */}
        {selectedBatch === "Batch 2k20" && (
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

        {/* Images for Batch 2k21 */}
        {selectedBatch === "Batch 2k21" && (
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

        {/* Images for Batch 2k22 */}
        {selectedBatch === "Batch 2k22" && (
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
        {/* Images for Batch 2k22 */}
        {selectedBatch === "Batch 2k19" && (
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
                {/* <p>{batch.name}</p>
                <p>{batch.date}</p> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoPage;
