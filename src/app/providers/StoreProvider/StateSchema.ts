import { AnyAction, CombinedState, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthForm';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // async reducers down below
    login?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface StoreWithManager extends ToolkitStore<StateSchema> {
    reduceManager: ReducerManager;
}
