import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import dashboard from "./dashboard.png";
import eye from "./eye.png";
import covilla from "./covilla.png";
import weather from "./weather.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

const projects = [
  {
    title: "Dashboard",
    description:
      "Sneat – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.",
    imageUrl: dashboard,
    tags: ["-ReactJs",
    "NodeJs-"],
    link: "https://dashboardplus.netlify.app",
    git:"https://github.com/summerhanyuezheng/dashboard.git"
  },
  {
    title: "Covilla",
    description:
      "Covilla:  Features several animations,crafted with advanced JavaScript to enhance your journey. interactive experience that showcases the potential of web development.",
    imageUrl: covilla,
    tags: ["-Javascript-"],
    link: "https://covillajs.netlify.app",
    git:"https://github.com/summerhanyuezheng/Covilla.git"
  },
  {
    title: "Eyewear",
    description:
    "Discover the joy of purchasing eyewear.This is a sophisticated e-commerce platform, using both front-end and back-end technologies, to offer you an enriching shopping experience.",
    imageUrl: eye,
    tags: ["-Firebase,Redux-"],
    link: "https://eyewear.netlify.app",
    git:"https://github.com/summerhanyuezheng/eyewear.git"
  },
  {
    title: "StackYourWeather",
    description:
      "Get current weather information, historical data and forecasts using weatherstack - a free world weather REST API supporting millions of global locations.",
    imageUrl: weather,
    tags: ["-HTML-"],
    link: "https://stackyourweather.netlify.app",
    git:"https://github.com/summerhanyuezheng/weatherstack.git"
  },
];

function ProjectList() {
  return (
    <Grid
      container
      spacing={10}
      sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "1246px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: "100px",
      }}
      style={{ width: "100%", minHeight: "100vh" }}
    >
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              padding: "20px",
              border: "15px solid #B7E5B4",
              borderRadius: "10px",
              cursor: "pointer",
              overflow: "hidden",

              position: "relative", //position relative here for the Card
              "&:hover": {
                boxShadow: "1em 1em 0 0 #747264", //  the boxShadow on hover

                "& .overlayContent": {
                  opacity: 1, // Show the overlay content on hover
                },
              },
            }}
          >
            {/* box is for whole content with border */}
            <Box sx={{ borderRadius: "10px", overflow: "hidden" }}>
              <CardMedia
                sx={{ cursor: "poniter" }}
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              {/* Overlay content for icons and tag */}
              <Box
                className="overlayContent"
                sx={{
                  position: "absolute", // Absolutely position overlayContent
                  top: 0, // Position it at the top of the CardMedia
                  left: 0, // Position it at the left of the CardMedia
                  width: "100%", // Take full width of the CardMedia
                  height: "40%", // Take full height of the CardMedia
                  display: "flex",
                  flexDirection: "column", // Arrange items vertically
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                  opacity: 0, // Start with overlay content invisible
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
                  transition: "opacity 0.3s ease-in-out", // Smooth transition for the hover effect
                  padding: "16px", // Add padding
                }}
              >
                {/* Icons */}
                <Box>
                  <a href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    sx={{
                      color: "#fff",
                      marginRight: "50px",
                      "&:hover": {
                        transform: "scale(1.2)",
                        transition: "transform 0.3s ease-in-out",
                        color: "#B7E5B4",
                      },
                    }}
                  />


                </a>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <VisibilityIcon
                      sx={{
                        color: "#fff",
                        "&:hover": {
                          transform: "scale(1.2)",
                          transition: "transform 0.3s ease-in-out",
                          color: "#B7E5B4",
                        },
                      }}
                    />
                  </a>
                </Box>
              </Box>

              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                    fontSize: "1rem",
                    marginBottom: "10px",
                    marginTop: "20px",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {project.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: "500",
                    fontSize: "0.8rem",
                    color: "#6b7688",
                  }}
                  variant="body2"
                  align="left"
                >
                  {project.description}
                </Typography>
                {/* Tag */}

                <Typography
                  variant="body2"
                  color="#6b7688"
                  borderRadius="5px"
                  marginTop="10px"
                >
                  {project.tags.join(",")}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProjectList;
