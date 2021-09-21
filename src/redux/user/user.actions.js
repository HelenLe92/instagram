import {userActionTypes }   from './user.type';

export const setCurrentUser = user => ({
	type: userActionTypes.SET_CURRENT_USER,
	payload: user
});
export const toogleDropDownHidden = () => ({
	type: userActionTypes.USER_TOOGLE
});