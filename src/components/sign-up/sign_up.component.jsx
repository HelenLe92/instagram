import React from 'react';
import { Link } from 'react-router-dom';

import AppStore from '../../assets/apple_store.png';
import Googelplay from '../../assets/google_play.png';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign_up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
	  placeHolderEmail:'Mobile Number or Email',
	  placeHolderPassword:'Password',
	  placeHolderFullName:'Full Name',
	  placeHolderUserName:'Username'
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password } = this.state;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password } = this.state;
    return (
      <div className='sign-in sign-up'>
		<div className='sign-in_infor'>
			<div className='sign-in-box'>
				<div className='block-description'>
					<h1>Logo</h1>
			        <p className='descriton-title'>Sign up to see photos and videos from your friends.</p>
					<CustomButton type='submit'> Log in with Facebook </CustomButton>
					<p className='or-style'> <span>Or</span></p>
				</div>
			
		        <form className='sign-up-form' onSubmit={this.handleSubmit}>
				<FormInput
		            type='email'
		            name='email'
		            value={email}
		            onChange={this.handleChange}
		            placeholder={this.state.placeHolderEmail}
		            required
		          />
		          <FormInput
		            type='text'
		            name='displayName'
		            value={displayName}
		            onChange={this.handleChange}
		            placeholder={this.state.placeHolderFullName }
		            required
		          />
		         
				 <FormInput
		            type='text'
		            name='displayName'
		            value={displayName}
		            onChange={this.handleChange}
		            placeholder={this.state.placeHolderUserName }
		            required
		          />
		          <FormInput
		            type='password'
		            name='password'
		            value={password}
		            onChange={this.handleChange}
		            placeholder={this.state.placeHolderPassword}
		            required
		          />
		          <CustomButton type='submit'>Sign Up</CustomButton>
				  
				  <p className='terms-policy'>By signing up, you agree to our <a href='/'>Terms</a> , <a href='/'>Data Policy</a> and <a href='/'>Cookies Policy.</a></p>
		        </form>
			</div>
			
			<div className='sign-in-box sign-up_donthaveaccount'>
				<p>Have an account? <Link className='text-signup' to='/sign-in'>Log in</Link></p>
			 </div>
			 
			<div className='sign-in_getapp'>
				<p>Get the app.</p>
				<div className='boxgetapp'>
					<img src={ AppStore } alt='App Store' />
					<img src={ Googelplay } alt='GooglePlay' />
				</div>
			</div>
			
		</div> 
      </div>
    );
  }
}

export default SignUp;
