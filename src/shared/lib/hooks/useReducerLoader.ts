import { Reducer } from '@reduxjs/toolkit';
import { StoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/StateSchema';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

export const useReducerLoader = (reducers: ReducersList) => {
    const store = useStore() as StoreWithManager;
    const dispatch = useDispatch();

    const addReducer = () => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reduceManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
    };

    const removeReducer = () => {
        Object.keys(reducers).forEach((name) => {
            store.reduceManager.remove(name as StateSchemaKey);
            dispatch({ type: `@DELETE ${name} reducer` });
        });
    };

    return { addReducer, removeReducer };
};
