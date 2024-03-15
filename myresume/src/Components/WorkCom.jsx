import React from "react";
import "./WorkCom.css";
import Typography from "@mui/material/Typography";

import ProjectList from "./ProjectList";

export default function WorkCom() {
  return (
    <div className="whole-work-com">
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "50px",
          paddingTop: "70px",
        }}
      >
        My Creative
        <span style={{ color: "#04DEAD" }}> Portfolio </span>
        Section
      </Typography>
      <ProjectList></ProjectList>
    </div>
  );
}