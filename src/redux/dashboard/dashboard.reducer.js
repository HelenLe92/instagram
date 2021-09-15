import DASHBOARD_DATA from './dashboard.data';

const INTIAL_STATE = {
	listitems: DASHBOARD_DATA
}

const dashboardReducer = (state = INTIAL_STATE, action ) =>{
	switch(action.type){
		default :
		return state;
	}
}

export default dashboardReducer;