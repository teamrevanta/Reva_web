import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import batches from "./data";
import "./photoPage.css";

const PhotoPage = () => {
  const [selectedBatch, setSelectedBatch] = useState("Batch 2k20");

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
            <Dropdown.Item onClick={() => handleBatchSelect("Batch 2k20")}>
              Batch 2k20
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleBatchSelect("Batch 2k21")}>
              Batch 2k21
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleBatchSelect("Batch 2k22")}>
              Batch 2k22
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleBatchSelect("Batch 2k23")}>
              Batch 2k23
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleBatchSelect("Events")}>
              Events
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="image-gallery">
        {/* Images for Batch 2k20 */}
        {selectedBatch === "Batch 2k20" && (
          <div className="image-container">
            {/* Add your images for Batch 2k20 here */}
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2071252046/display_1500/stock-photo-portrait-of-cheerful-male-international-indian-student-with-backpack-learning-accessories-standing-2071252046.jpg"
              alt="Batch 2k20 Student"
            />
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2071252046/display_1500/stock-photo-portrait-of-cheerful-male-international-indian-student-with-backpack-learning-accessories-standing-2071252046.jpg"
              alt="Batch 2k20 Student"
            />
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2071252046/display_1500/stock-photo-portrait-of-cheerful-male-international-indian-student-with-backpack-learning-accessories-standing-2071252046.jpg"
              alt="Batch 2k20 Student"
            />
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2071252046/display_1500/stock-photo-portrait-of-cheerful-male-international-indian-student-with-backpack-learning-accessories-standing-2071252046.jpg"
              alt="Batch 2k20 Student"
            />
          </div>
        )}

        {/* Images for Batch 2k21 */}
        {selectedBatch === "Batch 2k21" && (
          <div className="image-container">
            {/* Add your images for Batch 2k21 here */}
            {batches.map((batch, index) => (
              <div key={index}>
                <img src={batch.imageUrl} alt={batch.name} />
                <p>{batch.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Images for Batch 2k22 */}
        {selectedBatch === "Batch 2k22" && (
          <div className="image-container">
            {/* Add your images for Batch 2k22 here */}
            <img
              src="https://img.freepik.com/premium-photo/portrait-smiling-young-college-student-with-books-backpack-against-white-background_662251-2926.jpg"
              alt="Batch 2k22 Student"
            />
            <img
              src="https://img.freepik.com/premium-photo/portrait-smiling-young-college-student-with-books-backpack-against-white-background_662251-2926.jpg"
              alt="Batch 2k22 Student"
            />
            <img
              src="https://img.freepik.com/premium-photo/portrait-smiling-young-college-student-with-books-backpack-against-white-background_662251-2926.jpg"
              alt="Batch 2k22 Student"
            />
          </div>
        )}

        {/* Images for Batch 2k23 */}
        {selectedBatch === "Batch 2k23" && (
          <div className="image-container">
            {/* Add your images for Batch 2k23 here */}
            <img
              src="https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk="
              alt="Batch 2k23 Student"
            />
            <img
              src="https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk="
              alt="Batch 2k23 Student"
            />
            <img
              src="https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk="
              alt="Batch 2k23 Student"
            />
          </div>
        )}

        {/* Images for Events */}
        {selectedBatch === "Events" && (
          <div className="image-container">
            {/* Add your images for Events here */}
            <img
              src="https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?cs=srgb&dl=pexels-max-fischer-5212653.jpg&fm=jpg"
              alt="Events"
            />
            <img
              src="https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?cs=srgb&dl=pexels-max-fischer-5212653.jpg&fm=jpg"
              alt="Events"
            />
            <img
              src="https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?cs=srgb&dl=pexels-max-fischer-5212653.jpg&fm=jpg"
              alt="Events"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoPage;
