import React from "react";
import { Grid, Typography, Paper,Box, Container } from "@mui/material";

import nodejs from "./SkillsIcons/nodejs.png";
import bootstrap from "./SkillsIcons/bootstrap.png";
import css from "./SkillsIcons/css.png";
import git from "./SkillsIcons/git.png";
import html from "./SkillsIcons/html.png";
import js from "./SkillsIcons/js.png";
import sass from "./SkillsIcons/sass.png";
import redux from "./SkillsIcons/redux.png";
import material from "./SkillsIcons/material.png";
import "./SkillsCom.css";

const skills = [
  {
    icon: <img src={nodejs} alt="NodeJS" style={{ width: "45px" }} />,
    label: "NodeJS",
  },
  {
    icon: <img src={bootstrap} alt="NodeJS" style={{ width: "45px" }} />,
    label: "Bootstrap5",
  },
  {
    icon: <img src={css} alt="NodeJS" style={{ width: "45px" }} />,
    label: "CSS",
  },
  {
    icon: <img src={git} alt="NodeJS" style={{ width: "45px" }} />,
    label: "Git",
  },
  {
    icon: <img src={html} alt="NodeJS" style={{ width: "45px" }} />,
    label: "HTML",
  },
  {
    icon: <img src={js} alt="NodeJS" style={{ width: "45px" }} />,
    label: "JavaScripts",
  },
  {
    icon: <img src={sass} alt="NodeJS" style={{ width: "45px" }} />,
    label: "Sass",
  },
  {
    icon: <img src={redux} alt="NodeJS" style={{ width: "45px" }} />,
    label: "Redux",
  },
  {
    icon: <img src={material} alt="NodeJS" style={{ width: "45px" }} />,
    label: "MaterialUI",
  },
];

const experiences = [
  { year: "2019-2020", role: "Frontend Developer", company: "XX Company" },
  { year: "2020-2023", role: "FullStack Developer", company: "XX Company" },
  
];

function SkillsCom() {
  return (
    // container centers things
    <Container maxWidth='lg' className="whole-skills-com">

   
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "70px",
          paddingTop: "10px",
          fontSize: "2.5rem",
          marginLeft:'auto',
          marginRight:'auto'
        }}
      >
        Skills & Experiences
      </Typography>

      <Grid container spacing={3} sx={{  marginLeft:'auto', marginRight:"auto" , display:"flex", justifyContent:"space-around"}}>
        {/* Skills section */}
        <Grid item xs={12} sm={12} md={6} lg={4}>
          
          <Grid container spacing={4} justifyContent="spaceAround"  >
            {skills.map((skill, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Paper
                  elevation={3}
                  sx={{
                    textAlign: "center",
                    borderRadius: "50%",
                    height: "90px",
                    width: "90px",
                    padding: "0px",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                  }}
                >
                  {skill.icon}
                </Paper>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                    color: "#6b7688",
                    marginTop: "10px",
                  }}
                >
                  {skill.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Experience section */}
        <Grid item xs={12} md={4} sx={{display:"flex", flexDirection:"column", justifyContent:"space-around", marginLeft:"50px"}}>
          
          {experiences.map((exp, index) => (
            <Box
              key={index}
              variant="subtitle1"
              sx={{  textAlign:'left', }}
              
            >
              <Typography sx={{marginRight:"20px", fontWeight:"600"}}>{exp.year} </Typography>
              <Typography>{exp.role} at {exp.company}</Typography>
              
            </Box>
          ))}
        </Grid>
      </Grid>
      </Container>
    
  );
}

export default SkillsCom;
