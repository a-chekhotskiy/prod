import { StateSchema } from 'app/providers/StoreProvider/StateSchema';

export const getLoginPassword = (state: StateSchema) => state?.login?.password ?? '';
