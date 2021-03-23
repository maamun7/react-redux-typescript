/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';

import Dropdown from 'components/Dropdown';
import messages from './messages';
import { appLocales } from '../../locales';
import { changeLanguage } from '../LanguageWrapper/actions';
import { makeSelectLocale } from '../LanguageWrapper/selectors';
import styled from 'styled-components';
import './style.css';

const stateSelector = createSelector(makeSelectLocale(), locale => ({
	locale
}));

const Wrapper = styled.div`
	margin: 0px;
`;

export default function LocaleSwitcher() {
	const { locale } = useSelector(stateSelector);
	const dispatch = useDispatch();

	const onLocaleSwitch = (evt: any) => dispatch(changeLanguage(evt.target.value));

	return (
		<div className="locale-selection-wrapper">
			<Dropdown value={locale} values={appLocales} messages={messages} onSwitch={onLocaleSwitch} />
		</div>
	);
}
