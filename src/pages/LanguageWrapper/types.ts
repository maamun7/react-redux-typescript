import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

interface LanguageProviderState {
	readonly locale: string;
}

type AppActions = ActionType<typeof actions>;

type ContainerState = LanguageProviderState;
type ContainerActions = AppActions;

export type { ContainerState, ContainerActions };
