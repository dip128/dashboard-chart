
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({  children }) => {


    const token = localStorage.getItem('token') || sessionStorage.getItem('token')


    console.log(window.location.pathname)
    if (!token && window.location.pathname !== '/') {
      return <Navigate to="/" replace />;
    }
    else if(token && window.location.pathname === '/'){
         return <Navigate to="/dashboard" replace />;
    }
  
    return children;
  };

  export default ProtectedRoute