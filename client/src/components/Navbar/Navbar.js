import React, { useState, useEffect, useCallback } from "react";
import { useLocation, Link } from "react-router-dom-v5-compat";
import { useHistory } from "react-router-dom";
import decode from "jwt-decode";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import "./styles.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  console.log(user);

  const logout = useCallback(() => {
    dispatch({ type: "LOGOUT" });

    history.push("/");
    setUser(null);
  }, [dispatch, history]);

  useEffect(() => {
    const token = user?.token;

    //jwt
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, logout, user?.token]);

  return (
    <AppBar
      className="appBar"
      position="static"
      style={{ backgroundColor: grey[100], boxShadow: "none" }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="black"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          color="black"
          className="topic"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Melody`Matrix
        </Typography>
      </Toolbar>
      {user ? (
        <div className="profile">
          <Avatar
            className="purple"
            alt={user.result.name}
            src={user.result.imageUrl}
          >
            {user.result.name.charAt(0)}
          </Avatar>
          <Typography className="userName" variant="h6">
            {user.result.name}
          </Typography>
          <Button
            className="logout"
            variant="contained"
            onClick={logout}
            sx={{ color: grey[800], backgroundColor: grey[300] }} // Set gray color here
          >
            Logout
          </Button>
        </div>
      ) : (
        <Button
          component={Link}
          to="/auth"
          variant="contained"
          sx={{ color: grey[100], backgroundColor: grey[600] }} // Set gray color here
        >
          Sign In
        </Button>
      )}
    </AppBar>
  );
};

export default Navbar;
