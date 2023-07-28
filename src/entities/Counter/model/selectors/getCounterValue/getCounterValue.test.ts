import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/StateSchema';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('returns counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 11 },
        };

        expect(getCounterValue(state as StateSchema)).toEqual(11);
    });
});
