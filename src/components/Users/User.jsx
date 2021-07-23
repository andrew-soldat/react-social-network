import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const User = ({user, ...props}) => {
   return (
		<div className={s.userWrapper}>
			<div className={s.userColumn}>
				<div>
					<NavLink to={'/profile/' + user.id}>
						<img
							className={s.userFhoto}
							src={
								user.photos.small === !null
									? user.photos.small
									: userPhoto
							}
							alt=""
						/>
					</NavLink>
				</div>
				<div>
					{user.followed ? (
						<button
							className={s.button}
							disabled={props.followingInProgress.some(
								(id) => id === user.id
							)}
							onClick={() => {
								props.follow(user.id);
							}}
						>
							Unfollow
						</button>
					) : (
						<button
							className={s.button}
							disabled={props.followingInProgress.some(
								(id) => id === user.id
							)}
							onClick={() => {
								props.unfollow(user.id);
							}}
						>
							Follow
						</button>
					)}
				</div>
			</div>
			<div className={s.userContent}>
				<div className={s.userName}>
					<div>{user.name}</div>
					<div>{user.status}</div>
				</div>
				<div className={s.userLocation}>
					<div className={s.userCountry}>
						{'user.location.country'},
					</div>
					<div className={s.userCity}>{'user.location.city'}</div>
				</div>
			</div>
		</div>
   );
};

export default User;
