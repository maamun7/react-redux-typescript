import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectGlobal = (state: ApplicationRootState) => state.search || initialState;

//const makeSelectRecipe = () => createSelector(selectGlobal, globalState => globalState.search);

export { selectGlobal };
