import React from "react";
import MenuComponent from "../MenuComponent/MenuComponent";
import { StyledBox } from "./DesktopMenuStyles";

const DesktopMenu = () => {
  return (
    <StyledBox flex={1} p={2}>
      <MenuComponent  />
    </StyledBox>
  );
};

export default DesktopMenu;
