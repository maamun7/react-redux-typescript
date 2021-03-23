import bnTranslationMessages from './lang/bn.json';
import enTranslationMessages from './lang/en.json';
import { DEFAULT_LOCALE } from './locales';
// const localeEn = require('react-intl/locale-data/en');
// const localeBn = require('react-intl/locale-data/de');

// const { addLocaleData } = require('react-intl');

// addLocaleData(localeEn);
// addLocaleData(localeBn);

// addLocaleData([...localeEn]);

export const formatTranslationMessages = (locale: string, messages: object): any => {
	// const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};

	/* const flattenFormattedMessages = (formattedMessages: any, key: any) => {
		const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];
		return { ...formattedMessages, [key]: formattedMessage };
	};

	return Object.keys(messages).reduce(flattenFormattedMessages, {}); */

	return messages;
};

export const translationMessages = {
	bn: formatTranslationMessages('bn', bnTranslationMessages),
	en: formatTranslationMessages('en', enTranslationMessages)
};
