import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Login from "./components/Login/Login";
import Dashboard from './components/Dashboard/Dashboard'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App() {

  
  return (
    <BrowserRouter>
    <NotificationContainer/>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route  path="*" element={<Navigate to='/' />} />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
