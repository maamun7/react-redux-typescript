import { call, put, select, takeLatest } from 'redux-saga/effects';
import { loadedRecipe, loadingRecipeError } from './actions';
import { getSelectedRecipeName } from './selectors';
import ActionTypes from './constants';
import request from '../../utils/http-request';

export function* getRecipes(): any {
	const searchKey = yield select(getSelectedRecipeName());
	const requestURL = `https://api.github.com/users/${searchKey}/repos?type=all&sort=updated`;
	// Select username from store

	console.log('saga : ', searchKey);

	try {
		const recipes = yield call(request, requestURL);
		yield put(loadedRecipe(recipes, searchKey));
	} catch (err) {
		yield put(loadingRecipeError(err));
	}
}

export default function* recipeData() {
	yield takeLatest(ActionTypes.LOAD_RECIPES, getRecipes);
}
