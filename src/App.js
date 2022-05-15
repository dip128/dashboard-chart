import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Login from "./components/Login/Login";
function App() {
  return (
    <BrowserRouter>
    <NotificationContainer/>
      <div><Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
