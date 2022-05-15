import axios from "axios"
import { NotificationManager } from "react-notifications"



export  const loginAction = ({email, password, rememberMe}) =>{


    return (dispatch) =>{
            dispatch({type:"SET_LOADING",payload:true})
            axios.post("https://sigviewauth.sigmoid.io/signIn",{
                email,
                password,
                rememberMe,
              })
              .then((res) =>{
                  dispatch({type:"STORE_USERINFO",payload:res.data})
                  NotificationManager.success( 'Welcome to Sigmoid',`Hello`);
                  if(rememberMe) {
                      localStorage.setItem('rememberMe',rememberMe)
                      localStorage.setItem('token',res.data.token)
                  }
                  else{
                      sessionStorage.setItem('rememberMe',rememberMe)
                      sessionStorage.setItem('token',res.data.token)
                  }
                  dispatch({type:"REDIRECT" ,payload:"/dashboard"});

              })
              .catch((err) =>{
                  console.log(err.response.data.statusMessage)
                  dispatch({type:'SET_ERRORMSG',payload:err.response.data.statusMessage})
                  NotificationManager.error(err.response.data.statusMessage );
              })
    }
}