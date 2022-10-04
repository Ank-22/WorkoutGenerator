import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import icon_workout from "../../images/icon_workout.png";
import NavbarTabs from "./NavbarTabs";

const Navbar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [username, setusername] = useState("username");
  const handleLogout = () => {
    setisLoggedIn(false);
  };
  const handleLogin = () => {
    setisLoggedIn(true);
  };
  return (
    <div>
      <Container
        maxWidth="none"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          backgroundColor: "grey !important",
        }}
      >
        <Button>
          <a href="/">
            <img src={icon_workout} alt="icon" />
          </a>
        </Button>
        <Container
          sx={{
            display: "flex",
            flexDirection: "none",
            width: "auto",
            marginTop: "20px",
            paddingLeft: "16rem !important",
          }}
        >
          <NavbarTabs text="workOut" link="/workout" />
          <NavbarTabs text="Exercise" link="/exercise" />
        </Container>
        <Container
          sx={{
            width: "auto",
            marginRight: "0px",
            marginLeft: "0px",
            alignSelf: "center",
          }}
        >
          {isLoggedIn ? (
            <Container>
              <Button
                sx={{ margin: "0rem 1rem" }}
                color="secondary"
                variant="contained"
              >
                <a style={{textDecoration:"none"}} href="/">
                  <Typography sx={{ color: "white" }}>{username}</Typography>
                </a>
              </Button>
              <Button
                sx={{ margin: "0rem 1rem" }}
                color="primary"
                variant="contained"
                onClick={handleLogout}
              >
                <Typography sx={{ color: "white" }}>Logout</Typography>
              </Button>
            </Container>
          ) : (
            <Container>
              <Button
                sx={{ margin: "0rem 1rem" }}
                color="primary"
                variant="contained"
                onClick={handleLogin}
              >
                {/* <a href="/"> */}
                <Typography sx={{ color: "white" }}>Login</Typography>
                {/* </a> */}
              </Button>
              <Button
                sx={{ margin: "0rem 1rem" }}
                color="secondary"
                variant="contained"
              >
                <a style={{ textDecoration: "none" }} href="/">
                  <Typography sx={{ color: "white" }}>Signup</Typography>
                </a>
              </Button>
            </Container>
          )}
        </Container>
      </Container>
    </div>
  );
};

export default Navbar;
