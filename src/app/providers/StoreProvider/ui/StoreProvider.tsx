import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../store';
import { StateSchema } from '../StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initState?: DeepPartial<StateSchema>;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
    const { children, initState } = props;
    const store = createReduxStore(initState as StateSchema);

    return <Provider store={store}>{children}</Provider>;
};
