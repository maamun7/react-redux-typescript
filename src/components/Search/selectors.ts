import { createSelector } from 'reselect';
import { ContainerState } from './types';
import { ApplicationRootState } from '../../types';
import { initialState } from './reducer';

const selectSearch = (state: ApplicationRootState) => state.search || initialState;

const getSelectedRecipeName = () => createSelector(selectSearch, subState => subState.recipeName);

export { selectSearch, getSelectedRecipeName };
