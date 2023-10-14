import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";

// import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Auth.css";
import Input from "./Input";
import { useHistory } from "react-router-dom";

import Icon from "./icon";
import { useDispatch } from "react-redux";

import { signup, signin } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Auth() {
  const history = useHistory();

  const dispatch = useDispatch();
  const [ShowPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignup((prevMode) => !prevMode);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleSuccess = async (res) => {
    // console.log(res);
    const result = res?.profileObj; // cannot get property
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google sign in was unsuccessful! Please try again later.");
  };

  return (
    <Container className="paper1" component="main" maxWidth="xs">
      <Paper className="paper" elevation={3}>
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={ShowPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
            className="submit"
            style={{ marginTop: "30px", marginBottom: "15px" }}
          >
            {isSignup ? "Sign Up" : "Sign in"}
          </Button>

          {/* <GoogleLogin
            clientId="687297844715-ejnffadrvv1u41k6unn57sri3jvahake.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className="googleButton"
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          /> */}
          <Grid container justifyContent="flex-end">
            <Button onClick={switchMode}>
              {isSignup
                ? "Already have an account? Sign In"
                : "Still not Signed Up? Sign Up"}
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
