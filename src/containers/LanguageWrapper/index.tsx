import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectLocale } from './selectors';

export interface Props {
	messages: { [locale: string]: { [id: string]: string } };
	children?: React.ReactNode;
}

const selector = createSelector(makeSelectLocale(), locale => ({ locale }));

export default function LanguageWrapper(props: Props): JSX.Element {
	const { locale } = useSelector(selector);

	return (
		<IntlProvider locale={locale} messages={props.messages[locale]}>
			{React.Children.only(props.children)}
		</IntlProvider>
	);
}
