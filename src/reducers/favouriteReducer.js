import { initialState } from "../store/index.js"


const favouriteReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FAVOURITE": 
			return {
					...state,
			favourites: [
				...state.favourites,
				 action.payload
			],
		}
		case "REMOVE_FAVOURITE": 
			return {
				...state,
			favourites: [
				
			...state.favourites.filter(element => element._id !== action.payload._id)
			],			
		}
		default:
		return state 	
	}
}

export default favouriteReducer





