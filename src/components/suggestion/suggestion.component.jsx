import React from 'react';

import img1 from '../../assets/list-images/img_1.jpg';
import img2 from '../../assets/list-images/img_2.jpg';
import img3 from '../../assets/list-images/img_3.jpg';

import SuggestionList from '../suggestion-list/suggestion-list.component';
import './suggestion.styles.scss'

const SUGESSTIONS_DATA = [
	{
		id: 1,
		userSuggetion: 'Instagram',
		AvtUserSuggestion: img2
	},
	{
		id: 2,
		userSuggetion: 'Instagram',
		AvtUserSuggestion: img3
	},
	{
		id: 3,
		userSuggetion: 'Instagram',
		AvtUserSuggestion: img1
	},
	{
		id: 4,
		userSuggetion: 'Instagram',
		AvtUserSuggestion: img3
	},
	{
		id: 5,
		userSuggetion: 'Instagram',
		AvtUserSuggestion: img1
	}
	
]

const Suggetions = () =>{
	return(
		<div className = 'box-suggestion'>
			<div className='header-suggestion'>
				<h4>Suggestions For You</h4>
				<button type='button'>See All</button>
			</div>
			{SUGESSTIONS_DATA.map((suggitem => 
				<SuggestionList 
					key = {suggitem.id}
					userSuggetion = {suggitem.userSuggetion}
					AvtUserSuggestion = {suggitem.AvtUserSuggestion}
				/>
			))}
		</div>
	)
}

export default Suggetions;