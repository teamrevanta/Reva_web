const nodemailer = require("nodemailer");

const sendContactEmail = async (req, res) => {
  try {
    const { user_name, user_email, user_phone, user_choice, message } = req.body;

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to your own email or a designated recipient
      replyTo: user_email,
      subject: `Contact Form Submission - ${user_choice}`,
      text: `
        Name: ${user_name}
        Email: ${user_email}
        Phone: ${user_phone || "Not provided"}
        Service: ${user_choice}
        Message: ${message}
      `,
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${user_phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${user_choice}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message", details: error.message });
  }
};

module.exports = { sendContactEmail };