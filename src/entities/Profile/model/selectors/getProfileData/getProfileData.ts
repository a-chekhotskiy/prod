import { StateSchema } from 'app/providers/StoreProvider/StateSchema';

export const getProfileData = (state: StateSchema) => state?.profile?.data;
