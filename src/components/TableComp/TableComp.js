import { useSelect } from '@mui/base'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function TableComp() {

    const tableData = useSelector((state) => state.dashboardReducer.TableData)

    const[sortedtabledata,setsortedtabledata] = useState([])
    const[sortedavailable,setsortedavailable] = useState(false)
    const [funcSortedCalled,setFucntionsortedcalled] = useState(false)

    const [datasortedonimpression,setdatasortedimpression] = useState([])
    const[sortedavailableonimpression,setsortedavailableimpression] = useState(false)
    const [funcSortedCalledimpression,setFucntionsortedcalledimpression] = useState(false)

   

    const handleSortonpublisher = () =>{

      if(sortedavailable){
        const sortedData =  tableData.sort((a,b) =>{
          // console.log(a.publisherId);
          if(a.publisherId>b.publisherId) return 1;
         else if(a.publisherId<b.publisherId) return -1;
         else return 0 ;
        })
  
        console.log(sortedData);
        setsortedtabledata([...sortedData])
        setsortedavailable(false)
      }

      else {
        const sortedData =  tableData.sort((a,b) =>{
          // console.log(a.publisherId);
          if(a.publisherId>b.publisherId) return -1;
         else if(a.publisherId<b.publisherId) return +1;
         else return 0 ;
        })
  
        console.log(sortedData);
        setsortedtabledata([...sortedData])
        setsortedavailable(true)
      }
      setFucntionsortedcalled(true)

    }

    const handleSortonImpression = () =>{
      if(sortedavailableonimpression){
        const sortedData =  tableData.sort((a,b) =>{
          // console.log(a.publisherId);
          if(a.impressions_offered>b.impressions_offered) return 1;
         else if(a.impressions_offered<b.impressions_offered) return -1;
         else return 0 ;
        })
  
        console.log(sortedData);
        setsortedtabledata([...sortedData])
        setsortedavailableimpression(false)
      }

      else {
        const sortedData =  tableData.sort((a,b) =>{
          // console.log(a.publisherId);
          if(a.impressions_offered>b.impressions_offered) return -1;
         else if(a.impressions_offered<b.impressions_offered) return 1;
         else return 0 ;
        })
  
        console.log(sortedData);
        setsortedtabledata([...sortedData])
        setsortedavailableimpression(true)
      }
    }


  return (
    <div>
      
        { funcSortedCalled ? <TableContainer component={Paper} style={{textAlign:'left'}}>
        <Table aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell>Publisher Id
              <Button
               onClick={handleSortonpublisher}
              >{sortedavailable ? 
                <>↑</>
                
                : <>↓</>
            }
              </Button>

              </TableCell>
              
              <TableCell align="right">Impressions Offered
              
              <Button
               onClick={handleSortonImpression}
              >{sortedavailable ? 
                <>↑</>
                
                : <>↓</>
            }
              </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedtabledata &&
              sortedtabledata.map((row,index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{row.publisherId}</TableCell>
                  <TableCell align="right">{row.impressions_offered}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        </TableContainer>  :<TableContainer component={Paper} style={{textAlign:'left'}}>
        <Table aria-label="simple table">
          <TableHead style={{backgroundColor:'grey'}}>
            <TableRow>
              <TableCell>Publisher Id
              <Button
              variant='conatined'

               onClick={handleSortonpublisher}
              >{sortedavailable ? 
                <>↑</>
                
                : <>↓</>
            }
              </Button>
              </TableCell>
              <TableCell align="right">Impressions Offered
              <Button
               onClick={handleSortonImpression}
               variant='conatined'
              >{sortedavailable ? 
                <>↑</>
                
                : <>↓</>
            }
              </Button>
              </TableCell>
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

        </TableContainer>}
    </div>
  )
}

export default TableComp