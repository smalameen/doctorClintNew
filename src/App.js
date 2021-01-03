import React, { useState } from 'react'
import './App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Component/Home/Home'
import 'react-calendar/dist/Calendar.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Appointment from './Component/MainAppoint/Appointment/Appointment'
import Dashboard from './Component/Dashboard/Dashboard'
import AddDoctor from './Component/AddDoctor/AddDoctor'
import { createContext } from 'react'
import Login from './Component/Login/Login'
import PrivateRoute from './Component/PrivateRoute/PrivateRoute'
import Testimonial from './Component/Home/Services/Testimonial/Testimonial'

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/auth">
            <Login />
          </Route>
          <Route path="/testimonial">
            <Testimonial />
          </Route>
          <PrivateRoute path="/dashboard/appointment">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addDoctor">
            <AddDoctor />
          </PrivateRoute>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App
