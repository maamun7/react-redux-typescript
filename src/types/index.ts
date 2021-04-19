import { RouterState } from 'connected-react-router';
import { Reducer, Store } from 'redux';
import { SagaInjectionModes } from 'redux-injectors';
import { Saga } from 'redux-saga';
import { ContainerState as LanguageProviderState } from '@containers/LanguageWrapper/types';
import { ContainerState as SearchState } from '@components/Search/types';
import { ContainerState as RecipeState } from '@containers/Recipe/types';
import { GlobalState } from '@pages/App/types';

export interface InjectedStoreParams extends Store {
	injectedReducers: any;
	injectedSagas: any;
	runSaga(saga: Saga<any[]> | undefined, args: any | undefined): any;
}

export interface InjectReducerParams {
	key: keyof ApplicationRootState;
	reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
	key: keyof ApplicationRootState;
	saga: Saga;
	mode?: SagaInjectionModes;
}

export interface RootState {
	router?: any;
}

// Root reducer type
export interface ApplicationRootState {
	readonly router: RouterState;
	readonly global: GlobalState;
	readonly language: LanguageProviderState;
	readonly search: SearchState;
	readonly recipe: RecipeState;
}
