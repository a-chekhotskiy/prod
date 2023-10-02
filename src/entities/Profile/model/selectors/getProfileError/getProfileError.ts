import { StateSchema } from 'app/providers/StoreProvider/StateSchema';

export const getProfileError = (state: StateSchema) => state?.profile?.error;
