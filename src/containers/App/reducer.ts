import { Reducer } from 'redux';
import { ContainerState as GlobalState, ContainerActions as GlobalActions } from './types';
import ActionTypes from './constants';

export const initialState: GlobalState = {
	error: false,
	success: false,
	session: {}
};

export default function globalReducer(state: GlobalState = initialState, action: GlobalActions): GlobalState {
	switch (action.type) {
		case ActionTypes.CHECK_SESSION:
			console.log('CHECK_SESSION :');

			return {
				error: false,
				success: true,
				session: action.payload.session
			};

		default:
			return state;
	}
}
