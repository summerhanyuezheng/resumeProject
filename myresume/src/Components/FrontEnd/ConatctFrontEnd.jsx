import React, { useState } from "react";
import { Grid, Typography, Paper, Box, Container } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import "./ContactFrontEnd.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Message sent:", data);
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div
      className="whole-contact"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(230, 186, 220, 0.923)",
      }}
    >
      <Grid
        container
        spacing={2}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingTop="40px"
      >
        <Grid item>
          <Typography
            sx={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}
          >
            Take a Coffee & Chat With Me
          </Typography>
        </Grid>
        <Grid item>
          <Box
            sx={{
              backgroundColor: "pink",
              maxWidth: "1000px",
              padding: "16px",
              display: "flex",
              borderRadius: "10px",
            }}
          >
            <EmailIcon sx={{ marginRight: "20px" }}></EmailIcon>
            <Typography>Myemail@gmail.com</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ maxWidth: "758px", width: "100%", margin: "0 auto" }}>
            <form onSubmit={handleSubmit}>
              
              <input
                className="contact-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />

             
              

              <input
                className="contact-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />

              <textarea
                className="contact-input"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />

              <button type="submit">Send Message</button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactForm;
