import React from "react";
import "./youtube.css"; // Import your CSS file for styling

const Youtube = () => {
  return (
    <div className="Youtube-cont">
      <div className="accordion-body">
        <div className="accordion" id="innerAccordion">
          {/* Accordion Item #1 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#innerCollapseOne"
                aria-expanded="false"
                aria-controls="innerCollapseOne"
              >
                <i className="fa fa-play" aria-hidden="true">
                  1
                </i>
              </button>
            </h2>
            <div
              id="innerCollapseOne"
              className="accordion-collapse  show"
              data-bs-parent="#innerAccordion"
            >
              <div className="accordion-body">
                <div className="youtube-video">
                  <video
                    className="youtube-video-iframe"
                    controls // Add controls for user interaction
                    autoPlay={false} // Set autoPlay to false
                  >
                    <source src="./video/4.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#innerCollapseTen"
                aria-expanded="false"
                aria-controls="innerCollapseTen"
              >
                <i className="fa fa-play" aria-hidden="true">
                  2
                </i>
              </button>
            </h2>
            <div
              id="innerCollapseTen"
              className="accordion-collapse collapse"
              data-bs-parent="#innerAccordion"
            >
              <div className="accordion-body">
                <div className="youtube-video">
                  <video
                    className="youtube-video-iframe"
                    controls // Add controls for user interaction
                    autoPlay={false} // Set autoPlay to false
                  >
                    <source src="./video/5.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#innerCollapseEleven"
                aria-expanded="false"
                aria-controls="innerCollapseEleven"
              >
                <i className="fa fa-play" aria-hidden="true">
                  3
                </i>
              </button>
            </h2>
            <div
              id="innerCollapseEleven"
              className="accordion-collapse collapse"
              data-bs-parent="#innerAccordion"
            >
              <div className="accordion-body">
                <div className="youtube-video">
                  <video
                    className="youtube-video-iframe"
                    controls // Add controls for user interaction
                    autoPlay={false} // Set autoPlay to false
                  >
                    <source src="./video/6.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#innerCollapseNine"
                aria-expanded="false"
                aria-controls="innerCollapseNine"
              >
                <i class="fa fa-play" aria-hidden="true">
                  {" "}
                  4
                </i>
              </button>
            </h2>
            <div
              id="innerCollapseNine"
              className="accordion-collapse collapse "
              data-bs-parent="#innerAccordion"
            >
              <div className="accordion-body">
                <div className="youtube-video">
                  <iframe
                    className="youtube-video-iframe"
                    src="https://www.youtube.com/embed/nujAIM_AcFU?si=ZYJuoXekQQ8eA3Wx"
                    title="YouTube video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Item #2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#innerCollapseTwo"
                aria-expanded="false"
                aria-controls="innerCollapseTwo"
              >
                <i class="fa fa-play" aria-hidden="true">
                  5
                </i>
              </button>
            </h2>
            <div
              id="innerCollapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#innerAccordion"
            >
              <div className="accordion-body">
                <div className="youtube-video">
                  <video
                    className="youtube-video-iframe"
                    controls // Add controls for user interaction
                    autoPlay={false} // Set autoPlay to false
                  >
                    <source src="./video/3.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Item #3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#innerCollapseThree"
                aria-expanded="false"
                aria-controls="innerCollapseThree"
              >
                <i class="fa fa-play" aria-hidden="true">
                  6
                </i>
              </button>
            </h2>
          </div>
          <div
            id="innerCollapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#innerAccordion"
          >
            <div className="accordion-body">
              <div className="youtube-video">
                <iframe
                  className="youtube-video-iframe"
                  src="https://www.youtube.com/embed/1n8uEsfjtA0?si=tveyLdv3ZvU1ufEA"
                  title="YouTube video"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Accordion Item #4 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#innerCollapseFour"
                aria-expanded="false"
                aria-controls="innerCollapseFour"
              >
                <i class="fa fa-play" aria-hidden="true">
                  7
                </i>
              </button>
            </h2>
            <div
              id="innerCollapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#innerAccordion"
            >
              <div className="accordion-body">
                <div className="youtube-video">
                  <iframe
                    className="youtube-video-iframe"
                    src="https://www.youtube.com/embed/BpcZEN--9dg?si=XgypKCpbZ6377bgo"
                    title="YouTube video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Item #5 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#innerCollapseFive"
                aria-expanded="false"
                aria-controls="innerCollapseFive"
              >
                <i class="fa fa-play" aria-hidden="true">
                  8
                </i>
              </button>
            </h2>
            <div
              id="innerCollapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#innerAccordion"
            >
              <div className="accordion-body">
                <div className="youtube-video">
                  <iframe
                    className="youtube-video-iframe"
                    src="https://www.youtube.com/embed/QL704LJ55Jo?si=7OsjhEPni04neJ_l"
                    title="YouTube video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Item #6 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#innerCollapseSix"
                aria-expanded="false"
                aria-controls="innerCollapseSix"
              >
                <i class="fa fa-play" aria-hidden="true">
                  9
                </i>
              </button>
            </h2>
            <div
              id="innerCollapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#innerAccordion"
            >
              <div className="accordion-body">
                <div className="youtube-video">
                  <iframe
                    className="youtube-video-iframe"
                    src="https://www.youtube.com/embed/79JFP5GLJqg?si=rmSqGjYaoj52X7D2"
                    title="YouTube video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#innerCollapseSeven"
                aria-expanded="false"
                aria-controls="innerCollapseSeven"
              >
                <i className="fa fa-play" aria-hidden="true">
                  10
                </i>
              </button>
            </h2>
            <div
              id="innerCollapseSeven"
              className="accordion-collapse collapse"
              data-bs-parent="#innerAccordion"
            >
              <div className="accordion-body">
                <div className="youtube-video">
                  <video
                    className="youtube-video-iframe"
                    controls // Add controls for user interaction
                    autoPlay={false} // Set autoPlay to false
                  >
                    <source src="./video/1.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#innerCollapseEight"
                aria-expanded="false"
                aria-controls="innerCollapseEight"
              >
                <i className="fa fa-play" aria-hidden="true">
                  11
                </i>
              </button>
            </h2>
            <div
              id="innerCollapseEight"
              className="accordion-collapse collapse"
              data-bs-parent="#innerAccordion"
            >
              <div className="accordion-body">
                <div className="youtube-video">
                  <video
                    className="youtube-video-iframe"
                    controls // Add controls for user interaction
                    autoPlay={false} // Set autoPlay to false
                  >
                    <source src="./video/2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Add more accordion items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Youtube;
