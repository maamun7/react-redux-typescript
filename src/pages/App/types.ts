import { ActionType } from 'typesafe-actions';
import { Action } from 'redux';
import * as actions from './actions';

export enum appActionTypes {
	CHECK_SESSION = '@@app/CHECK_SESSION',
	CHECK_SESSION_SUCCESS = '@@app/CHECK_SESSION_SUCCESS',
	CHECK_SESSION_ERROR = '@@app/CHECK_SESSION_ERROR',
	LOAD_RECIPES = '@@app/LOAD_RECIPES',
	LOAD_RECIPES_SUCCESS = 'project/App/LOAD_RECIPES_SUCCESS'
}

export interface AppState {
	readonly loading: boolean;
	readonly error?: object | boolean;
	readonly success?: object | boolean;
	readonly recipeData?: RecipeData;
}

/* export interface ContainerState {
	readonly app: any;
	readonly router: any;
} */

export interface RecipeData {
	readonly recipes?: [];
}

export interface CheckSessionAction extends Action {
	userName: string;
	type: typeof appActionTypes.CHECK_SESSION;
}

export interface GetRecipeAction extends Action {
	searchKey: string;
	type: typeof appActionTypes.LOAD_RECIPES;
}

// export type AppActions = CheckSessionAction | GetRecipeAction | recipeData;

/* --- ACTIONS --- */
type AppAction = ActionType<typeof actions>;

/* --- EXPORTS --- */

export type ContainerState = AppState;
export type ContainerActions = AppAction;
