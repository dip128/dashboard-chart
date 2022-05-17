import { CircularProgress } from '@mui/material';
import React from 'react'

function Loader({text}) {
    
    return (
      <div style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          width:'100%',
          height:'25em',
          flexDirection:'column'

      }}>
        <h3>{text}</h3>
        <CircularProgress disableShrink />
      </div>
    );
}

export default Loader