
import React, { useState } from "react";
import { Container, Grid, TextField, Button, Box,Typography } from '@mui/material';
import EmailIcon from "@mui/icons-material/Email";
import thanks from './thanks.png'


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://personalwebbackend.onrender.com/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormSubmitted(true);
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
    <div id="contact"
      className="whole-contact"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFC9B",
      }}
    >
        <Container maxWidth="lg" sx={{  paddingTop:"100px" , paddingBottom:"100px" }}>
      <Typography  gutterBottom sx={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "60px",  }}>
        Grab A <span style={{color:"#765827"}}>Coffee</span> & Chat With Me
      </Typography>
      <Box
            sx={{
              backgroundColor: "#6895D2",
              
              padding: "16px",
              display: "flex",
              borderRadius: "10px",
              width:'290px',
              marginLeft:'auto',
              marginRight:'auto',
              marginBottom:'50px',
              justifyContent:"center"
            }}
          >
            <EmailIcon sx={{ marginRight: "8px", color:"white"  }}></EmailIcon>
            <Typography sx={{color:'white'}}>4summersalazar@gmail.com</Typography>
          </Box>


          {formSubmitted ? (
          <><Typography gutterBottom sx={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "60px", }}>Thank You For Getting In Touch!</Typography><img style={{width:"180px", paddingBottom:'0px'}}  src={thanks} alt="" /></>
        )  : (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField onChange={handleChange}
            sx={{
                
                '& label.Mui-focused': {
                  color: 'grey', // Set  the label text to be grey when focused
                },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                  '& fieldset': { // This sets the border color for the default state
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': { // This sets the border color when the text field is hovered over
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent', //  border color when focused is 'transparent' when clciekd
                  },
                },
              }}
              fullWidth
              label="Your Name"
              name="name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField onChange={handleChange}
            sx={{
                
                '& label.Mui-focused': {
                  color: 'grey', // Set  the label text to be grey when focused
                },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                  '& fieldset': { // This sets the border color for the default state
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': { // This sets the border color when the text field is hovered over
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent', //  border color when focused is 'transparent' when clciekd
                  },
                },
              }}
              fullWidth
              label="Your Email"
              name="email"
              type="email"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField onChange={handleChange}
             sx={{
                
                '& label.Mui-focused': {
                  color: 'grey', // Set  the label text to be grey when focused
                },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                  '& fieldset': { // This sets the border color for the default state
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': { // This sets the border color when the text field is hovered over
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent', //  border color when focused is 'transparent' when clciekd
                  },
                },
              }}
              fullWidth
              label="Your Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button sx={{backgroundColor:"#6895D2", padding:"12px", paddingLeft:"32px", paddingRight:"32px"}}
              type="submit"
              variant="contained"
              size="large"
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>)}
    </Container>

    </div>
    
  );
};

export default ContactPage;
