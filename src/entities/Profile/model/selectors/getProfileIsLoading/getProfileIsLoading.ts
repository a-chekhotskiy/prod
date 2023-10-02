import { StateSchema } from 'app/providers/StoreProvider/StateSchema';

export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading;
