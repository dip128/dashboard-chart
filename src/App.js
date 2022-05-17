import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import Login from "./components/Login/Login";
import Dashboard from './components/Dashboard/Dashboard'
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
function App() {

  
  return (
    <BrowserRouter>
    <NotificationContainer/>
      <Routes>
        <Route exact path="/" element={<ProtectedRoute><Login /></ProtectedRoute>} />
        <Route exact path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route  path="*" element={<Navigate to='/dashboard' />} />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
