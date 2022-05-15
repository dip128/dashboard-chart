

const initialState ={
    loading:false,
    userInfo:null,
    errorMsg:''

}

const userReducer = (state=initialState,action) =>{
 switch (action.type) {

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      };

    case "STORE_USERINFO":
            return {
                ...state,
                loading:false,
                errorMsg:'',
                userInfo:action.payload
            };
    case "SET_ERRORMSG":{
        return {
            ...state,
            errorMsg:action.payload
        }
    }        
    case "LOGOUT" : {
      
      localStorage.removeItem('rememberMe')
      localStorage.removeItem('token')
      sessionStorage.removeItem('rememberMe')
      sessionStorage.removeItem('token')
      return initialState
    }
        
    default: return state


 }
}

export default userReducer;