import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(initState?: StateSchema) {
    const rootReducer = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initState,
    });
}

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
