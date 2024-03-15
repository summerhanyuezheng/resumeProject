import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import fullstack from "./fullstack.jpg";

export default function HomeComGrid() {
  return (
    
   <div
      className="whole-home-com-grid"
      style={{ marginLeft: "auto", marginRight: "auto", marginTop:"100px", marginBottom:"100px",width: "100%", height: "100%",}}
    >
      
        <Grid container justifyContent="center" alignItems="center" spacing={4} sx={{paddingTop:'20px'}}>
          {/* Fullstack Image */}
          <Grid item>
            <Box
              sx={{
                boxShadow: "0 0 0 2em #66ccff",
                borderRadius: "50%",

                height: "500px",
                width: "500px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={fullstack}
                alt="Full Stack"
                style={{ width: "370px" }}
              />
            </Box>
          </Grid>

          {/* Connecting Line */}
          <Grid item>
            <Box
              sx={{
                background: "linear-gradient(to right, #66ccff, #f1e880)",
                height: "20px",
                width: "150px",

                display: { xs: "none", md: "block" }, // Hide line on small screens
              }}
            />
          </Grid>

          {/* Roles List */}
          <Grid item>
            <Box
              sx={{
                boxShadow: "0 0 0 0.4em #090909, 0 0 0 2em #f1e880",
                borderRadius: "10px",
                p: 0,
                width: "350px",
                height: "180px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Dancing Script', cursive",
                    fontWeight: 700,
                    color: "rgba(80, 81, 82, 0.913)",
                    fontSize: "40px",
                  }}
                >
                  I'm a...
                </Typography>
              </Box>

              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  p: 0,
                  m: 0,
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",

                  color: "rgba(132, 134, 138, 0.913)",
                  "& li": {
                    fontSize: "12px",
                    textAlign: "left",
                  },
                }}
              >
                <li>WEB DEVELOPER</li>
                <li>FRONTEND ENGINEER</li>
                <li>REACT NATIVE DEVELOPER</li>
                <li>BACKEND ENGINEER</li>
                <li>FULLSTACK DEVELOPER</li>
              </Box>
            </Box>
          </Grid>
        </Grid>
      
    </div> 

     
  );
}
