import { StateSchema } from 'app/providers/StoreProvider/StateSchema';

export const getLoginError = (state: StateSchema) => state?.login?.error ?? '';
