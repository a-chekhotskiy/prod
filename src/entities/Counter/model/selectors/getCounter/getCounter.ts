import { StateSchema } from 'app/providers/StoreProvider/StateSchema';

export const getCounter = (state: StateSchema) => state.counter;
