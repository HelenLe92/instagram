import { createSelector } from 'reselect';

const DashboardSelect = state => state.dashboard;

export const DashboardSelectItem = createSelector (
	[DashboardSelect],
	dashboard => dashboard.listitems
)