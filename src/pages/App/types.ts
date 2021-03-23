import { Action } from 'redux';

export enum appActionTypes {
    CHECK_SESSION = '@@app/CHECK_SESSION',
    CHECK_SESSION_SUCCESS = '@@app/CHECK_SESSION_SUCCESS',
    CHECK_SESSION_ERROR = '@@app/CHECK_SESSION_ERROR',
}

export interface AppState {
    readonly loading: boolean;
    readonly error?: object | boolean;
    readonly success?: object | boolean;
}

export interface ContainerState {
    readonly app: any;
    readonly router: any;
}

export interface CheckSessionAction extends Action {
    userName: string;
    type: typeof appActionTypes.CHECK_SESSION;
}

export type AppActions = CheckSessionAction;
