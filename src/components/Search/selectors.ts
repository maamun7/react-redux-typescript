import { createSelector } from 'reselect';
import { ApplicationRootState } from '../../types';
import { initialState } from './reducer';

const selectSearch = (state: ApplicationRootState) => state.search || initialState;

const getSelectedSearchKey = () => createSelector(selectSearch, subState => subState.searchKey);

export { selectSearch, getSelectedSearchKey };
