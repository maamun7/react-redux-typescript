import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

const Home = lazy(() => import('../containers/Home'));

export const Routes: React.FC = () => (
	<Suspense fallback={<span>Loading ...</span>}>
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	</Suspense>
);

// export default hot(Routes);
