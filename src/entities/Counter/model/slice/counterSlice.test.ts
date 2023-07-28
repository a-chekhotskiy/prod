import { CounterSchema } from '../types/CounterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = {
            value: 11,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 10 });
    });

    test('increment', () => {
        const state: CounterSchema = {
            value: 11,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 12 });
    });

    test('increment by amount', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.incrementByAmount(10))).toEqual({ value: 20 });
    });

    test('decrement with empty state', () => {
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 });
    });
});
