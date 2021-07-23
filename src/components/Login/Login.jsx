import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';
import { required, email } from '../../utilities/validators/validator'
import { Input, createField } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth-reducer';
import { Redirect } from 'react-router';

const LoginForm = ({handleSubmit, error}) => {
   return (
      <form onSubmit={handleSubmit}>
			{createField('Email', 'email', Input, [required, email])}
			{createField('Password', 'password', Input, [required], {type: 'password'})}
			{createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}
         {error && (
            <div>
               <span className={s.formSummaryError}>{error}</span>
            </div>
         )}
         <button className={s.button}>Login</button>
      </form>
   );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Redirect to={'/profile'} />;
	}

   return (
      <div>
         <h1 className={s.title}>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   );
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);
