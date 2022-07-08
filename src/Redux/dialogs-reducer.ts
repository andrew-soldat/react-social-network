
import { nanoid } from 'nanoid';

const SEND_MESSAGE = 'SEND-MESSAGE';

type UserDataType = {
    name: string
    id: string
}

type MessagesDataType = {
    message: string
    id: string
}

let initialState = {
   usersData: [
      { name: 'Sasha', id: '1' },
      { name: 'Andrew', id: '2' },
      { name: 'Vova', id: '3' },
      { name: 'Alesya', id: '4' },
      { name: 'Yulya', id: '5' },
   ] as Array<UserDataType>,
   messagesData: [
      { message: 'How are you?', id: '1' },
      { message: 'Hi', id: '2' },
      { message: 'Yo', id: '3' },
      { message: 'Good!', id: '4' },
      { message: 'No', id: '5' },
   ] as Array<MessagesDataType>
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case SEND_MESSAGE: 
			let body = {
				message: action.newMessage,
				id: nanoid(),
			};

			return {
				...state,
				messagesData: [...state.messagesData, body]
			}

      default:
         return state;
	}
};

type SendMessageActionCreatorType = {
    type: typeof SEND_MESSAGE
    newMessage: string
}


export const sendMessageActionCreator = (newMessage: string) => ({ type: SEND_MESSAGE, newMessage });

export default dialogsReducer;
