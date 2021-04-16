import React from 'react';
import { hot } from 'react-hot-loader/root';
import Recipe from '../Recipe/';

export const Home: React.FC = () => {
	return <Recipe />;
};

export default hot(Home);
