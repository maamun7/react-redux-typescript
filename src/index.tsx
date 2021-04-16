import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import history from 'utils/history';
import App from './containers/App';
import LanguageWrapper from './containers/LanguageWrapper';
import { translationMessages } from './i18n';
import { configStore } from './store/rootStore';
const MOUNT_ELEMENT = document.getElementById('app') as HTMLElement;

const initialState = {};
const store = configStore(history, initialState);

console.log('store : ', store);

const ConnectedApp = (props: { messages: any }) => (
	<Provider store={store}>
		<LanguageWrapper messages={props.messages}>
			<ConnectedRouter history={history}>
				<HelmetProvider>
					<App />
				</HelmetProvider>
			</ConnectedRouter>
		</LanguageWrapper>
	</Provider>
);

const render = (messages: any) => {
	ReactDOM.render(<ConnectedApp messages={messages} />, MOUNT_ELEMENT);
};

if (module.hot) {
	module.hot.accept(['./i18n'], () => {
		ReactDOM.unmountComponentAtNode(MOUNT_ELEMENT);
		render(translationMessages);
	});
}

render(translationMessages);
