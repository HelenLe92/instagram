import React, {Fragment} from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import Footer from '../../components/Footer/footer.component';

const SignInPage = () => (
	<Fragment>
		<div className='sign-in-and-sign-up'>
		  <SignIn />
		</div>
	  <Footer/>
	</Fragment>
	
  );
  
  export default SignInPage;