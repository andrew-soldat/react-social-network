import React from 'react'
import s from './../Dialogs.module.css'


const MessagesItems = (props) => {
	return (
		<div key={props.id} className={s.message}>
			<div className={s.userPhoto}>
			</div>
			<div  className={s.text}>
				{props.message}
			</div>
		</div>
	)
}

export default MessagesItems;