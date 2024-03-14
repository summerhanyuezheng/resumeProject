import React from "react";
import { Grid, Box, Typography,Container } from "@mui/material";
import mypic from "./me.png";
import flowerpic from "./flower.png";

export default function FirstCom() {

  return (
    <div className="whole-skill-com" style={{width:"100%", backgroundColor: "rgba(230, 186, 220, 0.923)",}}>
      <Container sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}  >
        {/* flowers */}
        
          <Box sx={{position:"relative", left:"120px", bottom:'10px'}}>
          <img src={flowerpic} alt="Decorative flower" width="120" />
          <img src={flowerpic} alt="Decorative flower" width="50" />

          </Box>
          
        
        {/* I'm summer */}
        <Grid item xs={12} sm={true} md={4}>
          <Typography  variant="h3" component="h1" sx={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, position:"relative"}}>
            Hi, I'm <span style={{ color: "rgba(18, 59, 239, 0.917)" }}>Summer</span>
          </Typography>
        </Grid>
        {/* my pic */}
        <Grid item md={4}>
          <img src={mypic} alt="Summer" style={{ width: "400px", height: "auto" }} />
        </Grid>
       
      </Grid>
    </Container>


    </div>
    
  );
}
