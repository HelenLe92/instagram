import React, {Fragment} from 'react';

import { Switch, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SignInPage from './pages/SignIn/sign-in.component';
import SignUpPage from './pages/SignUp/sign-up.component';
import HomePage from './pages/Homepage/home.component';
import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser } from './redux/user/user.selector';


function App({ currentUser}) {
	
  return (
	  <Fragment>
	  <Switch>
	  <Route exact path='/' component={SignInPage}/>
	  <Route exact path='/home'  component={HomePage}/>
	  <Route exact path='/sign-in' component={SignInPage}/>
	  <Route  path='/sign-up' component={SignUpPage} />
	</Switch>
	</Fragment>
  );
}
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})
const mapDispatchToProps  = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
