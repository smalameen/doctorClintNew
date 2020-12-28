import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Component/Home/Home';
import 'react-calendar/dist/Calendar.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Appointment from './Component/MainAppoint/Appointment/Appointment';
function App() {
  return (
    <Router>
      
    <Switch>
          
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appointment">
           <Appointment/>
          </Route>
          {/* <Route path="/AppointmentFrom">
           <AppointmentFrom/>
         </Route> */}
          <Route path="*">
            <Home />
          </Route>
          
            
        </Switch>
      
    </Router>
  );
}

export default App;
