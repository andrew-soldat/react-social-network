import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader';
import userPhoto from './../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

export const ProfileInfo = (props) => {
	let [editMode, setEditMode] = useState(false);

   if (!props.profile) {
      return <Preloader />;
   }

   // let [status, setStatus] = useState(props.status);

	// useEffect(() => {
	// 	setStatus(props.status);
	// }, [props.status]);

	// const deactivateEditMode = () => {
	// 	setEditMode(false);
	// 	props.updateStatus(status);
	// };

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData) => {
		props.saveProfile(formData);
		
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
            <ProfileDataForm profile={props.profile} onSubmit={onSubmit}/>
         ) : (
            <ProfileData
               profile={props.profile}
               isOwner={props.isOwner}
               goToEditMode={() => {setEditMode(true);}}
            />
         )}

         <div>
            <div className={s.block}>
               <b>Contacts :</b>
            </div>
            {Object.entries(props.profile.contacts).map(([key, value]) => {
               return <Contacts contactTitle={key} contactValue={value} />;
            })}
         </div>

         <div className={s.block}>{props.profile.userId}</div>
      </div>
   );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
   return (
      <div>
         {isOwner && <button onClick={goToEditMode}>Edit</button>}
         <div className={s.block}>
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
         )}
      </div>
   );
};

const Contacts = ({contactTitle, contactValue}) => {
   return <div className={s.itemContact}>
				<b>{contactTitle}:</b> {contactValue}
			</div>
};
