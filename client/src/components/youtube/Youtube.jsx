import React from "react";
import "./youtube.css"; // Import your CSS file for styling

const Youtube = () => {
  return (
    <>
      <div
        className="accordion"
        id="accordionExample"
        style={{ marginLeft: "30px", marginRight: "30px" }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Youtube
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="accordion" id="innerAccordion">
                {/* Accordion Item #1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#innerCollapseOne"
                      aria-expanded="true"
                      aria-controls="innerCollapseOne"
                    >
                      Play 1
                    </button>
                  </h2>
                  <div
                    id="innerCollapseOne"
                    className="accordion-collapse collapse show"
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
                      Play 2
                    </button>
                  </h2>
                  <div
                    id="innerCollapseTwo"
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
                      Play 3
                    </button>
                  </h2>
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
                      Play 4
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
                      Play 5
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
                      Play 6
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
                {/* Add more accordion items as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
