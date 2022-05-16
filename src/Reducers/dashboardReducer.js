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
      
    case "SET_LOADING_DATA":{
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

    default:
      return state;
  }
};

export default dashboardReducer;
