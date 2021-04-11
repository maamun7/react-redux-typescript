import * as React from 'react';
import RecipeListItem from '../../pages/RecipeListItem';
import List from './List/';

// export type RecipeListProps = Pick<ContainerState, 'loading' | 'error'> & Pick<RecipeData, 'recipes'>;

export default function RecipeList({ recipes }: { recipes: any }) {
	console.log('RecipeList : ', recipes);

	return <List component={RecipeListItem} />;
}
