import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export enum ActionTypes {
	CHANGE_RECIPE_NAME = 'project/App/CHANGE_RECIPE_NAME',
	LOAD_RECIPES = 'project/App/LOAD_RECIPES',
	LOAD_RECIPES_SUCCESS = 'project/App/LOAD_RECIPES_SUCCESS',
	LOAD_RECIPES_ERROR = 'project/App/LOAD_RECIPES_ERROR'
}

export interface SearchType {
	recipeName: string;
}

export interface SearchState {
	readonly loading: boolean;
	readonly error?: object | boolean;
	readonly success?: object | boolean;
	readonly search?: SearchType;
	readonly recipeName?: string;
	// readonly recipeData?: recipeData;
}

export interface recipeData {
	readonly recipes?: [];
	//www.recipepuppy.com/api/?q=chicken grill&p=93
}

/* --- ACTIONS --- */
type AppAction = ActionType<typeof actions>;

/* --- EXPORTS --- */

export type ContainerState = SearchState;
export type ContainerActions = AppAction;

// export type { ContainerState, ContainerActions };
