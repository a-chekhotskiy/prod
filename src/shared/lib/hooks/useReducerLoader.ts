import { Reducer } from '@reduxjs/toolkit';
import { StoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/StateSchema';
import { useDispatch, useStore } from 'react-redux';

type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

export const useReducerLoader = (reducers: ReducersList) => {
    const store = useStore() as StoreWithManager;
    const dispatch = useDispatch();

    const addReducer = () => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reduceManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
    };

    const removeReducer = () => {
        Object.keys(reducers).forEach((name: StateSchemaKey) => {
            store.reduceManager.remove(name);
            dispatch({ type: `@DELETE ${name} reducer` });
        });
    };

    return { addReducer, removeReducer };
};
