import { ActionType } from 'typesafe-actions';
import { Action } from 'redux';
import * as actions from './actions';

export interface GlobalState {
	readonly error?: object | boolean;
	readonly success?: object | boolean;
	readonly session?: object;
}

/* --- ACTIONS --- */
type GlobalAction = ActionType<typeof actions>;

/* --- EXPORTS --- */

export type ContainerState = GlobalState;
export type ContainerActions = GlobalAction;
