import * as React from "react";
import CustomizedSwitches from "./../MaterialUISwitch/MaterialUISwitch";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Stack from "@mui/material/Stack";
import { menuItems } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import { StyledTypography, StyledTypographyMobile } from "./HeaderStyles";
import { LOGIN_PATH } from "../../utils/constants";

const Header = ({ toggleDrawer, changeMode, mode, isAuth }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AcUnitIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <StyledTypography variant="h6" noWrap component="a" href="/">
            LOGO
          </StyledTypography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AcUnitIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <StyledTypographyMobile variant="h5" noWrap component="a" href="/">
            LOGO
          </StyledTypographyMobile>
          <Stack sx={{ flexGrow: 0 }} direction="row">
            <CustomizedSwitches mode={mode} changeMode={changeMode} />
            {!isAuth ? (
              <NavLink
                to={LOGIN_PATH}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                LOGIN
              </NavLink>
            ) : (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Mariya" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.name} onClick={handleCloseUserMenu}>
                  <NavLink to={item.link} style={{ textDecoration: "none", color: "inherit" }}>
                    <Typography textAlign="center">{item.name}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
