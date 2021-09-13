import {Fragment} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import SignInPage from './pages/SignIn/sign-in.component';
import SignUpPage from './pages/SignUp/sign-up.component';
import HomePage from './pages/Homepage/home.component';

function App() {
  return (
	  <Fragment>
	  <Switch>
	  <Route exact path='/home' component={HomePage}  />
	  <Route exact path='/sign-in' component={SignInPage}  />
	  <Route  path='/sign-up' component={SignUpPage} />
	  <Route exact path='/' component={SignInPage} />
	</Switch>
	</Fragment>
  );
}

export default App;
