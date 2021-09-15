import React, {Fragment} from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import Footer from '../../components/Footer/footer.component';
import Homepage from '../Homepage/home.component';

const SignInPage = ({currentUser}) => (
	<Fragment>
	{currentUser ? (
		<Fragment>
			<div className='sign-in-and-sign-up'>
			  <SignIn />
			</div>
			<Footer/>
		</Fragment>
	) : (
		<Fragment>
			<Homepage />
		</Fragment>
	)}
	  
	</Fragment>
	
  );
  
  export default SignInPage;