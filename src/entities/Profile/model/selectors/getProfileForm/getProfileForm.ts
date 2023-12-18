import { StateSchema } from 'app/providers/StoreProvider/StateSchema';

export const getProfileForm = (state: StateSchema) => state?.profile?.form;
