import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../store';
import { StateSchema } from '../StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
    const { children, initState, asyncReducers } = props;

    const navigate = useNavigate();

    const store = createReduxStore(initState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>, navigate);

    return <Provider store={store}>{children}</Provider>;
};
