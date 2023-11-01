import Batch from "../batches/Batch";
import "./aboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <div>
        <section className="about_section layout_padding">
          <div className="container  ">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>
                      Welcome to <span>Team Revanta</span>
                    </h2>
                  </div>
                  <p>
                    Revanta Supermileage was started in the year 2009 as a
                    result of the dream of a group of students who wanted to
                    break the barriers of mileage. The team is being guided by
                    Dr. KDP Singh (Mech. Dept) and Dr. Madhu Singh (Elect.
                    Dept). Within a year of its inception, it participated in
                    two International events, namely- SAE Supermileage-2010,
                    held in Michigan, USA and Shell Eco Marathon Asia- 2011 and
                    2012, successively held in Kualalumpur, Malaysia. Both of
                    these were under the Gasoline category.
                  </p>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="img-box">
                  <img src="images/about-image.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="custom-boxes-container">
        <div className="custom-box box-one">
          <h2>Team's Inspirational Journey</h2>
          <p>
            Revanta Supermileage, founded in 2009, embodies the spirit of
            innovation and determination. Fueled by the passion to shatter
            conventional mileage barriers, a group of visionary students
            initiated this remarkable journey. Guided by the expertise of Dr.
            KDP Singh from the Mechanical Department and Dr. Madhu Singh from
            the Electrical Department, the team embarked on a transformative
            mission.
          </p>
        </div>
        <div className="custom-box box-two">
          <h2>Global Recognition and Achievements</h2>
          <p>
            In a mere year since its inception, Revanta Supermileage made waves
            on the international stage. The team's exceptional prowess was
            showcased at prestigious events like the SAE Supermileage 2010 in
            Michigan, USA, and the Shell Eco Marathon Asia in 2011 and 2012,
            held consecutively in Kuala Lumpur, Malaysia. Remarkably, the team
            participated and excelled in the Gasoline category, gaining global
            recognition for their innovative approaches.
          </p>
        </div>
        <div className="custom-box box-three">
          <h2>Fostering Future Innovators</h2>
          <p>
            Revanta Supermileage is not just a team; it's a nurturing ground for
            future innovators. With the guidance of esteemed mentors and the
            zeal of its members, the team continues to inspire and empower the
            next generation of engineers. Their story of triumph over challenges
            and their commitment to pushing the boundaries of mileage serve as a
            beacon of inspiration for aspiring minds, fostering a culture of
            innovation and excellence.
          </p>
        </div>
      </div>
      <Batch />
    </div>
  );
};

export default AboutPage;
