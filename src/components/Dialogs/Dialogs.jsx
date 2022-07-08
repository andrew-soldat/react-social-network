import React  from 'react'
import UsersItems from './UsersItems/UsersItems'
import MessagesItems from './MessagesItems/MessagesItems'
import s from './Dialogs.module.css'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../utilities/validators/validator'
import { Textarea } from '../common/FormsControls/FormsControls'

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit}>
			<Field name="newMessage" component={Textarea} validate={[required, maxLength50]} placeholder="Enter your message" className={s.textarea} />
			<button className={s.button}>Send</button> 
		</form>
	)

}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

const Dialogs = (props) => {
	
	let state = props.dialogsPage;

	let usersElements = state.usersData.map(user => <UsersItems key={user.id} name={user.name} id={user.id} />);
	let messagesElements = state.messagesData.map(message => <MessagesItems key={message.id} message={message.message} />);

	const addNewMessage = (values) => {
		props.sendMessage(values.newMessage);
	}
	
	return (
		<div>
			<h3 className={s.title}>Dialogs</h3>
			<div className={s.dialogs}>
				<div className={s.usersItems}>
					{usersElements}
				</div>
				<div className={s.MessagesItems}>
					{messagesElements}
					<AddMessageReduxForm onSubmit={addNewMessage} />
				</div>
			</div>
		</div>
		
	)
}

export default Dialogs;