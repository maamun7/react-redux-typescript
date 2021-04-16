import { action } from 'typesafe-actions';
import ActionTypes from './constants';

export const changeLanguage = (languageLocale: string) => action(ActionTypes.CHANGE_LANGUAGE, languageLocale);
