import React, {Fragment} from 'react';


import img1 from '../../assets/list-images/img_1.jpg';
import img2 from '../../assets/list-images/img_2.jpg';
import img3 from '../../assets/list-images/img_3.jpg';
import img4 from '../../assets/list-images/img_4.jpg';
import img5 from '../../assets/list-images/img_5.jpg';
import img6 from '../../assets/list-images/img_6.jpg';
import img7 from '../../assets/list-images/img_7.jpg';

import DashboardItem from '../dashboard-item/dashboard-item.component';
import UserStory from '../userstory/userstory.component';
import './dashboard.styles.scss';

const DASHBOARD_DATA = [
	{
		id: 1,
		avtuser : img1,
		username: 'Instagram',
		ownerDes : 'Contrary to popular belief, Lorem Ipsum is not simply random text',
		likes: 0,
		imgItem: [
			{
				id: 121,
				listImgItem: img1
			},
			{
				id: 22,
				listImgItem: img2
			},
		],
		userComment: [
			{
				id: 10,
				userCommentName: 'John Doe',
				userCommentDes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry'
			},
			{
				id: 11,
				userCommentName: 'John Doe 1',
				userCommentDes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
			},
		]
	}, 
	{
		id: 2,
		avtuser : img4,
		username: 'Instagram',
		ownerDes : 'Contrary to popular belief, Lorem Ipsum is not simply random text',
		likes: 0,
		imgItem: [
			{
				id: 13,
				listImgItem: img3
			},
			{
				id: 14,
				listImgItem: img4
			},
		],
		userComment: [
			{
				id: 10,
				userCommentName: 'John Doe',
				userCommentDes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
			},
			{
				id: 11,
				userCommentName: 'John Doe 1',
				userCommentDes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
			},
		]
	}, 
	{
		id: 3,
		avtuser : img6,
		username: 'Instagram',
		ownerDes : 'Contrary to popular belief, Lorem Ipsum is not simply random text',
		likes: 0,
		imgItem: [
			{
				id: 15,
				listImgItem: img5
			}
		],
		userComment: [
			{
				id: 16,
				userCommentName: 'John Doe',
				userCommentDes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
			},
		]
	}, 
	{
		id: 4,
		avtuser : img3,
		username: 'Instagram Instagram Instagram',
		ownerDes : 'Contrary to popular belief, Lorem Ipsum is not simply random text',
		likes: 0,
		imgItem: [
			{
				id: 17,
				listImgItem: img6
			},
			{
				id: 18,
				listImgItem: img7
			},
		],
		userComment: [
			{
				id: 10,
				userCommentName: 'John Doe',
				userCommentDes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
			},
			{
				id: 11,
				userCommentName: 'John Doe 1',
				userCommentDes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
			},
		]
	}, 
	
]

const Dasboard = () => {
	return(
		<Fragment>
			<UserStory />
			<div className='dashboard_box'>
				{DASHBOARD_DATA.map((listitem => 
					<DashboardItem
					key = {listitem.id}
					id = {listitem.id}
					ownerDes = {listitem.ownerDes} 
					imgItem = {listitem.imgItem}
					username = {listitem.username}
					userComment = {listitem.userComment}
					avtuser = {listitem.avtuser}
					likes = {listitem.likes}
					/>
				))}
			</div>
		</Fragment>
		
	)
};

export default Dasboard;