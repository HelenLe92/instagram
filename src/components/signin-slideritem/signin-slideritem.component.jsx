import React from 'react';


const SignInSliderItem = (props) => {
	const { imageURL } = props;	
	
	return(
			<img src={imageURL} alt='img'/>
		
	);	
};

export default SignInSliderItem;