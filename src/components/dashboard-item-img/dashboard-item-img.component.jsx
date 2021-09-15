import React from 'react';
import './dashboard-item-img.style.scss'

const DashboardItemImage = ({listimg}) => {
	const {listImgItem} = listimg
	return(
		<div className='block-item-img' style={{ 
			backgroundImage: `url(${listImgItem})` 
		}}>
		<img src = {listImgItem} alt='avatar of user' />
		</div>
	)
};

export default DashboardItemImage;