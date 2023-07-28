import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/StateSchema';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('returns counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 11 },
        };

        expect(getCounter(state as StateSchema)).toEqual({ value: 11 });
    });
});
