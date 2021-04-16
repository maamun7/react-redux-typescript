import { action } from 'typesafe-actions';
import ActionTypes from './constants';

export const changeSearchKey = (searchKey: string) => action(ActionTypes.CHANGE_SEARCH_KEY, { searchKey: searchKey });
export const loadRecipe = () => action(ActionTypes.LOAD_RECIPES);
