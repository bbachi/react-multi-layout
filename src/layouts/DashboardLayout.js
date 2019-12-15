import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { DashboardPage } from '../dashboard/Dashboard'
import { Header } from '../header/Header'
import { PageA, PageB, PageC } from '../pages'
import Footer from '../footer/Footer'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

class DashboardLayout extends React.Component {

    render(){
      const { match } = this.props
      return(
        <>
            <div className="">
                <Header appTitle="React Multi Layout"/>
                <Switch>
                    <Route 
                        exact path={`${match.path}`}
                        render={(props) => <DashboardPage {...props} /> }/>
                    />
                    <Route path={`${match.path}/pagea`} component={PageA} />
                    <Route path={`${match.path}/pageb`} component={PageB} />
                    <Route path={`${match.path}/pagec`} component={PageC} />
                </Switch>
                <Footer />
            </div>
        </>
      )
   }
 }

 DashboardLayout.propTypes = {
     match: PropTypes.any.isRequired
 }

export default DashboardLayout