import { combineReducers } from 'redux';

import useReducer from './user/user.reducer';
import dashboardReducer from './dashboard/dashboard.reducer';

const rootReducer = combineReducers({
	user: useReducer,
	dashboard: dashboardReducer
});

export default rootReducer;