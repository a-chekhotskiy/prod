import { StateSchema } from 'app/providers/StoreProvider/StateSchema';

export const getLoginLoading = (state: StateSchema) => state?.login?.isLoading ?? false;
