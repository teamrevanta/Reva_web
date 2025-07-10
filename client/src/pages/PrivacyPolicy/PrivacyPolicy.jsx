
import React from "react";
const PrivacyPolicy = () => {
  return (
    <div className="py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#003471", letterSpacing: "1px" }}>
              Privacy <span style={{ color: "#da7426" }}>Policy</span>
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
            <div className="policy-content">
              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>1. Information We Collect</h3>
              <p style={{ marginBottom: "1.5rem" }}>
                <strong>a. Personal Information:</strong> We may collect personal details such as your name, email address, 
                contact number, branch, and other relevant data when you register as a member, participate in projects, 
                or join competitions.
              </p>
              <p style={{ marginBottom: "2rem" }}>
                <strong>b. Non-Personal Information:</strong> We may also collect non-personal information, including 
                browser type, IP address, and device information, to improve user experience and enhance our services.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>2. How We Use Your Information</h3>
              <p style={{ marginBottom: "1rem" }}>
                <strong>a. Member Registration:</strong> Your personal information is used to process membership registrations, 
                assign roles, and communicate important updates related to team activities and competitions.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                <strong>b. Communication:</strong> We may use your email address or contact number to send notifications about 
                upcoming events, project deadlines, workshops, and team announcements. You may opt out of these 
                communications at any time.
              </p>
              <p style={{ marginBottom: "2rem" }}>
                <strong>c. Improvement of Services:</strong> Non-personal information is used to analyze website usage patterns, 
                troubleshoot issues, and improve overall functionality and user experience.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>3. Disclosure of Information</h3>
              <p style={{ marginBottom: "1rem" }}>
                <strong>a. Third-Party Service Providers:</strong> Your information may be shared with trusted third-party 
                service providers, such as payment gateways (e.g., Razorpay) for processing membership fees, or event 
                platforms for registrations.
              </p>
              <p style={{ marginBottom: "2rem" }}>
                <strong>b. Legal Requirements:</strong> We may disclose personal information if required by law or in response 
                to valid legal requests such as court orders or subpoenas.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>4. Security</h3>
              <p style={{ marginBottom: "2rem" }}>
                We take reasonable measures to protect your personal information from unauthorized access, disclosure, 
                alteration, or destruction. However, no electronic storage or transmission method is completely secure, 
                and we cannot guarantee absolute security.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>5. Cookies</h3>
              <p style={{ marginBottom: "2rem" }}>
                Our website may use cookies to enhance your browsing experience. You can adjust your browser settings to 
                disable cookies, but this may affect the functionality of the site.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>6. Links to Third-Party Websites</h3>
              <p style={{ marginBottom: "2rem" }}>
                Our website may contain links to external websites related to competitions, sponsors, or educational 
                resources. Team Revanta is not responsible for the privacy practices or content of these websites. We 
                recommend reviewing their privacy policies before providing any personal information.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>7. Changes to this Privacy Policy</h3>
              <p style={{ marginBottom: "2rem" }}>
                Team Revanta reserves the right to modify or update this Privacy Policy at any time. Changes will take 
                effect immediately upon posting. We encourage you to review this policy periodically for updates.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>8. Contact Us</h3>
              <p>
                If you have any questions or concerns regarding this Privacy Policy, please contact us at:
                <br />
                Email: <a href="mailto:2022ugce093@nitjsr.ac.in" style={{ color: "#da7426" }}>2022ugce093@nitjsr.ac.in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;