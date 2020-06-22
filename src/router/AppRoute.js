import React, { useState, useEffect } from 'react'
import store from '../store'
import Navigation from '../utils/navigation'
import routesNames from './routes-names'
import { Route } from 'react-router'

const AppRoute = ({ unrestricted, ...props }) => {
	const [ready, setReady] = useState(false)

	useEffect(() => {
		const { user } = store.getState().user

		if (!unrestricted && !user) {
			Navigation.push(routesNames.login)
			return
		}

		setReady(true)
	}, [])

	return ready ? <Route {...props} /> : null
}

export default AppRoute
