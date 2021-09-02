import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import styleForm from '../../common/FormsControls/FormsControls.module.css';
import Preloader from './../../common/Preloader';
import userPhoto from './../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

export const ProfileInfo = (props) => {
	let [editMode, setEditMode] = useState(false);

   if (!props.profile) {
      return <Preloader />;
   }

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData) => {
		props.saveProfile(formData).then (
			() => {
				setEditMode(false);
			}
		);
   };

   return (
      <div>
         <div className={s.top}>
            <img
               className={s.user}
               src={props.profile.photos.large || userPhoto}
               alt=""
            />
         </div>
         <div>
            {props.isOwner && (
               <input type={'file'} onChange={onMainPhotoSelected} />
            )}
         </div>
         {props.isOwner && (
            <ProfileStatusWithHooks
               status={props.status}
               updateStatus={props.updateStatus}
            />
         )}

         {editMode ? (
            <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
         ) : (
            <ProfileData
               profile={props.profile}
               isOwner={props.isOwner}
               goToEditMode={() => {setEditMode(true);}}
            />
         )}

         <div className={s.block}>{props.profile.userId}</div>
      </div>
   );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
   return (
      <div>
         <div className={s.block}>
            <b>Full name: </b>
            {profile.fullName}
         </div>
         <div className={s.block}>
            <b>Looking for a job: </b>
            {profile.lookingForAJob ? 'Yes' : 'No'}
         </div>
         {profile.lookingForAJob && (
            <div className={s.block}>
               <b>My professional skills: </b>
               {profile.lookingForAJobDescription}
            </div>
         )}
			<div className={s.block}>
				<b>About me: </b>
				{profile.aboutMe}
			</div>
			<div>
            <div className={s.block}>
               <b>Contacts :</b>
					{Object.entries(profile.contacts).map(([key, value]) => {
						if (value) {
							return <Contacts key={key} contactTitle={key} contactValue={value} />;
						}
						return false;
					})}
            </div>
         </div>
         {isOwner && <button className={styleForm.button} onClick={goToEditMode}>Edit</button>}
      </div>
   );
};

const Contacts = ({contactTitle, contactValue}) => {
   return <a className={s.itemContact} href={contactValue} target="_blank" rel='noreferrer'><img src={`icon-${contactTitle}.svg`} alt={contactTitle} /></a>
};
