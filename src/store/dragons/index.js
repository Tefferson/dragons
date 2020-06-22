import Http from '../../utils/http'

const prefix = 'dragons/'

const Types = {
	SET_DRAGONS: prefix + 'SET_DRAGONS',
	SET_EDIT_ID: prefix + 'SET_EDIT_ID'
}

const setDragons = dragons => ({
	type: Types.SET_DRAGONS,
	payload: { dragons }
})

const setEditId = editId => ({
	type: Types.SET_EDIT_ID,
	payload: { editId }
})

const list = () => async dispatch => {
	const response = await Http.get('')
	const dragons = response.data.concat().sort((a, b) => a.name.localeCompare(b.name))
	dispatch(setDragons(dragons))
}

export const Creators = { list, setEditId }

const initialState = { dragons: [] }

export default function(state = initialState, action) {
	switch (action.type) {
		case Types.SET_DRAGONS:
			return { ...state, dragons: action.payload.dragons }
		case Types.SET_EDIT_ID:
			return { ...state, editId: action.payload.editId }
		default:
			return state
	}
}
