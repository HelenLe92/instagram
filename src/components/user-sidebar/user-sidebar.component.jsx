import React from 'react'

import img2 from '../../assets/list-images/img_4.jpg';
import './user-sidebar.styles.scss';

const UserSidebar = () =>{
	return(
		<div className = 'user-sidebar'>
			<div><img src={img2} alt='avt'/></div>
			<div className='user-sidebar-infor'>
				<h4>Full Name</h4>
				<p>User name</p>
			</div>
			<div>
				<button type='button'>Switch</button>
			</div>
		</div>
	)
};

export default UserSidebar;