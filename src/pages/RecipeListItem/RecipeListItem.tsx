import React from 'react';
import { hot } from 'react-hot-loader/root';
import ListItem from '../../components/RecipeList/ListItem';
import './style.css';

interface OwnProps {
	item: object;
}

interface DispatchProps {}

type Props = DispatchProps & OwnProps;

export const RecipeListItem = ({ item }: Props) => {
	const content = (
		<div className="row">
			<div className="col-lg-6">
				<div className="thumbnail">
					<img src="http://img.recipepuppy.com/112352.jpg" height="160" />
				</div>
			</div>

			<div className="col-lg-6">
				<div className="recipe">
					<h3> Bacon Burger Cheese Dogs </h3>
					<br />
					<div>
						<h5>Ingredients :</h5>
						<p> Bacon, cajun seasoning, cheddar cheese, ground beef </p>
					</div>
					<br />
					<br />

					<a href="#" className="btn btn-primary">
						Details
					</a>
				</div>
			</div>
		</div>
	);

	return <ListItem key={`repo-list-item-${item}`} item={content} />;
};

export default hot(RecipeListItem);
