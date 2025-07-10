import React from "react";

const TermAndCondition = () => {
  return (
    <div className="py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#003471", letterSpacing: "1px" }}>
              Terms & <span style={{ color: "#da7426" }}>Conditions</span>
            </h2>
            <div 
              className="mx-auto mb-3"
              style={{
                background: "#da7426",
                height: "5px",
                width: "80px",
                borderRadius: "2px"
              }}
            ></div>
             <p style={{ color: "#7f8c8d", fontSize: "1.1rem" }}>
              Team Revanta - Official Technical Team of NIT Jamshedpur
            </p>
          </div>

          <div className="card p-4 p-md-5 mb-5" style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)"
          }}>
            <div className="terms-content">
              <p style={{ marginBottom: "2rem" }}>
                By using our website and availing the services of Team Revanta, you confirm that you have read, 
                understood, and accepted these Terms, including our Privacy Policy.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>1. Modifications</h3>
              <p style={{ marginBottom: "2rem" }}>
                We reserve the right to modify these Terms at any time without notice. You are responsible for 
                reviewing the Terms periodically for updates.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>2. User Responsibilities</h3>
              <p style={{ marginBottom: "1.5rem" }}>
                You agree to provide accurate, complete, and up-to-date information during and after registration. 
                You are solely responsible for any activity carried out under your name or account.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>3. Disclaimer</h3>
              <p style={{ marginBottom: "2rem" }}>
                Team Revanta does not guarantee the accuracy, completeness, or timeliness of any information, 
                materials, or services provided on this website. We are not liable for any errors or inaccuracies 
                to the fullest extent permitted by law.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>4. Participation</h3>
              <p style={{ marginBottom: "2rem" }}>
                Your participation in any event, project, or competition is at your own risk and discretion. You 
                are responsible for ensuring that the services meet your requirements.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>5. Intellectual Property</h3>
              <p style={{ marginBottom: "2rem" }}>
                All content on this website, including logos, documents, graphics, and designs, are the 
                intellectual property of Team Revanta. You are not permitted to copy, reuse, or modify any 
                content without written permission.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>6. Unauthorized Use</h3>
              <p style={{ marginBottom: "2rem" }}>
                Unauthorized use of the website or services may result in action against you under applicable 
                laws and these Terms.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>7. Payments</h3>
              <p style={{ marginBottom: "2rem" }}>
                You agree to pay all applicable charges for services or registrations as communicated during 
                the process.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>8. Acceptable Use</h3>
              <p style={{ marginBottom: "2rem" }}>
                You must not use the website or services for any illegal or unauthorized purpose. You agree to 
                comply with all applicable Indian laws and local regulations.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>9. External Links</h3>
              <p style={{ marginBottom: "2rem" }}>
                The website may contain links to external third-party websites. Team Revanta is not responsible 
                for the content, policies, or practices of such external websites.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>10. Binding Agreement</h3>
              <p style={{ marginBottom: "2rem" }}>
                By initiating any service request or transaction, you agree that it forms a legally binding 
                contract between you and Team Revanta.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>11. Refunds</h3>
              <p style={{ marginBottom: "2rem" }}>
                You may be eligible for a refund if Team Revanta is unable to provide the promised service. 
                Refund requests must be submitted within the specified timeline. Late requests will not be 
                considered.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>12. Force Majeure</h3>
              <p style={{ marginBottom: "2rem" }}>
                Team Revanta is not liable for failure to perform obligations due to events beyond our control, 
                such as natural disasters, technical failures, or legal restrictions (force majeure).
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>13. Governing Law</h3>
              <p style={{ marginBottom: "2rem" }}>
                These Terms are governed by the laws of India. Any disputes related to these Terms will be 
                subject to the exclusive jurisdiction of courts in Jamshedpur, Jharkhand.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>14. Contact</h3>
              <p>
                For any questions or concerns regarding these Terms and Conditions, please contact us using 
                the information provided on our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermAndCondition;