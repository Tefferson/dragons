import Storage from '../../utils/storage'

const prefix = 'user/'

const Types = {
	SET_USER: prefix + 'SET_USER'
}

const setUser = user => {
	Storage.user.set(user)
	return {
		type: Types.SET_USER,
		payload: { user }
	}
}

const fakeUsers = [{ user: 'test', password: 'password' }]
const fakeLogin = credentials =>
	Promise.resolve(fakeUsers.find(item => JSON.stringify(item) === JSON.stringify(credentials)))

const login = ({ user, password }) => async dispatch => {
	const userData = await fakeLogin({ user, password })

	const success = userData !== undefined

	if (success) {
		dispatch(setUser(userData))
	}

	return success
}

export const Creators = { login }

const initialState = { user: Storage.user.get() }

export default function(state = initialState, action) {
	switch (action.type) {
		case Types.SET_USER:
			return { ...state, user: action.payload.user }
		default:
			return state
	}
}
