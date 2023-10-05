// import { Container, Menu } from "@mui/material";
// import { NavLink } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <Menu position="fixed" inverted>
//       <Container>
//         <Menu.Item header as={NavLink} exact to="/">
//           <img src="/assets/logo.svg" alt="logo" style={{ marginRight: 10 }} />
//           Home
//         </Menu.Item>
//         <Menu.Item name="Monsters" as={NavLink} to="/monsters" />
//         <Menu.Item name="Habitats" as={NavLink} to="/habitats" />
//         <Menu.Item name="Lives" as={NavLink} to="/lives" />
//       </Container>
//     </Menu>
//   );
// };

// export default NavBar;


import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

const linkStyle = {
  textDecoration: "none", // Remove underline
  color: "inherit"
};

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography component={NavLink} to="/" variant="h6" sx={{ flexGrow: 1 }} style={linkStyle}>
            Monsters
          </Typography>
          <Button component={NavLink} to="/monsters" color="inherit">
            Monsters
          </Button>
          <Button component={NavLink} to="/habitats" color="inherit">
            Habitats
          </Button>
          <Button component={NavLink} to="/lives" color="inherit">
            Lives
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
