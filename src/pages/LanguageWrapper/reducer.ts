import { DEFAULT_LOCALE } from '../../locales';
import ActionTypes from './constants';
import { ContainerActions, ContainerState } from './types';

export const initialState: ContainerState = {
	locale: DEFAULT_LOCALE
};

const languageWrapperReducer = (state: ContainerState = initialState, action: ContainerActions): ContainerState => {
	switch (action.type) {
		case ActionTypes.CHANGE_LANGUAGE:
			console.log('DEBUGG : ', 'change locale');
			return {
				locale: action.payload
			};

		default:
			return state;
	}
};

export default languageWrapperReducer;
