import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/StateSchema';
import { getLoginLoading } from '../getLoginLoading/getLoginLoading';

describe('getLoginLoading.test', () => {
    test('returns correct state', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true,
                password: 's',
                username: 'user',
            },
        };
        expect(getLoginLoading(state as StateSchema)).toEqual(true);
    });

    test('state is empty object', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    });
});
