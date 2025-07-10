import React, { useState } from "react";
import Swal from "sweetalert2";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    user_choice: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    } else if (formData.user_name.length < 2 || formData.user_name.length > 50) {
      newErrors.user_name = "Name must be between 2 and 50 characters";
    }
     if (formData.user_phone) {
    if (!/^\+?\d{10,15}$/.test(formData.user_phone)) {
      newErrors.user_phone = "Invalid phone number format";
    }
  }
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = "Invalid email format";
    }

    if (!formData.user_choice) {
      newErrors.user_choice = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 500) {
      newErrors.message = "Message must be less than 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        title: "something went wrong!",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#da7426"
      });
      return;
    }

    setLoading(true);
    setSuccess("");
    setErrors({});

    try {
      const response = await fetch("http://localhost:5000/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSuccess(data.message || "Message sent successfully!");
      setFormData({
        user_name: "",
        user_phone: "",
        user_email: "",
        user_choice: "",
        message: ""
      });
      Swal.fire({
        title: "Success!",
        text: data.message || "Message sent successfully!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#003471"
      });
    } catch (error) {
      const errorMessage = error.message || "Failed to send message. Please try later.";
      setErrors({ general: errorMessage });
      Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#da7426"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-5 px-4 px-sm-0">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#003471", letterSpacing: "1px" }}>
              Get <span style={{ color: "#da7426" }}>In Touch</span>
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
              Contact us for sponsorship, advertisement, or general inquiries. All required fields are marked with *.
            </p>
          </div>

          <div className="card p-4 p-md-5 mb-5" style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)"
          }}>
            {errors.general && (
              <div className="alert alert-danger text-center fw-bold mb-4">
                {errors.general}
              </div>
            )}
            {success && (
              <div className="alert alert-success text-center fw-bold mb-4">
                {success}
              </div>
            )}

            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="user_name" className="form-label fw-bold" style={{ color: "#003471" }}>
                    Your Name<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.user_name ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="user_name"
                    placeholder="Enter your name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                  {errors.user_name && (
                    <div className="invalid-feedback">
                      {errors.user_name}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="user_phone" className="form-label fw-bold" style={{ color: "#003471" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`form-control form-control-lg ${errors.user_phone ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="user_phone"
                    placeholder="Enter your phone number"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                  />
                  {errors.user_phone && (
                    <div className="invalid-feedback">
                      {errors.user_phone}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="user_email" className="form-label fw-bold" style={{ color: "#003471" }}>
                    Email<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <input
                    type="email"
                    className={`form-control form-control-lg ${errors.user_email ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="user_email"
                    placeholder="Enter your email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                  {errors.user_email && (
                    <div className="invalid-feedback">
                      {errors.user_email}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="user_choice" className="form-label fw-bold" style={{ color: "#003471" }}>
                    Service<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <select
                    className={`form-select form-select-lg ${errors.user_choice ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="user_choice"
                    name="user_choice"
                    value={formData.user_choice}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="Sponsorship">Sponsorship</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Message">Message</option>
                  </select>
                  {errors.user_choice && (
                    <div className="invalid-feedback">
                      {errors.user_choice}
                    </div>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label fw-bold" style={{ color: "#003471" }}>
                    Message<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <textarea
                    className={`form-control form-control-lg ${errors.message ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="message"
                    placeholder="Enter your message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">
                      {errors.message}
                    </div>
                  )}
                </div>

                <div className="col-12 mt-4 text-center">
                  <button
                    type="button"
                    className="btn btn-lg py-3 fw-bold mx-auto d-block"
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{
                      background: "linear-gradient(90deg, #003471 0%, #da7426 100%)",
                      color: "#fff",
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 2px 8px rgba(218,116,38,0.08)",
                      letterSpacing: "1px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px"
                    }}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <FiSend />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;