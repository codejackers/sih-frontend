import {
  ArrowBack,
  ArrowForward,
  Home,
  Menu,
  Headphones,
  Phone,
  PriorityHigh,
  School,
  Search,
  Close,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { cloneElement, useState } from "react";

import { lensTheme, useDesktop } from "./theme";
import Navbar from "./Navbar";
// import takeAssessment from "../../../assets/images/4325452 2.png";
// import getReport from "../../../assets/images/530085 3.png";

export function MenuButton() {
  const navLinks = [
    {
      name: "Home",
      icon: <Home />,
      link: "/",
    },
    {
      name: "Search",
      icon: <Search />,
      link: "/why-lens",
    },
    {
      name: "HEI login",
      icon: <School />,
      link: "/how-it-works",
    },
    // {
    //   name: "Take Assessments",
    //   icon: <img src={takeAssessment} alt="" />,
    //   link: undefined,
    // },
    // {
    //   name: "My Reports",
    //   icon: <img src={getReport} alt="" />,
    //   link: undefined,
    // },
    {
      name: "Contact Us",
      icon: <Phone />,
      link: "/contact-us",
    },
    {
      name: "About Us",
      icon: <PriorityHigh />,
      link: "/contact-us",
    },
  ];

  const [open, setOpen] = useState(false);
  const sm = useDesktop();

  return (
    <>
      <IconButton
        sx={{
          marginLeft: "auto",
        }}
        aria-label="menu"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor={sm ? "right" : "bottom"}
        sx={{
          height: "100vh",
          "& .MuiDrawer-paper": {
            height: "100vh",
            boxSizing: "border-box",
            sm: {
              minWidth: 500,
            },
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          display={"flex"}
          flexDirection="column"
          height={"100vh"}
          backgroundColor={"#CAF0F8"}
        >
          <Navbar color="#CAF0F8" hidden={true} />
          <Box>
            <List>
              {navLinks.map((link) => {
                const Icon = cloneElement(link.icon, {
                  fontSize: "large",
                  sx: {
                    color: "#545454",
                    fontSize: "44px",
                    marginLeft: "7px",
                    mr: "10px",
                  },
                });
                return (
                  <>
                    <ListItemButton
                      sx={{
                        height: 70,
                      }}
                      disabled={link.link === undefined}
                      onClick={() => {
                        if (link.link) {
                          //   history.push(link.link);
                          setOpen(false);
                        }
                      }}
                    >
                      <ListItemIcon sx={{ fontSize: "46px" }}>
                        {Icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <span style={{ fontSize: "30px" }}>{link.name}</span>
                        }
                      />
                    </ListItemButton>
                  </>
                );
              })}
            </List>
          </Box>
          <Box
            sx={{
              marginTop: "auto",
              marginLeft: "auto",
              p: 3,
            }}
          >
            <IconButton
              aria-label="close-drawer"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Close sx={{ fontSize: "46px" }} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export function NavBar() {
  //   const history = useHistory();
  return (
    <Box
      sx={{
        display: "flex",
        p: 3,
      }}
    >
      <IconButton
        onClick={() => {
          //   history.replace("/");
        }}
      >
        <ArrowBack />
      </IconButton>
      <MenuButton />
    </Box>
  );
}
