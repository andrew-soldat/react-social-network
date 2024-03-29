import { getAuthUserData } from './auth-reducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean
};

let initialState: InitialStateType = {
   initialized: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case INITIALIZED_SUCCESS:
         return {
				initialized: false
			};

      default:
         return state;
   }
};

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(getAuthUserData());
	promise.then(() => {
		dispatch(initializedSuccess());
	})
}

export default appReducer;
