import { userActionTypes }  from './user.type';

const INITIAL_STATE = {
	hidden : true,
	currentUser: null
}

const useReducer = (state = INITIAL_STATE, action) =>{
	switch(action.type){
		case userActionTypes.SET_CURRENT_USER:
			return{
				...state,
				currentUser: action.payload
			};
		case userActionTypes.USER_TOOGLE :
			return{
				...state,
				hidden: !state.hidden
			}
		default:
			return state;
	}
}

export default useReducer;