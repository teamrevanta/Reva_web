import "./batch.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { membersData } from "./data";
const Batch = () => {
  return (
    <div>
      <div className="alumni-list">
        {membersData.map((alumni) => (
          <div key={alumni.id} className="alumni-item">
            <img src={alumni.img} alt={alumni.name} />
            <h2>{alumni.name}</h2>
            <p>{alumni.post}</p>
            <p>{alumni.class}</p>
            <a href={alumni.LinkedIn} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Batch;
