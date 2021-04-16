import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface SearchState {
	readonly searchKey?: string;
}

/* --- ACTIONS --- */
type SearchAction = ActionType<typeof actions>;

/* --- EXPORTS --- */

export type ContainerState = SearchState;
export type ContainerActions = SearchAction;
