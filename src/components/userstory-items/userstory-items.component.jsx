import React from 'react';

import './userstory-items.styles.scss'

const UserStoryItems = (props) => {
	const {userImg, username} = props;
	return(
		<div>
			<div className='backg-ing'>
				<img src={userImg} alt='userstory'/>
			</div>
			<p>{username}</p>
		</div>
	)
}

export default UserStoryItems;