import React from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Component/Home/Home';
import 'react-calendar/dist/Calendar.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Appointment from './Component/MainAppoint/Appointment/Appointment';
import Dashboard from './Component/Dashboard/Dashboard';
import AddDoctor from './Component/AddDoctor/AddDoctor';
function App() {
  return (
    <Router>
      
    <Switch>
          
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appointment">
           <Appointment />
          </Route>
          <Route path="/dashboard/appointment">
           <Dashboard/>
          </Route>
          <Route path="/addDoctor">
           <AddDoctor/>
          </Route>
          <Route path="*">
            <Home />
          </Route>
          
            
        </Switch>
      
    </Router>
  );
}

export default App;
