import React, { Component } from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const UsersItems = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div key={props.id} className={s.user}>
			<NavLink to={path}>
				{props.name}
			</NavLink>
		</div>
	)
}

export default UsersItems;