import React from 'react';
import s from './Users.module.css';
import User from './User';
import Paginator from '../common/Paginator/Paginator';
import {UsersType} from "../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

const Users: React.FC<PropsType> = (props) => {
   return (
      <div>
         <h3 className={s.title}>User</h3>
         <div>
            {props.users.map((user) => (
              <User key={user.id} user={user} followingInProgress={props.followingInProgress} fol low={props.follow} unfollow={props.unfollow} />
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
