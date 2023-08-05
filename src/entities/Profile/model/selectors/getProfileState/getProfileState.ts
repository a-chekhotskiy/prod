import { StateSchema } from 'app/providers/StoreProvider/StateSchema';

export const getUserAuthState = (state: StateSchema) => state.user.data;
