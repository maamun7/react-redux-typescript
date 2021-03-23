import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { hot } from 'react-hot-loader/root';
import Header from '../../components/Layouts/Header';
import LocaleSwitcher from '../LocaleSwitcher';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './style.css';

const AppWrapper = styled.div`
	max-width: calc(768px + 16px * 2);
	margin: 0 auto;
	display: flex;
	min-height: 100%;
	padding: 0 16px;
	flex-direction: column;
`;

function App() {
	return (
		<div className="container">
			<Helmet titleTemplate="%s - React Redux Boilerplate" defaultTitle="React Redux Boilerplate">
				<meta name="description" content="Amar sonar Bangla" />
			</Helmet>
			<Header />
		</div>
	);
}

export default hot(App);
