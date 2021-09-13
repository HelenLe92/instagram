import React from 'react';

import './suggestion-list.style.scss';

const SuggestionList = ({userSuggetion, AvtUserSuggestion}) =>{
	return(
		<div className='suggestion-item'>
			<div><img src={AvtUserSuggestion} alt='avt'/></div>
			<div className='suggestion-item-infor'>
				<h4>{userSuggetion}</h4>
				<p>Instagram recommended</p>
			</div>
			<div>
				<button type='button'>Follow</button>
			</div>
		</div>
	)
};

export default SuggestionList;