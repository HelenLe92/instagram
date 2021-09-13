import React from 'react';
import Slider from 'react-slick';

import img1 from '../../assets/slider/slider_1.jpg';
import img2 from '../../assets/slider/slider_2.jpg';
import img3 from '../../assets/slider/slider_3.jpg';
import img4 from '../../assets/slider/slider_4.jpg';

import SignInSliderItem from '../signin-slideritem/signin-slideritem.component';
import './signin-slider.styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SLIDER_DATA = [
	{
		id: 1,
		imageURL : img1
	},
	{
		id: 2,
		imageURL : img2
	},
	{
		id: 3,
		imageURL : img3
	},
	{
		id: 4,
		imageURL : img4
	}
]

const SignInSlider = (props) =>{
	const settings = {
		infinite: true,
		arrows: false,
		autoplay: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1
	  };
	return(
	<div className='sign_in_slider' >
		<div>
		<Slider {...settings}>
			{SLIDER_DATA.map((item) => (
			  <SignInSliderItem
			  key = {item.id}
			  id = {item.id}
	          imageURL = {item.imageURL}
	        />
		  ))}
		</Slider>
		</div>
		
	 
    </div>
	);
};

export default SignInSlider;
	
