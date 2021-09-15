import React, {Fragment} from 'react';
import {connect } from 'react-redux';


import DashboardItem from '../dashboard-item/dashboard-item.component';
import UserStory from '../userstory/userstory.component';
import './dashboard.styles.scss';

import { createStructuredSelector } from 'reselect';

import { DashboardSelectItem } from '../../redux/dashboard/dashboard.selector';


const Dasboard = ({listitems}) => {
	return(
		<Fragment>
			<UserStory />
			<div className='dashboard_box'>
				{listitems.map(({ id, ...otherListitemProps }) => (
					<DashboardItem key = {id} {...otherListitemProps} />
				))}
			</div>
		</Fragment>
		
	)
};

const mapStateToProps = createStructuredSelector({
	listitems: DashboardSelectItem
})
export default connect(mapStateToProps) (Dasboard);