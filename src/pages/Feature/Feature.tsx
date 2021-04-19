import React from 'react';
import { hot } from 'react-hot-loader/root';

export const Feature: React.FC = () => {
	return (
		<div>
			<h1> This is feature page </h1>
		</div>
	);
};

export default hot(Feature);
