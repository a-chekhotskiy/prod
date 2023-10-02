import { StateSchema } from 'app/providers/StoreProvider/StateSchema';

export const getProfileState = (state: StateSchema) => state?.profile?.data;
