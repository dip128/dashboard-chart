const initialState = {
  loading: false,
  minDate: null,
  maxDate: null,
  dateRange: [],
  TableData: [],
  pieData: [],
  barData: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case "SET_LOADING_DASHBOARD":{
        return {
          ...state,
          loading: action.payload,
        }
    }
    case "SET_DATE_RANGE": {
      return {
        ...state,
        loading: false,
        minDate: action.payload.startDate,
        maxDate: action.payload.endDate,
      };
    }
    case "SET_DASHBOARD_DATA":{
      return {
        ...state,
        loading: false,
        TableData: action.payload[0].data.result.data,
        barData: action.payload[1].data.result.data,
        pieData: action.payload[2].data.result.data,
      };
}
    default:
      return state;
  }
};

export default dashboardReducer;
