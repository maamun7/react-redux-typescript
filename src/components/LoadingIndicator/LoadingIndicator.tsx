import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import './style.css';

export const LoadingIndicator = () => {
	const { promiseInProgress } = usePromiseTracker();

	return (
		promiseInProgress && (
			<span className="spinner">
				<Loader type="Circles" color="#38383d" height="100" width="100" />
			</span>
		)
	);
};
