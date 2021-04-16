import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface RecipeState {
	readonly error?: object | boolean;
	readonly success?: object | boolean;
	readonly recipes?: [];
}

/* --- ACTIONS --- */
type RecipeAction = ActionType<typeof actions>;

/* --- EXPORTS --- */

export type ContainerState = RecipeState;
export type ContainerActions = RecipeAction;
