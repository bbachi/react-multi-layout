import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { LoginPage } from '../login/Login'

class LoginLayout extends React.Component {

    render(){
      const { match } = this.props
      return(
        <>
            <div className="login">
                <Switch>
                    <Route 
                        exact path={`${match.path}`}
                        render={(props) => <LoginPage {...props} /> }/>
                    />
                </Switch>
            </div>
        </>
      )
   }

 }

 LoginLayout.propTypes = {
     match: PropTypes.any.isRequired
 }

export default LoginLayout