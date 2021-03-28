import { createSelector } from 'reselect';
import { SearchState, SearchType } from './types';
import { initialState } from './reducer';

const selectSearch = (state: SearchState) => state.recipeName || initialState;

const getSelectedRecipeName = () => createSelector(selectSearch, subState => console.log('Selectors :', subState));

export { selectSearch, getSelectedRecipeName };
