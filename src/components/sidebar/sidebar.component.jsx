import React from 'react';

import './sidebar.styles.scss';

import UserSidebar from '../user-sidebar/user-sidebar.component';
import Suggetions from '../suggestion/suggestion.component'
import FooterSideBar from '../footer-sidebar/footer-sidebar.component';

const SideBar = () => {
	return(
		<div className='sidebar'>
			<div className='sidebar-fixed'>
			<UserSidebar/>
			<Suggetions/>
			<FooterSideBar/>
			</div>
			
		</div>
	)
};

export default SideBar;