import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import LoginLayout from './layouts/LoginLayout'
import LeftNavLayout from './layouts/LeftNavLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends React.Component {

    render(){

      return(
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" render={(props) => <LoginLayout {...props} /> } />
              <Route path='/dashboard' render={(props) => <DashboardLayout {...props} /> } />
              <Route path='/profile' render={(props) => <LeftNavLayout {...props} /> } />
            </Switch>
          </BrowserRouter>
        </div>
      )
   }

 }

export default App