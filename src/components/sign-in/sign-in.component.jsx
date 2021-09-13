import React from 'react';

import AppStore from '../../assets/apple_store.png';
import Googelplay from '../../assets/google_play.png';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import SignInSlider from '../signin-slider/signin-slider.component';
import { Link } from 'react-router-dom';


import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.component.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
	  placeHolderEmail:'Phone number, username, or email',
	  placeHolderPassword:'Password'
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

	const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword( email, password);
      this.setState({ email: '', password: '' });
	  window.location.assign("/home");

	  console.log(email);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
	const { email, password } = this.state;
    return (
		
      <div className='sign-in'>
		 <div className='sign-in_slider'>
			 <SignInSlider/>
		 </div>
		 <div className='sign-in_infor'>
			 <div className='sign-in-box'>
					<h1>Logo</h1>
			        <form onSubmit={this.handleSubmit}>
			          <FormInput
			            name='email'
			            type='text'
			            handleChange={this.handleChange}
						placeholder={this.state.placeHolderEmail}
			            value={email}
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
			          <div className='buttons'>
			            <CustomButton type='submit'> Log in </CustomButton>
						<p className='or-style'> <span>Or</span></p>
			            <button className='sign-in-fb' onClick={signInWithGoogle}>
			              Log in with Facebook
			            </button>
						
						<p className='text-forgotpass'>Forgot password?</p>
			          </div>
			        </form>
			 </div>
			 
			 <div className='sign-in-box sign-up_donthaveaccount'>
				<p>Don't have an account? <Link className='text-signup' to='/sign-up'>Sign up</Link></p>
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

export default SignIn;
