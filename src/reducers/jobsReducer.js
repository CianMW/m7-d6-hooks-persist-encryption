import { initialState } from "../store/index.js"


const jobsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_JOBS": 
			return {
				...state,
				content: [...action.payload]
				}		
		case "SET_ERROR": 
			return {
				data: {
					...state.data,
			favourites: [
				...state.data.favourites.filter(element => element._id === action.payload._id)
			]
				}
			
		}
		case "TOGGLE_LOADER": 
			return {
				...state,
				loading: action.payload
				}		
		default:
			return state 	
	}
}

export default jobsReducer





