
import React from 'react';

import  Dasboard from '../../components/dashboard/dashboard.component';
import Header from '../../components/header/header.component'
import SideBar from '../../components/sidebar/sidebar.component';

import './homepage.styles.scss';

const HomePage = () => (
	<div className='home'>
		<Header/>
		<div className='wrap-content'>
			<div className='container'>
				<div className = 'box-page'>
					<div className='home-content'>
					  	<Dasboard/>
					</div>
					<SideBar/>
				</div>
			</div>  
		</div>
		
	</div>
  );
  
  export default HomePage;