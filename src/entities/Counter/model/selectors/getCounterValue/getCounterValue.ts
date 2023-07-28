import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/CounterSchema';

// использовать не нужно было тк нет никаких вычислений, фильтраций и тд. просто пример
export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value);
