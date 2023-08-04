import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../store';
import { StateSchema } from '../StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
    const { children, initState, asyncReducers } = props;
    const store = createReduxStore(initState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

    return <Provider store={store}>{children}</Provider>;
};
