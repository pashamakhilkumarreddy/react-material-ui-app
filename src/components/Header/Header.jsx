import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  AppBar,
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  Toolbar,
  Typography,
  Switch,
} from "@material-ui/core";

/**
 *
 * @param {*} props
 * @returns {ReactElement} <header>
 */
const Header = ({ classes, isLightTheme, updateTheme }) => {
  const [anchorEl, setanchorEl] = useState(null);

  const handleClick = (e) => {
    setanchorEl(e.currentTarget);
  };

  const handleOnChange = (e) => {
    updateTheme();
  };
  return (
    <AppBar component="header" position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography>Home</Typography>

        <FormGroup row>
          <FormControlLabel control={<></>} label="Dark" />
          <FormControlLabel
            control={
              <Switch
                checked={isLightTheme}
                name="theme"
                onChange={handleOnChange}
              />
            }
            label="Light"
          />
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.any,
  isLightTheme: PropTypes.bool,
};

const styles = {
  root: {
    position: "sticky !important",
  },
  toolbar: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
  },
};

export default withStyles(styles)(Header);
