import React from "react";

const RefundAndCancellation = () => {
  return (
    <div className="py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#003471", letterSpacing: "1px" }}>
              Refunds and <span style={{ color: "#da7426" }}>Cancellations Policy</span>
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
              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>Registration Fee Policy</h3>
              <p style={{ marginBottom: "2rem" }}>
                The registration fee collected is for joining Team Revanta, the official technical team of NIT Jamshedpur. 
                This fee contributes to onboarding, training, and preparation for participation in the Electric Solar Vehicle 
                Championship (ESVC) and related technical activities.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>Refund Policy</h3>
              <p style={{ marginBottom: "1.5rem" }}>
                Registration fees are non-refundable under normal circumstances. Refunds will only be considered in cases where:
              </p>
              <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
                <li>The recruitment or onboarding process is officially canceled by Team Revanta.</li>
                <li>A student was charged in error and reports the issue within 48 hours.</li>
              </ul>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>Cancellation Requests</h3>
              <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
                <li>If a selected member is unable to continue due to valid personal or academic reasons, a written cancellation request may be submitted within 7 days of registration.</li>
                <li>Such requests will be reviewed on a case-by-case basis, and any refund will be at the discretion of the team coordinators.</li>
                <li>A processing fee or deduction may be applied if any partial refund is approved.</li>
              </ul>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>No-Show and Withdrawal</h3>
              <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
                <li>No refunds will be issued if a registered member fails to attend team meetings, workshops, or withdraws after onboarding.</li>
                <li>Commitment is expected from all members selected for ESVC preparation and vehicle development.</li>
              </ul>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>Force Majeure Clause</h3>
              <p style={{ marginBottom: "1rem" }}>
                Team Revanta shall not be held responsible for cancellations or delays caused by events outside our control, such as:
              </p>
              <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
                <li>Natural disasters</li>
                <li>Institutional orders</li>
                <li>ESVC event cancellations or postponements</li>
                <li>Government restrictions (COVID, elections, etc.)</li>
              </ul>
              <p style={{ marginBottom: "2rem" }}>
                In such cases, refunds will not be guaranteed and will depend on fund utilization at the time.
              </p>

              <h3 style={{ color: "#003471", marginBottom: "1rem" }}>How to Request a Refund or Cancellation</h3>
              <p style={{ marginBottom: "1rem" }}>
                All refund or cancellation requests must be made in writing via email to the official coordinator with:
              </p>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>Your full name and registration details</li>
                <li>Reason for cancellation</li>
                <li>Proof of payment</li>
              </ul>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>Email:</strong> <a href="mailto:2022ugce093@nitjsr.ac.in" style={{ color: "#da7426" }}>2022ugce093@nitjsr.ac.in</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+8210839665" style={{ color: "#da7426" }}>+91 8210839665</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundAndCancellation;