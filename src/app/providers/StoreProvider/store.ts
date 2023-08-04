import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reduceManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reduceManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initState,
    });

    // @ts-ignore
    store.reduceManager = reduceManager;

    return store;
}
