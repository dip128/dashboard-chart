import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTimeZone } from "../../Actions/DashboardAction";
import dashboardStyles from "./Dashboardstyles";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { addDays } from "date-fns";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
const useStyles = makeStyles(dashboardStyles);

function Dashboard() {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [dateRange,setdateRange] = useState({startDate:null,endDate:null})
  const [error,seterror] = useState({})

  const {minDate,maxDate} = useSelector((state) => state.dashboardReducer)

  useEffect(() => {
    dispatch(fetchTimeZone());
  }, []);

  React.useEffect(() => {
    if (minDate) {
      setdateRange({...dateRange,startDate:new Date(parseInt(minDate)),endDate: new Date(parseInt(maxDate))});
    }
  }, [minDate]);

  const handleChange = (value,id) =>{

    console.log(value)
    console.log(error);
    setdateRange({...dateRange,[id]:value})
    // debugger
    if(id==="startDate"){
      if(value>new Date(parseInt(maxDate)) || value < new Date(parseInt(minDate))){
        seterror({...error,startDate:'Please select valid Range'})
        // const{startDate,...rest}=error
      }
      else {
        const{startDate,...rest}=error
        seterror({...rest})
      }
    }
    if(id==="endDate"){
      if(value>new Date(parseInt(maxDate)) || value < new Date(parseInt(minDate))){
        seterror({...error,endDate:'Please select valid Range'})
        // const{startDate,...rest}=error
      }
      else {
        const{endDate,...rest}=error
        seterror({...rest})
      }
    }
    
  }

  
  const handleSubmit = () =>{
    console.log(dateRange.endDate.valueOf())
  }

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
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>

        <DesktopDatePicker
          id="startDate"
          label="Start Date"
          inputFormat="MM/dd/yyyy"
          value={dateRange.startDate}
          
          onChange={(value) => handleChange(value,"startDate")}
          renderInput={(params) => <TextField id="startDatetext" {...params}  />}
          minDate={new Date(parseInt(minDate))}
          maxDate={addDays(new Date(parseInt(maxDate)),-1)}
        />

        <Box> To </Box>

        <DesktopDatePicker
          id="endDate"
          label="End Date"
          inputFormat="MM/dd/yyyy"
          value={dateRange.endDate}
          onChange={(value) => handleChange(value,"endDate")}
          renderInput={(params) => <TextField id="endDatetext" {...params} />}
          maxDate={new Date(parseInt(maxDate))}
          minDate={addDays(new Date(parseInt(minDate)),1)}
        />

        </LocalizationProvider>
        

      </Grid>
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        xs={12}
      >
        <Button
          // disabled={Object.keys(error).length !==0 ? true : false}
          variant='contained'
          onClick={handleSubmit}
        >Submit</Button>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
