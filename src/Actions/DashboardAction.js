import { NotificationManager } from "react-notifications";
import CustomAxios from "./CustomAxios";

export const fetchTimeZone = () => {
  return (dispatch) => {
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
        if (err?.response?.status == 401){
          dispatch({ type: "LOGOUT" });
          NotificationManager.error("Something went wrong ,Please login again" );
        }
        else{
          console.log('Error'+err)
        }
      
      });
  };
};
