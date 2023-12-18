import { StateSchema } from 'app/providers/StoreProvider/StateSchema';

export const getProfileReadOnly = (state: StateSchema) => state?.profile?.readOnly;
