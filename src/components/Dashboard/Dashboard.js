import { Box, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTimeZone } from "../../Actions/DashboardAction";
import dashboardStyles from "./Dashboardstyles";

const useStyles = makeStyles(dashboardStyles);

function Dashboard() {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTimeZone());
  }, []);

  

  return (
    <Grid
      container
      justifyContent="center"
      item
      xs={12}
      alignItems="center"
      spacing={4}
    >
      <Grid container item justifyContent="center" alignItems="center" xs={12}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>

      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        xs={12}
      ></Grid>
    </Grid>
  );
}

export default Dashboard;
