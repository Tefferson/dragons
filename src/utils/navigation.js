import history from '../router/history'

const push = (routeName, state) => {
	if (state === undefined) history.push(routeName.replace(':id', ''))
	else if (typeof state === 'object') history.push(routeName, state)
	else history.push(routeName.replace(':id', state))
}

const goBack = () => history.goBack()

const Navigation = { push, goBack }

export default Navigation
