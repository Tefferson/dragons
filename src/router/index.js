import React from 'react'
import history from './history'
import List from '../screens/list'
import Login from '../screens/login'
import Details from '../screens/details'
import AppRoute from './AppRoute'
import routesNames from './routes-names'
import Registration from '../screens/registration'
import { Redirect, Router as ReactRouter, Switch } from 'react-router'

const Router = () => (
	<ReactRouter history={history}>
		<Switch>
			<AppRoute unrestricted exact path={routesNames.login} component={Login} />
			<AppRoute path={routesNames.list} component={List} />
			<AppRoute path={routesNames.details} component={Details} />
			<AppRoute path={routesNames.registration} component={Registration} />
			<Redirect exact to={routesNames.login} />
		</Switch>
	</ReactRouter>
)

export default Router
