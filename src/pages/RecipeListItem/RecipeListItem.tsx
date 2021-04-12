import React from 'react';
import { hot } from 'react-hot-loader/root';
import { FormattedMessage } from 'react-intl';
import ListItem from '../../components/RecipeList/ListItem';
import messages from './messages';

import './style.css';

interface Recipe {
	title: string;
	thumbnail: string;
	ingredients: string;
	href: string;
}

interface OwnProps {
	item: Recipe;
}

interface DispatchProps {}

type Props = DispatchProps & OwnProps;

export const RecipeListItem = ({ item }: Props) => {
	const content = (
		<div className="row">
			<div className="col-lg-6">
				<div className="thumbnail">
					<img src={item.thumbnail} height="160" />
				</div>
			</div>

			<div className="col-lg-6">
				<div className="recipe">
					<h3> {item.title} </h3>
					<br />
					<div>
						<h5>
							<FormattedMessage {...messages.ingredients} /> :
						</h5>
						<p> {item.ingredients} </p>
					</div>
					<br />
					<br />

					<a href={item.href} className="btn btn-primary">
						Details
					</a>
				</div>
			</div>
		</div>
	);

	return <ListItem key={`repo-list-item-${item.title}`} item={content} />;
};

export default hot(RecipeListItem);
