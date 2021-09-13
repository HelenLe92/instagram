import React from 'react';

import FormInput from '../form-input/form-input.component';

import './search.styles.scss';


const Search = () =>{
	return(
		<div className='search_box'>
			<FormInput
			placeholder = 'Search'
			/>
		</div>
	)
};

export default Search;