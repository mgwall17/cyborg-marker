import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CyverseLogo from "../../public/icons/CyverseLogo"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  Navigation: {
    backgroundColor: "#fffff",
  },
}));

export default function Nav() {
  const classes = useStyles();
    
  const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCloseAbout = () => {
      setAnchorEl(null);
    };
  
   const handleCloseLearn = () => {
     setAnchorEl(null);
   };
  const handleCloseProduct = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.Navigation} color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <MenuItem>
            <CyverseLogo />
          </MenuItem>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button
            aria-controls="about-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            About
          </Button>
          <Menu
            id="about-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseAbout}
          >
            <MenuItem onClick={handleCloseAbout}>Project</MenuItem>
            <MenuItem onClick={handleCloseAbout}>Collaborators</MenuItem>
            <MenuItem onClick={handleCloseAbout}>Personel</MenuItem>
          </Menu>
          <Button
            aria-controls="lear-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Learning
          </Button>
          <Menu
            id="learn-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseLearn}
          >
            <MenuItem onClick={handleCloseLearn}>Learning Center</MenuItem>
            <MenuItem onClick={handleCloseLearn}>Container Camp</MenuItem>
            <MenuItem onClick={handleCloseLearn}>FOSS</MenuItem>
            <MenuItem onClick={handleCloseLearn}>Webinars</MenuItem>
          </Menu>
          <Button
            aria-controls="product-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Products
          </Button>
          <Menu
            id="product-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseProduct}
          >
            <MenuItem onClick={handleCloseProduct}>View All</MenuItem>
            <MenuItem onClick={handleCloseProduct}>Atmosphere</MenuItem>
            <MenuItem onClick={handleCloseProduct}>
              Discovery Environment
            </MenuItem>
            <MenuItem onClick={handleCloseProduct}>
              BisQue Image Analysis
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
