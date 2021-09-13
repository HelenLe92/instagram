import React from 'react';
import Slider from 'react-slick';

import img from '../../assets/list-images/img_5.jpg';
import img1 from '../../assets/list-images/img_6.jpg';
import img2 from '../../assets/list-images/img_4.jpg';
import UserStoryItems from '../userstory-items/userstory-items.component';

import './userstory.styles.scss';

const USERSTORY_DATA = [
	{
		id: 1 ,
		userImg: img,
		usname: 'Poxi_fashion'
	},
	{
		id: 2,
		userImg: img1,
		usname: 'Instagram'
	},
	{
		id: 3,
		userImg: img2,
		usname: 'Facebook'
	},
	{
		id: 4 ,
		userImg: img,
		usname: 'Linkdin'
	},
	{
		id: 5,
		userImg: img2,
		usname: 'Google'
	},
	{
		id: 6 ,
		userImg: img1,
		usname: 'Napas'
	},
	{
		id: 7,
		userImg: img,
		usname: 'Instagram'
	},
	{
		id: 8,
		userImg: img1,
		usname: 'Instagram'
	},
	{
		id: 9,
		userImg: img2,
		usname: 'Instagram'
	},
	{
		id:10 ,
		userImg: img,
		usname: 'Instagram'
	},
	{
		id:11 ,
		userImg: img1,
		usname: 'Instagram'
	},
	{
		id: 12 ,
		userImg: img2,
		usname: 'Instagram'
	},
]

const UserStory = () => {
	const settings = {
		infinite: true,
		arrows: true,
		speed: 1000,
		slidesToShow: 7,
		slidesToScroll: 1
	  };
	return(
		<div className='user-story'>
			 <Slider {...settings}>
				 {USERSTORY_DATA.map((item => 
					<UserStoryItems 
					id = {item.id}
					key = {item.id}
					userImg = {item.userImg}
					username = {item.usname}
					/>
				))}
			 </Slider>
		</div>
	);
};

export default UserStory;