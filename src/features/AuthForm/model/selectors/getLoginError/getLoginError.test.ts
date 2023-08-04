import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/StateSchema';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('returns correct state', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'error example',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error example');
    });

    test('state is empty object', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual('');
    });
});
