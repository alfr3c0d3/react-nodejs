import React from "react";
import { Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h1" component="div" align="center">
        Monsters
      </Typography>
      <Typography variant="h4" component="div" align="center">
        Select an option from the NavBar
      </Typography>
    </Container>
  );
};

export default HomePage;
