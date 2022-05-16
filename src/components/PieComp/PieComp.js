import { Typography } from '@mui/material';
import React from 'react'
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

function PieComp() {
    const pieData = useSelector((state) => state.dashboardReducer.pieData);
    let labels = [];
    let percent = [];
    let backGroundColor = [];
    pieData?.forEach((el) => {
      labels.push(el.advertiserId);
      percent.push(el.CM001_percent);
      backGroundColor.push(
        'rgb(' +
          Math.floor(Math.random() * 256) +
          ',' +
          Math.floor(Math.random() * 256) +
          ',' +
          Math.floor(Math.random() * 256) +
          ')'
      );
    });
  
    const state = {
      labels,
      datasets: [
        {
          label: 'Pie Chart',
          backgroundColor: backGroundColor,
          data: percent
        }
      ]
    };
  
    return (
      <div style={{
          height:'55em',
          width:'65%',
          textAlign:'center'

      }}>
        <Typography>Pie Chart</Typography>
        <Pie
          data={state}
          options={{
            title: {
              display: true,
              text: 'Pie Chart',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right',
              labels: {
                fontSize: 15,
                fontColor: '#000'
              }
            }
          }}
        />
      </div>
    );
}

export default PieComp