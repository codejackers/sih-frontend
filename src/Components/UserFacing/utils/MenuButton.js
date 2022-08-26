import {
  ArrowBack,
  ArrowForward,
  Home,
  Menu,
  Info,
  Headphones,
  Phone,
  PriorityHigh,
  School,
  Search,
  ExitToApp,
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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
      link: "/",
    },
    {
      name: "HEI login",
      icon: <School />,
      link: "/hei/login",
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
      name: "Report",
      icon: <PriorityHigh />,
      link: "/report",
    },
    {
      name: "About Us",
      icon: <Info />,
      link: "/about",
    },
  ];

  const [open, setOpen] = useState(false);
  const sm = useDesktop();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <IconButton
        sx={{
          marginLeft: "auto",
          color: "white",
          
        }}
        aria-label="menu"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Menu fontSize="large" />
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
        <Box display={"flex"} flexDirection="column" height={"100vh"}>
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
                          navigate(link.link);
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
              {auth.Login.Verified && (
                <>
                  <ListItemButton
                    onClick={() => {
                      window.location.reload(false);
                    }}
                    sx={{
                      color: "#545454",
                      fontSize: "44px",
                      marginLeft: "7px",
                      mr: "10px",
                    }}
                  >
                    <ExitToApp sx={{ fontSize: "46px" }}></ExitToApp>
                    <ListItemText
                      sx={{
                        color: "black",
                        marginLeft: "5px",
                      }}
                      primary={
                        <span style={{ fontSize: "30px" }}>
                          <p>Logout</p>
                        </span>
                      }
                    />
                  </ListItemButton>
                </>
              )}
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
export default MenuButton;

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
