import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { hot } from 'react-hot-loader/root';
import Header from '../../components/Layouts/Header';
import LoadingIndicator from '../../components/LoadingIndicator';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './style.css';
import Footer from '../../components/Layouts/Footer';
import Router from '../../routes';

const AppWrapper = styled.div`
	max-width: calc(768px + 16px * 2);
	margin: 0 auto;
	display: flex;
	min-height: 100%;
	padding: 0 16px;
	flex-direction: column;
`;

const App: React.FC = () => {
	return (
		<div className="container">
			<Helmet titleTemplate="%s - React Redux Boilerplate" defaultTitle="React Redux Boilerplate">
				<meta name="description" content="Amar sonar Bangla" />
			</Helmet>
			<Header />
			<main>
				<Router />
				<LoadingIndicator />
			</main>
			<Footer />
		</div>
	);
};

export default hot(App);
