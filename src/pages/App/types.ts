import { Action } from 'redux';

export enum appActionTypes {
	CHECK_SESSION = '@@app/CHECK_SESSION',
	CHECK_SESSION_SUCCESS = '@@app/CHECK_SESSION_SUCCESS',
	CHECK_SESSION_ERROR = '@@app/CHECK_SESSION_ERROR',
	RECIPE = '@@app/RECIPE'
}

export interface AppState {
	readonly loading: boolean;
	readonly error?: object | boolean;
	readonly success?: object | boolean;
	readonly recipes?: [];
}

export interface ContainerState {
	readonly app: any;
	readonly router: any;
}

export interface recipeData {
	readonly recipes?: [];
	//www.recipepuppy.com/api/?q=chicken grill&p=93
}

export interface CheckSessionAction extends Action {
	userName: string;
	type: typeof appActionTypes.CHECK_SESSION;
}

export interface GetRecipeAction extends Action {
	searchKey: string;
	type: typeof appActionTypes.RECIPE;
}

export type AppActions = CheckSessionAction;
