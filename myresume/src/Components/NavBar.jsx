import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import './NavBar.css';

const navigateToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function NavBar() {
  return (
    <AppBar position="static"  elevation={0} className="navbar">
      <Toolbar className="toolbar">
        <Typography variant="h6" color="black" noWrap className="logo">
          <img 
            className='solely-logo' 
            src="https://solely-resume.netlify.app/static/media/logo.5b65b0611cc8b0ef9f75ed31538261a5.svg" 
            alt="Solely Logo" 
          />
          Solely
        </Typography>
        <Tabs value={false} onChange={(event, newValue) => navigateToSection(newValue)} className="tabContainer">
          <Tab label="Home" value="#home" />
          <Tab label="About" value="#about" />
          <Tab label="Work" value="#work" />
          <Tab label="Skills" value="#skills" />
          <Tab label="Contact" value="#contact" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
