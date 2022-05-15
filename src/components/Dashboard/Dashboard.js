
import { makeStyles } from '@mui/styles';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dashboardStyles from './Dashboardstyles';

const useStyles = makeStyles(dashboardStyles)

function Dashboard() {

  const classes = useStyles();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard