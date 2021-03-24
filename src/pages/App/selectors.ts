import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectGlobal = (state: ApplicationRootState) => state.recipe || initialState;

const makeSelectRecipe = () => createSelector(selectGlobal, globalState => globalState.recipe);

export { makeSelectRecipe };