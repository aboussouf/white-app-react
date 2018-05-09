// We only need to import the modules necessary for initial render

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import Dashboard from './Dashboard'

export default function createRoutes () {
  return (
    <div>
      <Switch>
        <Route component={CoreLayout}>
          <Route exact path='/' component={Dashboard} />
          <Route path='/Dashboard' component={Dashboard} />
          <Route path='*' component={Dashboard} />
        </Route>
      </Switch>
    </div>
  )
}
