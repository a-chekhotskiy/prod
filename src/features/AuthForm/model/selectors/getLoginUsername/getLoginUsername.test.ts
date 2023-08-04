import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/StateSchema';
import { getLoginUsername } from '../getLoginUsername/getLoginUsername';

describe('getLoginUsername.test', () => {
    test('returns correct state', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'error example',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('error example');
    });

    test('state is empty object', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
