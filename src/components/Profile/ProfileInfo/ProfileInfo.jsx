import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader';
import userPhoto from './../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

export const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />;
   }
   return (
      <div>
         <div className={s.top}>
            <img className={s.user} src={props.profile.photos.large || userPhoto} alt="" />		
         </div>
			<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus } />
         <div className={s.block}>{props.profile.fullName}</div>
			<div className={s.block}>
				{props.profile.lookingForAJobDescription}
			</div>
         <div>{props.profile.lookingForAJob}</div>
         <div className={s.block}>{props.profile.userId}</div>
      </div>
   );
};
