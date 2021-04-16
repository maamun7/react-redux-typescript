import { ContainerState as SearchState, ContainerActions as SearchAction } from './types';
import ActionTypes from './constants';

export const initialState: SearchState = {
	searchKey: ''
};

const searchReducer = (state: SearchState = initialState, action: SearchAction): SearchState => {
	switch (action.type) {
		case ActionTypes.CHANGE_SEARCH_KEY:
			return {
				searchKey: action.payload.searchKey
			};

		default:
			return state;
	}
};

export default searchReducer;
