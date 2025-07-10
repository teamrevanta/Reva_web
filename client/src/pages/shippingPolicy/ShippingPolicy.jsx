import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#003471", letterSpacing: "1px" }}>
              Shipping and <span style={{ color: "#da7426" }}>Delivery Policy</span>
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
              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>No Physical Shipping Involved</h3>
              <p style={{ marginBottom: "2rem" }}>
                Team Revanta does not sell or deliver any physical products or tickets. We are an official technical team of NIT Jamshedpur, 
                focused on student training and development for building an electric solar vehicle and participating in the 
                Electric Solar Vehicle Championship (ESVC).
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>Digital Confirmation</h3>
              <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
                <li>Upon successful registration and payment, members will receive an email confirmation at the email address provided during registration.</li>
                <li>This confirmation acts as a digital acknowledgment of your onboarding into Team Revanta.</li>
                <li>No physical shipping is required or applicable.</li>
              </ul>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>Access to Services</h3>
              <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
                <li>All workshops, sessions, and technical events conducted by Team Revanta are offline and/or on-campus, unless specifically mentioned otherwise.</li>
                <li>Members will be notified in advance via email or WhatsApp group about meeting times, locations, or training schedules.</li>
              </ul>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>No Ticket or Product Delivery</h3>
              <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
                <li>We do not issue event tickets or ship any goods.</li>
                <li>Any resources or materials needed for ESVC participation will be managed internally by the team and are not individually shipped or sold.</li>
              </ul>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>Refunds & Cancellations</h3>
              <p style={{ marginBottom: "2rem" }}>
                Please refer to our <a href="/refundAndCancellation" style={{ color: "#da7426" }}>Refunds and Cancellation Policy</a> for details on fee-related inquiries.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>Contact Us</h3>
              <p style={{ marginBottom: "0.5rem" }}>
                For any questions related to registration or onboarding confirmation, please contact:
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                <span role="img" aria-label="email">📧</span> <strong>Email:</strong> <a href="mailto:2022ugce093@nitjsr.ac.in" style={{ color: "#da7426" }}>2022ugce093@nitjsr.ac.in</a>
              </p>
              <p>
                <span role="img" aria-label="phone">📞</span> <strong>Phone:</strong> <a href="tel:+918210839665" style={{ color: "#da7426" }}>+91 82108 39665</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;