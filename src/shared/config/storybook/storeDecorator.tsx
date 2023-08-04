import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/StateSchema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthForm/model/slice/loginSlice';

const defAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: loginReducer,
};

export const storeDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => (story: () => any) =>
    (
        <StoreProvider initState={state} asyncReducers={{ ...defAsyncReducers, ...asyncReducers }}>
            {story()}
        </StoreProvider>
    );
