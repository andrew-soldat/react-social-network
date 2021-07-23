import { Switch } from 'react-router';

const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
   usersData: [
      { name: 'Sasha', id: '1' },
      { name: 'Andrew', id: '2' },
      { name: 'Vova', id: '3' },
      { name: 'Alesya', id: '4' },
      { name: 'Yulya', id: '5' },
   ],
   messagesData: [
      { message: 'How are you?', id: '1' },
      { message: 'Hi', id: '2' },
      { message: 'Yo', id: '3' },
      { message: 'Good!', id: '4' },
      { message: 'No', id: '5' },
   ]
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE: 
			let body = {
				message: action.newMessage,
				id: '8',
			};

			return {
				...state,
				messagesData: [...state.messagesData, body]
			}

      default:
         return state;
	}
};

export const sendMessageActionCreator = (newMessage) => ({ type: 'SEND-MESSAGE', newMessage });

export default dialogsReducer;
