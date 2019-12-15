import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ProfilePage } from '../profile/ProfilePage'
import { PageD, PageE, PageF } from '../pages'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

class LeftNavLayout extends React.Component {

    render(){
      const { match } = this.props
      return(
        <>
            <div className="row">
                <div className="leftnav col-md-3">
                    <div className="link row">
                        <a href="/profile/paged">Page D</a>
                    </div>
                    <div className="link row">
                        <a href="/profile/pagee">Page E</a>
                    </div>
                    <div className="link row">
                        <a href="/profile/pagef">Page F</a>
                    </div>
                    <div className="row">
                        <Button variant="warning" type="button">
                            <a href="/dashboard">Go to Dashboard</a>
                        </Button>
                    </div>
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route 
                            exact path={`${match.path}`}
                            render={(props) => <ProfilePage {...props} /> }/>
                        />
                        <Route path={`${match.path}/paged`} component={PageD} />
                        <Route path={`${match.path}/pagee`} component={PageE} />
                        <Route path={`${match.path}/pagef`} component={PageF} />
                    </Switch>
                </div>
            </div>
        </>
      )
   }
 }

 LeftNavLayout.propTypes = {
     match: PropTypes.any.isRequired
 }

export default LeftNavLayout