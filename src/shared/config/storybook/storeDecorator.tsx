import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/StateSchema';
import { LoginSchema } from 'features/AuthForm';

export const storeDecorator = (state: LoginSchema) => (story: () => any) => {
    const store = createReduxStore({
        login: state,
    } as StateSchema);

    return <Provider store={store}>{story()}</Provider>;
};
