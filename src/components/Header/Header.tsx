import React, { FC } from "react";
import CustomizedSwitches from "../MaterialUISwitch/MaterialUISwitch";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { LOGIN_PATH, PROFILE_PATH } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import {
  StyledTypography,
  StyledTypographyMobile,
  StyledIconDesktop,
  StyledBoxMobile,
  StyledIconMobile,
} from "./HeaderStyles";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import userAvatar from "../../images/user.png";
import { PaletteMode } from "@mui/material";
import { selectIsAuth } from "./../../redux/selectors/authSelectors";
import { selectCurrentUser } from "./../../redux/selectors/profileSelectors";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/redux-store";
import { logoutThunkCreator } from "../../redux/actions/authActions";
import s from "./Header.module.css";
import { useTranslation } from "react-i18next";

interface IHeaderProps {
  toggleDrawer: (newOpen: boolean) => () => void;
  changeMode: () => void;
  mode: PaletteMode | undefined;
}

const Header: FC<IHeaderProps> = ({ toggleDrawer, changeMode, mode }) => {
  const { t } = useTranslation();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch: AppDispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const profile = useSelector(selectCurrentUser);

  const handleOpenUserMenu = (e: any) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    dispatch(logoutThunkCreator());
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StyledIconDesktop />
          <StyledTypography variant="h6" noWrap component="a" href="/">
            {t("logo")}
          </StyledTypography>
          <StyledBoxMobile>
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          </StyledBoxMobile>
          <StyledIconMobile />
          <StyledTypographyMobile variant="h5" noWrap component="a" href="/">
            {t("logo")}
          </StyledTypographyMobile>
          <Stack sx={{ flexGrow: 0 }} direction="row">
            <CustomizedSwitches mode={mode} changeMode={changeMode} />
            {!isAuth ? (
              <NavLink to={LOGIN_PATH} className={s.link}>
                {t("login")}
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
              <MenuItem onClick={handleCloseUserMenu}>
                <NavLink to={PROFILE_PATH} className={s.link}>
                  <Typography textAlign="center">{t("profile")}</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Button size="small" onClick={logout} endIcon={<LogoutIcon />}>
                  {t("logout")}
                </Button>
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
