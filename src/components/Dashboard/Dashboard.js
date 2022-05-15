
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchTimeZone } from '../../Actions/DashboardAction';
import dashboardStyles from './Dashboardstyles';

const useStyles = makeStyles(dashboardStyles)

function Dashboard() {

  const classes = useStyles();
  const dispatch = useDispatch();
  let navigate = useNavigate();



  useEffect(() =>{
    dispatch(fetchTimeZone())
  },[])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard