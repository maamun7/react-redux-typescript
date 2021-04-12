import { call, put, select, takeLatest } from 'redux-saga/effects';
import { loadedRecipe, loadingRecipeError } from './actions';
import { getSelectedRecipeName } from './selectors';
import ActionTypes from './constants';
import request from '../../utils/http-request';

export function* getRecipes(): any {
	const recipeName = yield select(getSelectedRecipeName());
	const requestURL = `${ActionTypes.RECIPES_URL}=${recipeName}&p=3`;
	// Select username from store
	try {
		const { results: recipes } = yield call(request, requestURL);

		yield put(loadedRecipe(recipes));
	} catch (err) {
		yield put(loadingRecipeError(err));
	}
}

export default function* recipeData() {
	yield takeLatest(ActionTypes.LOAD_RECIPES, getRecipes);
}
