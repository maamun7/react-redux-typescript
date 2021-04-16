import { call, put, select, takeLatest } from 'redux-saga/effects';
import { loadedRecipe, loadingRecipeError } from '../../containers/Recipe/actions';
import { checkSession } from '../../containers/App/actions';
import { getSelectedSearchKey } from './selectors';
import ActionTypes from './constants';
import request from '../../utils/http-request';

export function* getRecipes(): any {
	// Select username from store
	const searchKey = yield select(getSelectedSearchKey());
	const requestURL = `${ActionTypes.RECIPES_URL}=${searchKey}&p=3`;

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
