import React from 'react'
import store from './store'
import Router from './router'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
	<Provider store={store}>
		<Router />
		<ToastContainer toastClassName="toast-style" />
	</Provider>
)

export default App
