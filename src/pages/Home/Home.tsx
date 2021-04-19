import React from 'react';
import { hot } from 'react-hot-loader/root';
import Recipe from '../../containers/Recipe';

export const Home: React.FC = () => {
	return (
		<div>
			<Recipe />
		</div>
	);
};

export default hot(Home);
