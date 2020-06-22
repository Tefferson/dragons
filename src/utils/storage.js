const get = key => () => JSON.parse(localStorage.getItem(key))
const set = key => value => localStorage.setItem(key, JSON.stringify(value))
const remove = key => () => localStorage.removeItem(key)

const KEYS = { user: 'user' }

const Storage = {
	user: {
		get: get(KEYS.user),
		set: set(KEYS.user),
		remove: remove(KEYS.user)
	}
}

export default Storage
