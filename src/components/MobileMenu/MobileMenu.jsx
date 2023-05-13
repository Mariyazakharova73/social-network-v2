import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuComponent  from "../MenuComponent/MenuComponent";


const MobileMenu = ({ toggleDrawer, open }) => {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <MenuComponent/>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default MobileMenu;
