import { CheckSessionAction, appActionTypes } from './types';

export const checkSession = (userName: string): CheckSessionAction => ({
    userName,
    type: appActionTypes.CHECK_SESSION,
});
