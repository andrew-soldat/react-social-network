import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import { ProfileInfo } from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {

   return (
      <div>
         <ProfileInfo
            isOwner={props.isOwner}
            savePhoto={props.savePhoto}
            saveProfile={props.saveProfile}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
         />
         <MyPostsContainer />
      </div>
   );
};
export default Profile;
