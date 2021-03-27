import { createSelector } from 'reselect';
import { SearchState, SearchType } from './types';
import { initialState } from './reducer';

const selectSearch = (state: SearchState) => state.search || initialState;

const getSelectedRecipeName = () => createSelector(selectSearch, subState => console.log(subState));

export { selectSearch, getSelectedRecipeName };
