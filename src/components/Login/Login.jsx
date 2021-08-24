import React from 'react';
import { reduxForm } from 'redux-form';
import st from './Login.module.css';
import styleForm from '../common/FormsControls/FormsControls.module.css';
import { required, email } from '../../utilities/validators/validator'
import { Input, createField } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth-reducer';
import { Redirect } from 'react-router';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
   return (
      <form onSubmit={handleSubmit}>
			{createField('Email', 'email', Input, [required, email])}
			{createField('Password', 'password', Input, [required], {type: 'password'})}
			{createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}
			<div className={styleForm.captcha}>
				{captchaUrl && (
					<img src={captchaUrl} alt="" />
				)}
         	{captchaUrl && createField('captcha', 'captcha', Input, [required], {} )}
			</div>
         {error && (
            <div className={styleForm.formSummaryError}>{error}</div>
         )}
         <button className={styleForm.button}>Login</button>
      </form>
   );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
	}

	if (props.isAuth) {
		return <Redirect to={'/profile'} />;
	}

   return (
      <div>
         <h1 className={st.title}>Sign in to React Social Network</h1>
         <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      </div>
   );
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login}) (Login);
