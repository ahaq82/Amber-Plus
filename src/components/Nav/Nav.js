import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const useStyles = makeStyles((theme) => ({
  top: {},
  root: {
    "& .MuiBottomNavigation-root": {
      bottom: 0,
      left: 0,
      position: "fixed",
      width: "100%",
      backgroundColor: theme.palette.background.default,
      zIndex: 1200,
    },
    "& .MuiBottomNavigationAction-root": {
      minWidth: 50,
    },
  },
}));

const Nav = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)", {
    noSsr: true,
  });

  return (
    <div className={classes.root}>
      <TopNav className={classes.top} />
      {isMobile && <BottomNav />}
    </div>
  );
};

export default Nav;
