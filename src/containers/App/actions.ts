import { action } from 'typesafe-actions';
import ActionTypes from './constants';

export const checkSession = (session: object) => action(ActionTypes.CHECK_SESSION, { session: session });
