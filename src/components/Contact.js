import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_6sec8bk", // Your EmailJS service ID
        "template_4lg7yi5", // Your EmailJS template ID
        formData,
        "Ydfx5OmCLoHmTeO4G" // Your EmailJS public key
      )
      .then((response) => {
        setSuccessMessage("Message sent. Thank you!"); // Set success message
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        }); // Clear form fields
        setErrorMessage(""); // Clear any previous error message
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        setErrorMessage("Failed to send message. Please try again later."); // Set error message
        setSuccessMessage(""); // Clear any previous success message
        console.log("FAILED...", err);
      });
  };

  return (
    <Container
      sx={{
        padding: 4,
        backgroundColor: "#cad2c5",
        // boxShadow: 1,
        borderRadius: 1,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center", color: "#003049", fontWeight: "bold" }}>
        Contact Me
        <br />
      </Typography>
      <Typography
        variant="h4"
        sx={{
          mb: 1,
          textAlign: "center",
          fontSize: "1.5rem",
          color: "#003049",
        }}
      >
        <br />I am always happy to connect!
        <br /> Feel free to contact me with the form below.
        <br />
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Subject"
            name="subject"
            variant="outlined"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            sx={{
              fontSize: "1rem",
              backgroundColor: "#fcbf49",
              color: "#003049",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
                color: "#ffd60a",
                backgroundColor: "#003049",
              },
              mr: 1,
            }}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Send
          </Button>
          {successMessage && (
            <Typography sx={{ mt: 2, textAlign: "center", color: "green" }}>
              {successMessage}
            </Typography>
          )}
          {errorMessage && (
            <Typography sx={{ mt: 2, textAlign: "center", color: "red" }}>
              {errorMessage}
            </Typography>
          )}
        </Box>
      </form>
    </Container>
  );
}

export default Contact;
