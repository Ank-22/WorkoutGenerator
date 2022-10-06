import React from "react";
import { Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const NavbarTabs = (props) => {
  const path = useLocation().pathname;
  const { text, link } = props;
  return (
    <div style={{margin:"0rem 2rem"}}>
      <Button color="success" disabled={path === link} variant="contained">
        <a style={{ textDecoration: "none" }} href={link}>
          <Typography sx={{ alignSelf: "center",color:"white" ,fontWeight:"100 ",fontSize:"1.5rem"}}>
            {text}
          </Typography>
        </a>
      </Button>
    </div>
  );
};

export default NavbarTabs;
