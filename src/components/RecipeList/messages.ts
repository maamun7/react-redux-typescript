import { defineMessages } from 'react-intl';

export const scope = 'project.components.RecipeList';

export default defineMessages({
	errorMsg: {
		id: `${scope}.errorMsg`,
		defaultMessage: 'Something went wrong, please try again!'
	},
	notFoundMsg: {
		id: `${scope}.notFoundMsg`,
		defaultMessage: 'No recipe found!'
	}
});
