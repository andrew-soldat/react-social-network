import React from 'react';
import s from './ProfileInfo.module.css';
import styleForm from '../../common/FormsControls/FormsControls.module.css';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';

const ProfileDataForm = (props) => {
   return (
      <div>
         <form onSubmit={props.handleSubmit}>
            <div className={s.rowForm}>
               <div className={s.label}>Full name:</div>
               {createField('Full name', 'fullName', Input, [])}
            </div>
            <div className={s.rowForm}>
               <div className={s.label}>Looking for a job:</div>
               {createField(null, 'lookingForAJob', Input, [], {
                  type: 'checkbox',
               })}
            </div>
            <div className={s.rowForm}>
					<div className={s.label}>My professional skills:</div>
					{createField(
						'My professional skills',
						'lookingForAJobDescription',
						Textarea,
						[],
					)}
				</div>
				<div className={s.rowForm}>
					<div className={s.label}>About me:</div>
					{createField(
						'About me',
						'aboutMe',
						Textarea,
						[],
					)}
				</div>
				<div>
					<div className={s.block}>
						<b>Contacts :</b>
					</div>
					{Object.keys(props.profile.contacts).map(key => {
						return <div key={key} className={s.rowForm}>
									<div className={s.label}>{key}:</div>
									{createField(key, "contacts." + key, Input, [])}
						</div>
					})}
         	</div>
				{props.error && (
					<div>
						<span className={styleForm.formSummaryError}>{props.error}</span>
					</div>
				)}
            <button className={styleForm.button}>Save</button>
         </form>
         {/* <div className={s.block}>
            <b>Full name: </b>
            {profile.fullName}
         </div>
         <div className={s.block}>
            <b>Looking for a job: </b>
            {profile.lookingForAJob ? 'Yes' : 'No'}
         </div>
         {!profile.lookingForAJob && (
            <div className={s.block}>
               <b>About me: </b>
               {profile.lookingForAJobDescription}
            </div>
         )} */}
      </div>
   );
};

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(
   ProfileDataForm
);

export default ProfileDataFormReduxForm;