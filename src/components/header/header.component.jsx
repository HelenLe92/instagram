import React from 'react';

import logo from '../../assets/logo.png';
import Search from '../search/search.component';
import MenuItem from '../menu-item/menu-item.component';


import './header.styles.scss';

const Header = () => {
	return(
		<header className ='header'>
			<div className='container'>
				<div className='main-header'>
					<img src={logo} alt='Instagram' className='logo' />
					<Search/>
					<MenuItem/>
				</div>
			</div>
			
		</header>
	)
}

export default Header;