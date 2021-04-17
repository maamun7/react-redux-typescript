import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import RecipeListItem from '../../containers/RecipeListItem';
import ListItem from '../RecipeList/ListItem';
import List from './List/';
import messages from './messages';

const RecipeList = ({ recipes, success, error }: { recipes: any; success: any; error: any }) => {
	let msg = (<div />) as JSX.Element | JSX.Element[];

	if (error !== false) {
		msg = <FormattedMessage {...messages.errorMsg} />;

		const ErrorComponent = () => <ListItem item={msg} />;

		return <List component={ErrorComponent} />;
	}

	if (recipes !== undefined && success) {
		if (recipes.length == 0) {
			msg = <FormattedMessage {...messages.notFoundMsg} />;
			const EmptyComponent = () => <ListItem item={msg} />;

			return <List component={EmptyComponent} />;
		}

		return <List items={recipes} component={RecipeListItem} />;
	} else {
		return null;
	}
};

export default RecipeList;
