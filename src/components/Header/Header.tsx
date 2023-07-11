import React, { FC } from "react";
import CustomizedSwitches from "../MaterialUISwitch/MaterialUISwitch";
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
import ForestTwoToneIcon from "@mui/icons-material/ForestTwoTone";
import Stack from "@mui/material/Stack";
import { menuItems } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import { StyledTypography, StyledTypographyMobile } from "./HeaderStyles";
import { LOGIN_PATH } from "../../utils/constants";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import userAvatar from "../../images/user.png";
import { IProfile } from "./../../types/types";
import { PaletteMode } from "@mui/material";

interface IHeaderProps {
  toggleDrawer: (newOpen: boolean) => () => void;
  changeMode: () => void;
  mode: PaletteMode | undefined;
  isAuth: boolean;
  logout: () => void;
  profile: IProfile | null;
}

const Header: FC<IHeaderProps> = ({ toggleDrawer, changeMode, mode, isAuth, logout, profile }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (e: any) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ForestTwoToneIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <StyledTypography variant="h6" noWrap component="a" href="/">
            logo
          </StyledTypography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <ForestTwoToneIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <StyledTypographyMobile variant="h5" noWrap component="a" href="/">
            logo
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
                  <Avatar alt="Mariya" src={profile?.photos?.large || userAvatar} />
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
                  {item.name === "LogOut" ? (
                    <Button size="small" onClick={logout} endIcon={<LogoutIcon />}>
                      LogOut
                    </Button>
                  ) : (
                    <NavLink to={item.link} style={{ textDecoration: "none", color: "inherit" }}>
                      <Typography textAlign="center">{item.name}</Typography>
                    </NavLink>
                  )}
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
