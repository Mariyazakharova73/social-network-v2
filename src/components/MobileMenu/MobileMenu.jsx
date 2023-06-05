import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuComponent from "../MenuComponent/MenuComponent";
import { StyledBox } from "./MobileMenuStyles";

const MobileMenu = ({ toggleDrawer, open }) => {
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <StyledBox role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <MenuComponent/>
      </StyledBox>
    </Drawer>
  );
};

export default MobileMenu;
