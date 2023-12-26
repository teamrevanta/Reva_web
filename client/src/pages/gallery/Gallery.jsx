import { useState } from "react";
import { Dropdown } from "react-bootstrap";

import "./Gallery.css";

import {
  Manufacturing,
  Celebration,
  Events,
  Participation,
  Group,
} from "./data";

const Gallery = () => {
  const [selectedbatch, setSelectedbatch] = useState("Manufacturing");

  const handlebatchSelect = (batch) => {
    setSelectedbatch(batch);
  };

  return (
    <div className="gallery-containers">
      <div className="batch-dropdowns">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {selectedbatch}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handlebatchSelect("Manufacturing")}>
              Manufacturing
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handlebatchSelect("Our Participation")}
            >
              Our Participation
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handlebatchSelect("Events")}>
              Events
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handlebatchSelect("Celebration")}>
              Celebration
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handlebatchSelect("Group Photos")}>
              Group Photos
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="image-gallerys">
        {/* Images for Events */}
        {selectedbatch === "Celebration" && (
          <div className="batch-lists">
            {Celebration.map((batch) => (
              <div key={batch.id} className="batch-items">
                <img src={batch.img} alt={batch.name} />
              </div>
            ))}
          </div>
        )}

        {/* Images for Manufacturing */}
        {selectedbatch === "Manufacturing" && (
          <div className="batch-lists">
            {Manufacturing.map((batch) => (
              <div key={batch.id} className="batch-items">
                <img src={batch.img} alt={batch.name} />
              </div>
            ))}
          </div>
        )}
        {selectedbatch === "Group Photos" && (
          <div className="batch-lists">
            {Group.map((batch) => (
              <div key={batch.id} className="batch-items">
                <img src={batch.img} alt={batch.name} />
              </div>
            ))}
          </div>
        )}

        {/* Images for Our Participation */}
        {selectedbatch === "Our Participation" && (
          <div className="batch-lists">
            {Participation.map((batch) => (
              <div key={batch.id} className="batch-items">
                <img src={batch.img} alt={batch.name} />
              </div>
            ))}
          </div>
        )}

        {/* Images for Events */}
        {selectedbatch === "Events" && (
          <div className="batch-lists">
            {Events.map((batch) => (
              <div key={batch.id} className="batch-items">
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
