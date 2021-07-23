import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import User from './User';
import Paginator from './../common/Paginator/Paginator';

const Users = (props) => {
   return (
      <div>
         <h3 className={s.title}>User</h3>
         <div>
            {props.users.map((user) => (
              <User key={user.id} user={user} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} />
     
            ))}
         </div>
         <Paginator
            totalItemsCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onPageChanged={props.onPageChanged}
            currentPage={props.currentPage}
         />
      </div>
   );
};

export default Users;
