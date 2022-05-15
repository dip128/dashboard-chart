
   
   const initialState = {
     redirectTo:null,
   };
   
   const routeReducer = (state = initialState, action) => {
     switch (action.type) {
         case "REDIRECT":
             return {...state,redirectTo: action.payload };
       default:
         return state;
     }
   };
   
   export default routeReducer;