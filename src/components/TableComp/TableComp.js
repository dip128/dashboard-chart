import { useSelect } from '@mui/base'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function TableComp() {

    const tableData = useSelector((state) => state.dashboardReducer.TableData)

  return (
    <div>
        <TableContainer component={Paper} style={{textAlign:'left'}}>
        <Table aria-label="simple table">
          <TableHead style={{backgroundColor:'grey'}}>
            <TableRow>
              <TableCell>Publisher Id</TableCell>
              <TableCell align="right">Impressions Offered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData &&
              tableData.map((row,index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{row.publisherId}</TableCell>
                  <TableCell align="right">{row.impressions_offered}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        </TableContainer>
    </div>
  )
}

export default TableComp