import React, { Component } from 'react'
import s from './Post.module.css'

export default function Post(props) {
	return (
		<div>
			<div key={props.id} className={s.item}>{props.post}</div>
		</div>
	)
}
