import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Divider,
  Button,
} from "@material-ui/core";
import { Menu, ChevronLeft } from "@material-ui/icons";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  links: {
    color: "black",
    textDecoration: "none",
  },
}));

export default function ButtonAppBar() {
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            The Rick and Morty API
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
        <Divider />
        <Button color="inherit" onClick={handleDrawerClose}>
          <Link className={classes.links} to="/">
            Characters
          </Link>
        </Button>
        <Button color="inherit" onClick={handleDrawerClose}>
          <Link className={classes.links} to="/locations">
            Locations
          </Link>
        </Button>
        <Button color="inherit" onClick={handleDrawerClose}>
          <Link className={classes.links} to="/episodes">
            Episodes
          </Link>
        </Button>
      </Drawer>
    </div>
  );
}
