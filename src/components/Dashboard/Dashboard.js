import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchDashboardDataForTimeSpan,
  fetchTimeZone,
} from "../../Actions/DashboardAction";
import dashboardStyles from "./Dashboardstyles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  DatePicker,
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { addDays } from "date-fns";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import TableComp from "../TableComp/TableComp";
import BarComp from "../BarComp/BarComp";
import BarData from "../BarComp/BarComp";
import PieComp from "../PieComp/PieComp";
import { NotificationManager } from "react-notifications";
const useStyles = makeStyles(dashboardStyles);

function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentval, setcurrentVal] = useState("");
  const [disabledbutton, setdisablebutton] = useState(false);
  const [dateRange, setdateRange] = useState({
    startDate: null,
    endDate: null,
  });
  

  const { minDate, maxDate, TableData, barData, pieData, loading } =
    useSelector((state) => state.dashboardReducer);

  useEffect(() => {
    dispatch(fetchTimeZone());
  }, []);

  React.useEffect(() => {
    if (minDate) {
      setdateRange({
        ...dateRange,
        startDate: new Date(parseInt(minDate)),
        endDate: new Date(parseInt(maxDate)),
      });
    }
  }, [minDate]);

  const handleChange = (value, id) => {
    console.log(value);
    
    setdateRange({ ...dateRange, [id]: value });

  };

  const handleShow = (val) => {
    setcurrentVal(val);
  };

  const handleSubmit = () => {
    console.log(dateRange.endDate.valueOf().toString());
    dispatch(
      fetchDashboardDataForTimeSpan(
        dateRange.startDate.valueOf().toString(),
        dateRange.endDate.valueOf().toString()
      )
    );
  };

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

      <Grid container item justifyContent="center" alignItems="center" xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            id="startDate"
            label="Start Date"
            inputFormat="dd/MM/yyyy"
            value={dateRange.startDate}
            onChange={(value) => handleChange(value, "startDate")}
            onError={(reason, value) => {
              if (reason) {
                setdisablebutton(true);
                NotificationManager.error("Please Choose a date in between " + new Date(parseInt(minDate)).toDateString() + " and "+new Date(parseInt(maxDate)).toDateString());
              } else {
                setdisablebutton(false);
              }
              return console.log("error");
            }}
            renderInput={(params) => (
              <TextField id="startDatetext" {...params} />
            )}
            minDate={new Date(parseInt(minDate))}
            maxDate={addDays(new Date(parseInt(maxDate)), -1)}
           
          />

          <Box> To </Box>

          <DesktopDatePicker
            id="endDate"
            label="End Date"
            inputFormat="dd/MM/yyyy"
            value={dateRange.endDate}
            onChange={(value) => handleChange(value, "endDate")}
            onError={(reason, value) => {
              if (reason) {
                setdisablebutton(true);
                NotificationManager.error("Please Choose a date in between " + new Date(parseInt(minDate)).toDateString() + " and "+new Date(parseInt(maxDate)).toDateString());
              } else {
                setdisablebutton(false);
              }
              return console.log("error");
            }}
            renderInput={(params) => <TextField id="endDatetext" {...params} />}
            maxDate={new Date(parseInt(maxDate))}
            minDate={addDays(new Date(parseInt(minDate)), 1)}
          />
        </LocalizationProvider>
      </Grid>
      <Grid container item justifyContent="center" alignItems="center" xs={12}>
       <Button
          disabled={disabledbutton}
          variant="contained"
          onClick={handleSubmit}
        >
          View Dashboard
        </Button>
      </Grid>
      {!loading && (
        <>
          <Grid
            container
            item
            justifyContent="center"
            alignItems="center"
            xs={12}
            spacing={2}
          >
            {TableData.length > 0 && (
              <Button
                variant="contained"
                onClick={() => handleShow("table")}
                style={{ margin: "2em" }}
              >
                Show Table
              </Button>
            )}
            {barData.length > 0 && (
              <Button
                variant="contained"
                onClick={() => handleShow("bar")}
                style={{ margin: "2em" }}
              >
                Show Bar Chart
              </Button>
            )}
            {pieData.length > 0 && (
              <Button
                variant="contained"
                onClick={() => handleShow("pie")}
                style={{ margin: "2em" }}
              >
                Show Pie Chart
              </Button>
            )}
          </Grid>

          <Grid
            container
            item
            justifyContent="center"
            alignItems="center"
            xs={12}
            spacing={2}
          >
            {currentval === "table" && <TableComp />}
            {currentval === "bar" && <BarComp />}
            {currentval === "pie" && <PieComp />}
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default Dashboard;
