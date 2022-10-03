import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
// import Orders from '../pages/Orders'

const Routes = () => {
    return (
        <Switch>
            <Route path='/products' component={Products} />
            <Route path='/' exact component={Dashboard} />
            <Route path='/customers' component={Customers} />
            {/* <Route path='/orders' component={Orders} />  */}
        </Switch>
    )
}

export default Routes
