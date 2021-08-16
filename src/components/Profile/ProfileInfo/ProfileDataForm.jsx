import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';
import { Field, reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';

const ProfileDataForm = (props, profile, handleSubmit) => {
   return (
      <div>
         <form onSubmit={props.handleSubmit}>
            <div className={s.rowForm}>
               <div className={s.label}>Full name:</div>
               {createField('Full name', 'fullname', Input, [])}
            </div>
            <div className={s.rowForm}>
               <div className={s.label}>Looking for a job:</div>
               {createField(null, 'lookingForAJob', Input, [], {
                  type: 'checkbox',
               })}
            </div>
            {!profile.lookingForAJob && (
               <div className={s.rowForm}>
                  <div className={s.label}>My professional skills:</div>
                  {createField(
                     'My professional skills',
                     'lookingForAJobDescription',
                     Textarea,
                     [],
                     {
                        type: 'checkbox',
                     }
                  )}
               </div>
            )}
            <div className={s.rowForm}>
               <div className={s.label}>About me:</div>
               {createField('About me', 'aboutMe', Textarea, [], {
                  type: 'checkbox',
               })}
            </div>
            <button className={s.button}>Save</button>
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

const ProfileDataFormReduxForm = reduxForm({ form: 'ProfileData' })(
   ProfileDataForm
);

export default ProfileDataFormReduxForm;