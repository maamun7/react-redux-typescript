import { Reducer } from 'redux';
import { appActionTypes, AppState, AppActions } from './types';

export const initialState: AppState = {
    loading: false,
    error: false,
    success: true,
};

export const appReducer: Reducer<AppState, AppActions> = (
    state = initialState,
    { type, ...payload }
) => {
    switch (type) {
        case appActionTypes.CHECK_SESSION:
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
};
