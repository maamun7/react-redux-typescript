import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectGlobal = (state: ApplicationRootState) => state.global || initialState;

const getSession = () => createSelector(selectGlobal, globalState => globalState.session);

export { selectGlobal, getSession };
