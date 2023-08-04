import { StateSchema } from 'app/providers/StoreProvider/StateSchema';

export const getLoginUsername = (state: StateSchema) => state?.login?.username ?? '';
