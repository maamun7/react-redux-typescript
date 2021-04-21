import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

const Home = lazy(() => import('@pages/Home'));
const Feature = lazy(() => import('@pages/Feature'));

const Routes: React.FC = () => (
	<Suspense fallback={<span>Loading ...</span>}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/feature" component={Feature} />
			</Switch>
		</BrowserRouter>
	</Suspense>
);

export default Routes;
