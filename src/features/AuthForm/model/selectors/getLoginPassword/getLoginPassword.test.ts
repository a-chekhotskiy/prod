import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/StateSchema';
import { getLoginPassword } from '../getLoginPassword/getLoginPassword';

describe('getLoginPassword.test', () => {
    test('returns correct state', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: 'error example',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('error example');
    });

    test('state is empty object', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
