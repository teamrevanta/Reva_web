import React, { useState } from "react";
import Swal from 'sweetalert2';

const years = ["1", "2", "3", "4"];
const batches = ["2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];
const domains = ["Electrical", "Mechanical", "Web", "Creative", "Content", "Sponsor"];
const tshirtSizes = ["XS", "S", "M", "L", "XL", "XXL"];

const Registration = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    branch: "",
    year: "",
    batch: "",
    firstPriorityDomain: "",
    secondPriorityDomain: "",
    tshirtSize: "",
    nameOnTshirt: "",
    linkedinId: "",
    idCardImage: null,
    memberImage: null
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [registrationId, setRegistrationId] = useState(null);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (form.fullName.length < 2 || form.fullName.length > 50) {
      newErrors.fullName = "Full name must be between 2 and 50 characters";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!form.email.endsWith("@nitjsr.ac.in")) {
      newErrors.email = "Email must end with @nitjsr.ac.in";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // Branch validation
    if (!form.branch.trim()) {
      newErrors.branch = "Branch is required";
    }

    // Year validation
    if (!form.year) {
      newErrors.year = "Year is required";
    } else if (!["1", "2", "3", "4"].includes(form.year)) {
      newErrors.year = "Year must be between 1 and 4";
    }

    // Batch validation
    if (!form.batch) {
      newErrors.batch = "Batch is required";
    } else if (!batches.includes(form.batch)) {
      newErrors.batch = "Please select a valid batch";
    }

    // First Priority Domain validation
    if (!form.firstPriorityDomain) {
      newErrors.firstPriorityDomain = "First priority domain is required";
    } else if (!domains.includes(form.firstPriorityDomain)) {
      newErrors.firstPriorityDomain = "Please select a valid first priority domain";
    }

    // Second Priority Domain validation
    if (!form.secondPriorityDomain) {
      newErrors.secondPriorityDomain = "Second priority domain is required";
    } else if (!domains.includes(form.secondPriorityDomain)) {
      newErrors.secondPriorityDomain = "Please select a valid second priority domain";
    } else if (form.secondPriorityDomain === form.firstPriorityDomain) {
      newErrors.secondPriorityDomain = "Second priority domain must be different from first priority domain";
    }

    // T-shirt Size validation
    if (!form.tshirtSize) {
      newErrors.tshirtSize = "T-shirt size is required";
    } else if (!tshirtSizes.includes(form.tshirtSize)) {
      newErrors.tshirtSize = "Please select a valid T-shirt size";
    }

    // Name on T-shirt validation
    if (!form.nameOnTshirt.trim()) {
      newErrors.nameOnTshirt = "Name on T-shirt is required";
    } else if (form.nameOnTshirt.length > 20) {
      newErrors.nameOnTshirt = "Name on T-shirt must be less than or equal to 20 characters";
    }

    // LinkedIn ID validation
    if (!form.linkedinId.trim()) {
      newErrors.linkedinId = "LinkedIn profile URL is required";
    } else if (!/^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/.test(form.linkedinId)) {
      newErrors.linkedinId = "Please enter a valid LinkedIn profile URL";
    }

    // File validations
    if (!form.idCardImage) {
      newErrors.idCardImage = "College ID card image is required";
    } else if (!['image/jpeg', 'image/png'].includes(form.idCardImage.type)) {
      newErrors.idCardImage = "ID card image must be JPEG or PNG";
    }

    if (!form.memberImage) {
      newErrors.memberImage = "Member image is required";
    } else if (!['image/jpeg', 'image/png'].includes(form.memberImage.type)) {
      newErrors.memberImage = "Member image must be JPEG or PNG";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
    // Clear error for the field being edited
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    // Validate form before proceeding
    if (!validateForm()) {
      Swal.fire({
        title: 'Something went wrong',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#da7426'
      });
      return;
    }

    setLoading(true);
    setSuccess("");

    const formData = new FormData();
    Object.keys(form).forEach(key => {
      if (form[key]) formData.append(key, form[key]);
    });

    try {
      const res = await fetch("http://localhost:5000/api/registration/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");

      setRegistrationId(data.registrationId);

      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) throw new Error("Failed to load Razorpay SDK");

      const options = {
        key: data.razorpayKey,
        amount: data.amount,
        currency: data.currency,
        name: "Team Revanta Registration",
        description: "Registration Fee",
        order_id: data.orderId,
        handler: async function (response) {
          try {
            const verifyRes = await fetch("http://localhost:5000/api/registration/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                registrationId: data.registrationId
              })
            });
            const verifyData = await verifyRes.json();
            if (verifyRes.ok) {
              setSuccess(verifyData.message);
              Swal.fire({
                title: 'Success!',
                text: 'You have registered successfully!',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#003471'
              });
              setForm({
                fullName: "",
                email: "",
                branch: "",
                year: "",
                batch: "",
                firstPriorityDomain: "",
                secondPriorityDomain: "",
                tshirtSize: "",
                nameOnTshirt: "",
                linkedinId: "",
                idCardImage: null,
                memberImage: null
              });
              // Clear file input fields
              document.getElementById("idCardImage").value = "";
              document.getElementById("memberImage").value = "";
              setErrors({});
            } else {
              throw new Error(verifyData.error);
            }
          } catch (err) {
            setErrors({ general: err.message });
            Swal.fire({
              title: 'Error!',
              text: err.message,
              icon: 'error',
              confirmButtonText: 'OK',
              confirmButtonColor: '#da7426'
            });
          }
        },
        prefill: {
          name: form.fullName,
          email: form.email
        },
        theme: {
          color: "#003471"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setErrors({ general: err.message });
      Swal.fire({
        title: 'Error!',
        text: err.message,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#da7426'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#003471", letterSpacing: "1px" }}>
              Member <span style={{ color: "#da7426" }}>Registration</span>
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
              Register as a new member for Team Revanta. All fields are required.
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
                  <label htmlFor="fullName" className="form-label fw-bold" style={{ color: "#003471" }}>
                    Full Name<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.fullName ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="fullName"
                    placeholder="Enter your full name"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">
                      {errors.fullName}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-bold" style={{ color: "#003471" }}>
                    Email<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <input
                    type="email"
                    className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="email"
                    placeholder="Enter your college email (must end with @nitjsr.ac.in)"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="branch" className="form-label fw-bold" style={{ color: "#003471" }}>
                    Branch<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.branch ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="branch"
                    placeholder="Enter your branch"
                    name="branch"
                    value={form.branch}
                    onChange={handleChange}
                    required
                  />
                  {errors.branch && (
                    <div className="invalid-feedback">
                      {errors.branch}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="batch" className="form-label fw-bold" style={{ color: "#003471" }}>
                    Batch<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <select
                    className={`form-select form-select-lg ${errors.batch ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="batch"
                    name="batch"
                    value={form.batch}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Batch</option>
                    {batches.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.batch && (
                    <div className="invalid-feedback">
                      {errors.batch}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="year" className="form-label fw-bold" style={{ color: "#003471" }}>
                    Year<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <select
                    className={`form-select form-select-lg ${errors.year ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="year"
                    name="year"
                    value={form.year}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Year</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                  {errors.year && (
                    <div className="invalid-feedback">
                      {errors.year}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="firstPriorityDomain" className="form-label fw-bold" style={{ color: "#003471" }}>
                    First Priority Domain<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <select
                    className={`form-select form-select-lg ${errors.firstPriorityDomain ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="firstPriorityDomain"
                    name="firstPriorityDomain"
                    value={form.firstPriorityDomain}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select First Priority Domain</option>
                    {domains.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  {errors.firstPriorityDomain && (
                    <div className="invalid-feedback">
                      {errors.firstPriorityDomain}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="secondPriorityDomain" className="form-label fw-bold" style={{ color: "#003471" }}>
                    Second Priority Domain<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <select
                    className={`form-select form-select-lg ${errors.secondPriorityDomain ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="secondPriorityDomain"
                    name="secondPriorityDomain"
                    value={form.secondPriorityDomain}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Second Priority Domain</option>
                    {domains.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  {errors.secondPriorityDomain && (
                    <div className="invalid-feedback">
                      {errors.secondPriorityDomain}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="tshirtSize" className="form-label fw-bold" style={{ color: "#003471" }}>
                    T-shirt Size<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <select
                    className={`form-select form-select-lg ${errors.tshirtSize ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="tshirtSize"
                    name="tshirtSize"
                    value={form.tshirtSize}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select T-shirt Size</option>
                    {tshirtSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  {errors.tshirtSize && (
                    <div className="invalid-feedback">
                      {errors.tshirtSize}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="nameOnTshirt" className="form-label fw-bold" style={{ color: "#003471" }}>
                    Name on T-shirt<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.nameOnTshirt ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="nameOnTshirt"
                    placeholder="Enter name to be printed on T-shirt"
                    name="nameOnTshirt"
                    value={form.nameOnTshirt}
                    onChange={handleChange}
                    required
                  />
                  {errors.nameOnTshirt && (
                    <div className="invalid-feedback">
                      {errors.nameOnTshirt}
                    </div>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="linkedinId" className="form-label fw-bold" style={{ color: "#003471" }}>
                    LinkedIn ID<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.linkedinId ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="linkedinId"
                    placeholder="Enter your LinkedIn profile URL"
                    name="linkedinId"
                    value={form.linkedinId}
                    onChange={handleChange}
                    required
                  />
                  {errors.linkedinId && (
                    <div className="invalid-feedback">
                      {errors.linkedinId}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="idCardImage" className="form-label fw-bold" style={{ color: "#003471" }}>
                    College ID Card Image<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <input
                    type="file"
                    className={`form-control form-control-lg ${errors.idCardImage ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="idCardImage"
                    name="idCardImage"
                    onChange={handleChange}
                    accept="image/jpeg,image/png"
                    required
                  />
                  {errors.idCardImage && (
                    <div className="invalid-feedback">
                      {errors.idCardImage}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="memberImage" className="form-label fw-bold" style={{ color: "#003471" }}>
                    Member Image<span style={{ color: "#da7426" }}> *</span>
                  </label>
                  <input
                    type="file"
                    className={`form-control form-control-lg ${errors.memberImage ? 'is-invalid' : ''}`}
                    style={{
                      borderRadius: "8px",
                      border: "1.5px solid #e1e1e1",
                      background: "#f8fafc"
                    }}
                    id="memberImage"
                    name="memberImage"
                    onChange={handleChange}
                    accept="image/jpeg,image/png"
                    required
                  />
                  {errors.memberImage && (
                    <div className="invalid-feedback">
                      {errors.memberImage}
                    </div>
                  )}
                </div>

                <div className="col-12 mt-4">
                  <button
                    type="button"
                    className="btn btn-lg w-100 py-3 fw-bold"
                    onClick={handlePayment}
                    disabled={loading}
                    style={{
                      background: "linear-gradient(90deg, #003471 0%, #da7426 100%)",
                      color: "#fff",
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 2px 8px rgba(218,116,38,0.08)",
                      letterSpacing: "1px"
                    }}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Processing...
                      </>
                    ) : (
                      "Submit & Pay"
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

export default Registration;