/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'project.components.Header';

export default defineMessages({
	name: {
		id: `${scope}.name`,
		defaultMessage: 'Name'
	},
	features: {
		id: `${scope}.features`,
		defaultMessage: 'Features'
	}
});
