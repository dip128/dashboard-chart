import { NotificationManager } from "react-notifications";
import { payloadDataForBarChart, payloadDataForPieChart, payloadDataForTable } from "../DummyPayload";
import CustomAxios from "./CustomAxios";

export const fetchTimeZone = () => {
  return (dispatch) => {
    dispatch({type:'SET_LOADING_DASHBOARD',payload:true})
    CustomAxios.post("/getDateRange", {
      organization: "DemoTest",
      view: "Auction",
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "SET_DATE_RANGE",
          payload: res.data.result,
        });
      })
      .catch((err) => {
        console.log(err)
        if (err?.response?.status === 401){
          dispatch({ type: "LOGOUT" });
          NotificationManager.error("Something went wrong ,Please login again" );
        }
        else{
          console.log('Error'+err)
        }
      
      });
  };
};

export const fetchDashboardDataForTimeSpan = (startDate,endDate)=>{
  return (dispatch) =>{
    dispatch({type:'SET_LOADING_DASHBOARD',payload:true})
    const dateRange={
      startDate,
      endDate
    }

    const tablePayload = {
      ...payloadDataForTable,
      chartObject: {
        ...payloadDataForTable.chartObject,
        requestParam: {
          ...payloadDataForTable.chartObject.requestParam,
          dateRange,
        },
      },
    };
    const barchartPayload = {
      ...payloadDataForBarChart,
      chartObject: {
        ...payloadDataForBarChart.chartObject,
        requestParam: {
          ...payloadDataForBarChart.chartObject.requestParam,
          dateRange,
        },
      },
    };
    const piechartPayload = {
      ...payloadDataForPieChart,
      chartObject: {
        ...payloadDataForPieChart.chartObject,
        requestParam: {
          ...payloadDataForPieChart.chartObject.requestParam,
          dateRange,
        },
      },
    };
    const tablePromise = CustomAxios.post("/getData", tablePayload);
    const barPromise = CustomAxios.post("/getData", barchartPayload);
    const piePromise = CustomAxios.post("/getData", piechartPayload);

    Promise.all([tablePromise,barPromise,piePromise])
      .then((res) =>{
        console.log(res)
        // debugger
        res.map((item,index) => {
          if(item.data.status.statusCode!=='200') {
            NotificationManager.error( item.data.status.statusMessage);
          }
          return null;
        })
        dispatch({type:'SET_DASHBOARD_DATA',payload:res})
        
      })
      .catch((err) =>{
        if (err?.response?.status === 401){
          dispatch({ type: "LOGOUT" });
          NotificationManager.error("Something went wrong ,Please login again" );
        }
        else{
          console.log('Error'+err)
        }
      })
    
  }
}
