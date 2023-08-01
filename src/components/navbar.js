import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Foto from "../images/foto2.jpg";
import MyDial from "./mydial";
import { Switch } from "@mui/material";

const pages = ["Home", "About", "Contact", "Projects"];

function ResponsiveAppBar({ check, change }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setIsDrawerOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box
                p={2}
                width="200px"
                textAlign="center"
                role="presentation"
                onClick={() => setIsDrawerOpen(false)}
              >
                <Typography
                  variant="h4"
                  textAlign="center"
                  component="div"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    textDecoration: "none",
                    letterSpacing: ".2rem",
                    color: "grey",
                  }}
                >
                  Menu
                </Typography>

                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: "none", color: "grey" }}
                        to={`/${page}`}
                      >
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>

          <Typography
            variant="h8"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/${page}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
            <Typography
              variant="h8"
              align="center"
              noWrap
              component="a"
              sx={{
                mr: 1,
                flexGrow: 1,
                mt: "22px",
                fontFamily: "monospace",
                fontWeight: 300,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
          </Box>
          <MyDial />

          <FormControlLabel
            control={
              <Switch color="default" onChange={change} checked={check} />
            }
            label="Dark"
          />

          <Avatar alt="Remy Sharp" src={Foto} sx={{ width: 70, height: 70 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
