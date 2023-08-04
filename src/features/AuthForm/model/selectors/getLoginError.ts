import { StateSchema } from 'app/providers/StoreProvider/StateSchema';

export const getLoginState = (state: StateSchema) => state.login.error;
