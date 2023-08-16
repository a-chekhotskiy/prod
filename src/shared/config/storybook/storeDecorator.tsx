import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthForm/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/hooks/useReducerLoader';

const defAsyncReducers: ReducersList = {
    login: loginReducer,
};

export const storeDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (story: () => any) =>
    (
        <StoreProvider initState={state} asyncReducers={{ ...defAsyncReducers, ...asyncReducers }}>
            {story()}
        </StoreProvider>
    );
