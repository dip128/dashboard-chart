import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../Actions/LoginActions";
import loginStyles from "./LoginStyles";

const useStyles = makeStyles(loginStyles);

function Login() {
  const [useinfo, setuserInfo] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const routeState = useSelector((state) => state.routeReducer);

  useEffect(() => {
    if (routeState.redirectTo) {
      navigate(routeState.redirectTo);
      dispatch({ type: "REDIRECT", payload: null });
    }
  }, [routeState.redirectTo]);

  const handleChange = (event) => {
    const { id, value } = event.target;

    setuserInfo({ ...useinfo, [id]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Click");
    console.log(useinfo);
    dispatch(loginAction(useinfo));
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ marginTop: "20vh" }}>
      <Grid
        container
        justifyContent="center"
        item
        xs={12}
        alignItems="center"
        spacing={4}
      >
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
          <Typography variant="h4">Let's get you verified!</Typography>
        </Grid>

        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
          <TextField
            id="email"
            value={useinfo.email}
            label="Enter Email"
            onChange={(e) => handleChange(e)}
            type="text"
            variant="outlined"
            className={classes.inputField}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
          <TextField
            id="password"
            value={useinfo.password}
            label="Enter password"
            onChange={(e) => handleChange(e)}
            type="password"
            variant="outlined"
            className={classes.inputField}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
          style={{ paddingTop: "8px" }}
        >
          <FormControlLabel
            value={useinfo.rememberMe}
            control={
              <Checkbox
                onChange={(e) => {
                  setuserInfo({ ...useinfo, rememberMe: !useinfo.rememberMe });
                }}
              />
            }
            label="Remember Me"
            labelPlacement="end"
          />
        </Grid>

        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
          style={{ paddingTop: "8px" }}
        >
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.inputField}
            disabled={
              useinfo.email !== "" && useinfo.password !== "" ? false : true
            }
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Login;
